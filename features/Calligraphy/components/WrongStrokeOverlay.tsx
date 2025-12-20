'use client';
import { useEffect } from 'react';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';

const WrongStrokeOverlay = () => {
  const showWrongStroke = useCalligraphyStore(state => state.showWrongStroke);
  const setShowWrongStroke = useCalligraphyStore(
    state => state.setShowWrongStroke
  );

  // Auto-hide after 1.5 seconds
  useEffect(() => {
    if (showWrongStroke) {
      const timer = setTimeout(() => {
        setShowWrongStroke(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showWrongStroke, setShowWrongStroke]);

  if (!showWrongStroke) return null;

  return (
    <div className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center p-4 animate-pulse'>
      <div className='bg-[var(--card-color)] rounded-2xl border-2 border-red-500 p-6 max-w-sm w-full text-center shadow-2xl animate-bounce'>
        <div className='text-4xl mb-3'>❌</div>
        <div className='text-red-500 text-lg font-medium mb-2'>
          Stroke went off path!
        </div>
        <div className='text-[var(--secondary-color)] text-sm mb-4'>
          Start from the green dot and follow the yellow guide
        </div>
        <button
          onClick={() => setShowWrongStroke(false)}
          className='px-6 py-2 rounded-xl bg-red-500/20 text-red-500 border border-red-500/40 hover:bg-red-500/30 transition-colors text-sm font-medium'
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default WrongStrokeOverlay;
