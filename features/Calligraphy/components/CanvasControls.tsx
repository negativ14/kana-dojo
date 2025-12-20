'use client';
import clsx from 'clsx';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';

interface CanvasControlsProps {
  onClear: () => void;
  onUndo: () => void;
}

const CanvasControls = ({ onClear, onUndo }: CanvasControlsProps) => {
  const showGuide = useCalligraphyStore(state => state.showGuide);
  const toggleGuide = useCalligraphyStore(state => state.toggleGuide);
  const currentStage = useCalligraphyStore(state => state.currentStage);

  return (
    <div className='flex justify-center gap-2'>
      <button
        onClick={onClear}
        className='px-3 py-1.5 rounded-lg bg-[var(--background-color)] text-[var(--secondary-color)] text-sm border border-[var(--border-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] transition-colors'
      >
        Clear
      </button>

      {currentStage === 'stroke' && (
        <button
          onClick={toggleGuide}
          className={clsx(
            'px-3 py-1.5 rounded-lg text-sm border transition-colors',
            showGuide
              ? 'bg-[var(--main-color)]/20 border-[var(--main-color)] text-[var(--main-color)]'
              : 'bg-[var(--background-color)] border-[var(--border-color)] text-[var(--secondary-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)]'
          )}
        >
          Guide
        </button>
      )}

      <button
        onClick={onUndo}
        className='px-3 py-1.5 rounded-lg bg-[var(--background-color)] text-[var(--secondary-color)] text-sm border border-[var(--border-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] transition-colors'
      >
        Undo
      </button>
    </div>
  );
};

export default CanvasControls;
