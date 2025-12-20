import { IStrokeData } from '@/features/Calligraphy/store/useCalligraphyStore';
interface Point {
  x: number;
  y: number;
}

interface ValidationResult {
  isValid: boolean;
  accuracy: number;
  message: string;
}

// Configuration for validation thresholds
const VALIDATION_CONFIG = {
  startPointTolerance: 50, // pixels - how close to start point
  pathTolerance: 40, // pixels - how close to path
  minStrokeLength: 20, // minimum pixels for valid stroke
  minPointsRequired: 5, // minimum points to validate
  samplingRate: 5, // check every Nth point
  directionTolerance: 45 // degrees - acceptable direction deviation
};

/**
 * Calculate distance between two points
 */
export const getDistance = (p1: Point, p2: Point): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

/**
 * Calculate angle between two points in degrees
 */
export const getAngle = (p1: Point, p2: Point): number => {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
};

/**
 * Parse SVG path data to extract points along the path
 */
export const parseSvgPath = (
  pathData: string,
  numPoints: number = 20
): Point[] => {
  const points: Point[] = [];

  // Extract numbers from path data
  const numbers = pathData.match(/-?\d+\.?\d*/g)?.map(Number) || [];

  if (numbers.length < 2) return points;

  // Simple parsing for M, L, Q commands
  const commands = pathData.match(/[MLQCZ]/gi) || [];
  let currentX = 0;
  let currentY = 0;
  let numIndex = 0;

  for (const cmd of commands) {
    switch (cmd.toUpperCase()) {
      case 'M': // Move to
        currentX = numbers[numIndex++] || 0;
        currentY = numbers[numIndex++] || 0;
        points.push({ x: currentX, y: currentY });
        break;
      case 'L': // Line to
        const lineEndX = numbers[numIndex++] || 0;
        const lineEndY = numbers[numIndex++] || 0;
        // Interpolate points along line
        for (let t = 0; t <= 1; t += 1 / numPoints) {
          points.push({
            x: currentX + (lineEndX - currentX) * t,
            y: currentY + (lineEndY - currentY) * t
          });
        }
        currentX = lineEndX;
        currentY = lineEndY;
        break;
      case 'Q': // Quadratic bezier
        const qcx = numbers[numIndex++] || 0;
        const qcy = numbers[numIndex++] || 0;
        const qex = numbers[numIndex++] || 0;
        const qey = numbers[numIndex++] || 0;
        // Interpolate points along quadratic bezier
        for (let t = 0; t <= 1; t += 1 / numPoints) {
          const x =
            Math.pow(1 - t, 2) * currentX +
            2 * (1 - t) * t * qcx +
            Math.pow(t, 2) * qex;
          const y =
            Math.pow(1 - t, 2) * currentY +
            2 * (1 - t) * t * qcy +
            Math.pow(t, 2) * qey;
          points.push({ x, y });
        }
        currentX = qex;
        currentY = qey;
        break;
      case 'C': // Cubic bezier
        const c1x = numbers[numIndex++] || 0;
        const c1y = numbers[numIndex++] || 0;
        const c2x = numbers[numIndex++] || 0;
        const c2y = numbers[numIndex++] || 0;
        const cex = numbers[numIndex++] || 0;
        const cey = numbers[numIndex++] || 0;
        // Interpolate points along cubic bezier
        for (let t = 0; t <= 1; t += 1 / numPoints) {
          const x =
            Math.pow(1 - t, 3) * currentX +
            3 * Math.pow(1 - t, 2) * t * c1x +
            3 * (1 - t) * Math.pow(t, 2) * c2x +
            Math.pow(t, 3) * cex;
          const y =
            Math.pow(1 - t, 3) * currentY +
            3 * Math.pow(1 - t, 2) * t * c1y +
            3 * (1 - t) * Math.pow(t, 2) * c2y +
            Math.pow(t, 3) * cey;
          points.push({ x, y });
        }
        currentX = cex;
        currentY = cey;
        break;
    }
  }

  return points;
};

/**
 * Find the minimum distance from a point to any point on the path
 */
export const getMinDistanceToPath = (
  point: Point,
  pathPoints: Point[]
): number => {
  let minDistance = Infinity;

  for (const pathPoint of pathPoints) {
    const distance = getDistance(point, pathPoint);
    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  return minDistance;
};

/**
 * Calculate stroke direction (general direction from start to end)
 */
export const getStrokeDirection = (points: Point[]): number => {
  if (points.length < 2) return 0;
  const start = points[0];
  const end = points[points.length - 1];
  return getAngle(start, end);
};

/**
 * Validate if user's stroke matches the guide stroke
 */
export const validateStroke = (
  userPoints: Point[],
  guideStroke: IStrokeData,
  canvasWidth: number,
  canvasHeight: number
): ValidationResult => {
  // Scale factors (stroke data is for 400x350 viewBox)
  const scaleX = canvasWidth / 400;
  const scaleY = canvasHeight / 350;

  // Check minimum points
  if (userPoints.length < VALIDATION_CONFIG.minPointsRequired) {
    return {
      isValid: false,
      accuracy: 0,
      message: 'Stroke too short. Try drawing longer.'
    };
  }

  // Check stroke length
  let totalLength = 0;
  for (let i = 1; i < userPoints.length; i++) {
    totalLength += getDistance(userPoints[i - 1], userPoints[i]);
  }

  if (totalLength < VALIDATION_CONFIG.minStrokeLength) {
    return {
      isValid: false,
      accuracy: 0,
      message: 'Stroke too short. Draw with more confidence!'
    };
  }

  // Check start point
  const scaledStartX = guideStroke.startX * scaleX;
  const scaledStartY = guideStroke.startY * scaleY;
  const userStart = userPoints[0];
  const startDistance = getDistance(userStart, {
    x: scaledStartX,
    y: scaledStartY
  });

  if (startDistance > VALIDATION_CONFIG.startPointTolerance) {
    return {
      isValid: false,
      accuracy: 0,
      message: 'Start from the green dot!'
    };
  }

  // Parse guide path and scale it
  const guidePoints = parseSvgPath(guideStroke.pathData);
  const scaledGuidePoints = guidePoints.map(p => ({
    x: p.x * scaleX,
    y: p.y * scaleY
  }));

  if (scaledGuidePoints.length === 0) {
    // If we can't parse the path, just validate start point
    return {
      isValid: true,
      accuracy: 80,
      message: 'Good stroke!'
    };
  }

  // Check how well user follows the path
  let totalDeviation = 0;
  let sampledPoints = 0;

  for (let i = 0; i < userPoints.length; i += VALIDATION_CONFIG.samplingRate) {
    const userPoint = userPoints[i];
    const minDistance = getMinDistanceToPath(userPoint, scaledGuidePoints);
    totalDeviation += minDistance;
    sampledPoints++;
  }

  const averageDeviation = totalDeviation / sampledPoints;

  // Calculate accuracy (100% at 0 deviation, 0% at pathTolerance * 2)
  const maxAcceptableDeviation = VALIDATION_CONFIG.pathTolerance * 2;
  const accuracy = Math.max(
    0,
    Math.min(100, 100 - (averageDeviation / maxAcceptableDeviation) * 100)
  );

  // Check direction similarity
  const userDirection = getStrokeDirection(userPoints);
  const guideDirection = getStrokeDirection(scaledGuidePoints);
  const directionDiff = Math.abs(userDirection - guideDirection);
  const normalizedDirDiff =
    directionDiff > 180 ? 360 - directionDiff : directionDiff;

  // Determine if stroke is valid
  const isPathValid = averageDeviation <= VALIDATION_CONFIG.pathTolerance;
  const isDirectionValid =
    normalizedDirDiff <= VALIDATION_CONFIG.directionTolerance;
  const isValid = isPathValid && isDirectionValid;

  // Generate appropriate message
  let message = '';
  if (isValid) {
    if (accuracy >= 90) {
      message = 'Perfect! 完璧!';
    } else if (accuracy >= 75) {
      message = 'Great stroke! いいね!';
    } else {
      message = 'Good! Keep practicing!';
    }
  } else {
    if (!isDirectionValid) {
      message = 'Wrong direction! Follow the path direction.';
    } else {
      message = 'Stay closer to the guide path!';
    }
  }

  return {
    isValid,
    accuracy: Math.round(accuracy),
    message
  };
};

/**
 * Validate complete character (all strokes)
 */
export const validateCharacter = (
  strokeResults: ValidationResult[]
): { isComplete: boolean; overallAccuracy: number } => {
  if (strokeResults.length === 0) {
    return { isComplete: false, overallAccuracy: 0 };
  }

  const allValid = strokeResults.every(r => r.isValid);
  const overallAccuracy =
    strokeResults.reduce((sum, r) => sum + r.accuracy, 0) /
    strokeResults.length;

  return {
    isComplete: allValid,
    overallAccuracy: Math.round(overallAccuracy)
  };
};

/**
 * Get hint for current stroke
 */
export const getStrokeHint = (stroke: IStrokeData): string => {
  const hints: Record<string, string> = {
    Horizontal: 'Draw from left to right',
    Vertical: 'Draw from top to bottom',
    'Vertical curve': 'Start at top, curve as you go down',
    Diagonal: 'Draw at an angle',
    Loop: 'Make a curved loop motion',
    'Curved stroke': 'Follow the curve smoothly',
    'Top dot': 'A short press or tap',
    'Left stroke': 'Draw on the left side',
    'Right stroke': 'Draw on the right side',
    'Main body': 'The main part of the character',
    'Top horizontal': 'Horizontal stroke at the top',
    'Bottom horizontal': 'Horizontal stroke at the bottom'
  };

  return hints[stroke.name] || `Draw the ${stroke.name.toLowerCase()}`;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  validateStroke,
  validateCharacter,
  getStrokeHint,
  getDistance,
  getAngle,
  parseSvgPath
};
