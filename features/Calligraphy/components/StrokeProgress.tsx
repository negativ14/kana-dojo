'use client';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';

const StrokeProgress = () => {
  const selectedCharacter = useCalligraphyStore(
    state => state.selectedCharacter
  );
  const currentStrokeIndex = useCalligraphyStore(
    state => state.currentStrokeIndex
  );
  const currentStage = useCalligraphyStore(state => state.currentStage);

  const totalStrokes = selectedCharacter?.strokes.length || 0;
  const progress =
    totalStrokes > 0 ? (currentStrokeIndex / totalStrokes) * 100 : 0;

  // Only show in stroke stage
  if (currentStage !== 'stroke') return null;

  return (
    <div className='w-full'>
      <div className='flex justify-between text-xs text-[var(--secondary-color)] mb-1'>
        <span>Stroke</span>
        <span className='text-[var(--main-color)]'>
          {currentStrokeIndex} / {totalStrokes}
        </span>
      </div>
      <div className='h-1.5 bg-[var(--background-color)] rounded-full overflow-hidden'>
        <div
          className='h-full bg-[var(--main-color)] rounded-full transition-all duration-300'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default StrokeProgress;
