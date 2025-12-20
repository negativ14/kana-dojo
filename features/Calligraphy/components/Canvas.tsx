'use client';
import { useRef, useEffect, useCallback, useState } from 'react';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';

interface Point {
  x: number;
  y: number;
  pressure: number;
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  const [completedStrokes, setCompletedStrokes] = useState<Point[][]>([]);

  const selectedBrushType = useCalligraphyStore(
    state => state.selectedBrushType
  );
  const selectedCharacter = useCalligraphyStore(
    state => state.selectedCharacter
  );
  const currentStrokeIndex = useCalligraphyStore(
    state => state.currentStrokeIndex
  );
  const showGuide = useCalligraphyStore(state => state.showGuide);
  const currentStage = useCalligraphyStore(state => state.currentStage);
  const isDrawing = useCalligraphyStore(state => state.isDrawing);
  const setIsDrawing = useCalligraphyStore(state => state.setIsDrawing);
  const incrementStroke = useCalligraphyStore(state => state.incrementStroke);
  const incrementCorrect = useCalligraphyStore(state => state.incrementCorrect);
  const incrementMissed = useCalligraphyStore(state => state.incrementMissed);
  const setShowWrongStroke = useCalligraphyStore(
    state => state.setShowWrongStroke
  );
  const setShowCelebration = useCalligraphyStore(
    state => state.setShowCelebration
  );
  const addCompletedCharacter = useCalligraphyStore(
    state => state.addCompletedCharacter
  );
  const setCurrentStage = useCalligraphyStore(state => state.setCurrentStage);

  // Brush configurations - different line widths
  const brushConfig = {
    brush: {
      baseWidth: 12,
      minWidth: 4,
      maxWidth: 20,
      pressureSensitivity: 1.5
    },
    pen: { baseWidth: 5, minWidth: 3, maxWidth: 7, pressureSensitivity: 0.5 },
    pencil: { baseWidth: 2, minWidth: 1, maxWidth: 3, pressureSensitivity: 0.3 }
  };

  // Get current stroke guide
  const currentGuideStroke = selectedCharacter?.strokes[currentStrokeIndex];
  const totalStrokes = selectedCharacter?.strokes.length || 0;

  // Resize canvas to fit container
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    drawCanvas();
  }, []);

  // Initialize and handle resize
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Redraw when state changes
  useEffect(() => {
    drawCanvas();
  }, [
    selectedCharacter,
    currentStrokeIndex,
    showGuide,
    completedStrokes,
    currentPoints,
    currentStage
  ]);

  // Reset canvas when character changes
  useEffect(() => {
    setCompletedStrokes([]);
    setCurrentPoints([]);
  }, [selectedCharacter]);

  // Draw the entire canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw grid lines
    drawGrid(ctx, rect.width, rect.height);

    // Draw completed strokes (grey/faded)
    completedStrokes.forEach(stroke => {
      drawStroke(ctx, stroke, 'var(--secondary-color)', 0.4, rect);
    });

    // Draw guide stroke if enabled and in stroke stage
    if (showGuide && currentStage === 'stroke' && currentGuideStroke) {
      drawGuideStroke(ctx, currentGuideStroke, rect);
    }

    // Draw current stroke being drawn
    if (currentPoints.length > 1) {
      drawStroke(ctx, currentPoints, 'var(--main-color)', 1, rect);
    }

    // Stage 2: Show faded reference character
    if (currentStage === 'full' && selectedCharacter) {
      ctx.font = `${rect.height * 0.6}px "Noto Sans JP", sans-serif`;
      ctx.fillStyle = 'var(--secondary-color)';
      ctx.globalAlpha = 0.1;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        selectedCharacter.character,
        rect.width / 2,
        rect.height / 2
      );
      ctx.globalAlpha = 1;
    }
  }, [
    completedStrokes,
    currentPoints,
    currentGuideStroke,
    showGuide,
    currentStage,
    selectedCharacter
  ]);

  // Draw grid lines
  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx.strokeStyle = 'var(--border-color)';
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 1;

    // Vertical center line
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Horizontal center line
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    ctx.globalAlpha = 1;
  };

  // Draw a stroke
  const drawStroke = (
    ctx: CanvasRenderingContext2D,
    points: Point[],
    color: string,
    opacity: number,
    rect: DOMRect
  ) => {
    if (points.length < 2) return;

    const config = brushConfig[selectedBrushType];

    ctx.strokeStyle = color;
    ctx.globalAlpha = opacity;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();

    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      // Calculate line width based on pressure
      const pressureWidth =
        config.minWidth +
        (config.maxWidth - config.minWidth) *
          point.pressure *
          config.pressureSensitivity;
      ctx.lineWidth = Math.min(
        Math.max(pressureWidth, config.minWidth),
        config.maxWidth
      );

      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        const prevPoint = points[i - 1];
        // Smooth curve using quadratic bezier
        const midX = (prevPoint.x + point.x) / 2;
        const midY = (prevPoint.y + point.y) / 2;
        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, midY);
      }
    }

    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  // Draw guide stroke with start point
  const drawGuideStroke = (
    ctx: CanvasRenderingContext2D,
    stroke: { pathData: string; startX: number; startY: number },
    rect: DOMRect
  ) => {
    // Scale factors (stroke data is for 400x350 viewBox)
    const scaleX = rect.width / 400;
    const scaleY = rect.height / 350;

    // Draw dashed guide path
    ctx.save();
    ctx.scale(scaleX, scaleY);

    ctx.strokeStyle = 'var(--main-color)';
    ctx.globalAlpha = 0.5;
    ctx.lineWidth = 6 / Math.min(scaleX, scaleY);
    ctx.setLineDash([12, 6]);
    ctx.lineCap = 'round';

    const path = new Path2D(stroke.pathData);
    ctx.stroke(path);

    ctx.restore();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;

    // Draw start point (green dot)
    const startX = stroke.startX * scaleX;
    const startY = stroke.startY * scaleY;

    // Outer green circle
    ctx.beginPath();
    ctx.arc(startX, startY, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#22c55e';
    ctx.fill();

    // Inner white circle
    ctx.beginPath();
    ctx.arc(startX, startY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  };

  // Get point from mouse/touch event
  const getPoint = (e: React.MouseEvent | React.TouchEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, pressure: 0.5 };

    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number, pressure: number;

    if ('touches' in e) {
      const touch = e.touches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
      // Try to get pressure from touch event
      pressure = (touch as any).force || 0.5;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
      // Use button state for mouse pressure simulation
      pressure = e.buttons === 1 ? 0.7 : 0.5;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
      pressure: Math.max(0.1, Math.min(1, pressure))
    };
  };

  // Validate if stroke follows the guide path
  const validateStroke = (points: Point[]): boolean => {
    if (!currentGuideStroke || points.length < 5) return false;

    const container = containerRef.current;
    if (!container) return false;

    const rect = container.getBoundingClientRect();
    const scaleX = rect.width / 400;
    const scaleY = rect.height / 350;

    // Check if starting point is near the guide start
    const startX = currentGuideStroke.startX * scaleX;
    const startY = currentGuideStroke.startY * scaleY;
    const firstPoint = points[0];

    const startDistance = Math.sqrt(
      Math.pow(firstPoint.x - startX, 2) + Math.pow(firstPoint.y - startY, 2)
    );

    // Allow 50px tolerance for start point
    if (startDistance > 50) return false;

    // For now, if start is correct, consider it valid
    // More advanced validation could check the path shape
    return true;
  };

  // Handle pointer down
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    const point = getPoint(e);
    setCurrentPoints([point]);
  };

  // Handle pointer move
  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const point = getPoint(e);
    setCurrentPoints(prev => [...prev, point]);
  };

  // Handle pointer up
  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (currentPoints.length > 2) {
      // Validate the stroke
      const isValid =
        currentStage === 'stroke' ? validateStroke(currentPoints) : true;

      if (isValid) {
        // Add to completed strokes
        setCompletedStrokes(prev => [...prev, currentPoints]);
        incrementCorrect();

        // Check if all strokes are complete
        if (currentStage === 'stroke') {
          if (currentStrokeIndex + 1 >= totalStrokes) {
            // All strokes complete - show celebration
            setTimeout(() => {
              setShowCelebration(true);
            }, 300);
          } else {
            // Move to next stroke
            incrementStroke();
          }
        }
      } else {
        // Invalid stroke
        incrementMissed();
        setShowWrongStroke(true);
        setTimeout(() => setShowWrongStroke(false), 1500);
      }
    }

    setCurrentPoints([]);
  };

  // Clear canvas
  const handleClear = () => {
    setCompletedStrokes([]);
    setCurrentPoints([]);
  };

  // Undo last stroke
  const handleUndo = () => {
    setCompletedStrokes(prev => prev.slice(0, -1));
  };

  return (
    <div
      ref={containerRef}
      className='relative w-full aspect-[4/3] bg-[var(--card-color)] rounded-xl border border-[var(--border-color)] overflow-hidden'
    >
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full cursor-crosshair touch-none'
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />

      {/* Hint text */}
      {showGuide && currentStage === 'stroke' && currentGuideStroke && (
        <div className='absolute bottom-3 left-3 pointer-events-none'>
          <span className='px-2 py-1 rounded-lg bg-[var(--background-color)]/80 text-[var(--secondary-color)] text-xs backdrop-blur-sm'>
            Start from <span className='text-green-500'>●</span> and follow the
            path
          </span>
        </div>
      )}

      {/* Stroke info */}
      {currentStage === 'stroke' && currentGuideStroke && (
        <div className='absolute top-3 right-3 pointer-events-none'>
          <span className='px-2 py-1 rounded-lg bg-[var(--background-color)]/80 text-[var(--secondary-color)] text-xs backdrop-blur-sm'>
            {currentGuideStroke.name}
          </span>
        </div>
      )}

      {/* Stage 2 hint */}
      {currentStage === 'full' && (
        <div className='absolute bottom-3 left-3 pointer-events-none'>
          <span className='px-2 py-1 rounded-lg bg-[var(--background-color)]/80 text-[var(--secondary-color)] text-xs backdrop-blur-sm'>
            Draw from memory
          </span>
        </div>
      )}

      {/* Stage 3 hint */}
      {currentStage === 'word' && (
        <div className='absolute bottom-3 left-3 pointer-events-none'>
          <span className='px-2 py-1 rounded-lg bg-[var(--background-color)]/80 text-[var(--secondary-color)] text-xs backdrop-blur-sm'>
            Write the word
          </span>
        </div>
      )}
    </div>
  );
};

export default Canvas;
