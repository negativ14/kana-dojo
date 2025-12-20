'use client';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';
import { getWordForCharacter } from '@/features/Calligraphy/data/wordData';

const CelebrationOverlay = () => {
  const showCelebration = useCalligraphyStore(state => state.showCelebration);
  const setShowCelebration = useCalligraphyStore(
    state => state.setShowCelebration
  );
  const selectedCharacter = useCalligraphyStore(
    state => state.selectedCharacter
  );
  const addCompletedCharacter = useCalligraphyStore(
    state => state.addCompletedCharacter
  );
  const setCurrentStage = useCalligraphyStore(state => state.setCurrentStage);
  const setCurrentWord = useCalligraphyStore(state => state.setCurrentWord);
  const resetStrokes = useCalligraphyStore(state => state.resetStrokes);
  const correctStrokes = useCalligraphyStore(state => state.correctStrokes);
  const missedStrokes = useCalligraphyStore(state => state.missedStrokes);

  // Trigger confetti when shown
  useEffect(() => {
    if (showCelebration) {
      // Fire confetti
      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ['#e2b714', '#22c55e', '#3b82f6', '#f43f5e']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ['#e2b714', '#22c55e', '#3b82f6', '#f43f5e']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();

      // Add to completed characters
      if (selectedCharacter) {
        addCompletedCharacter(selectedCharacter.character);
      }
    }
  }, [showCelebration, selectedCharacter, addCompletedCharacter]);

  if (!showCelebration) return null;

  const accuracy =
    correctStrokes + missedStrokes > 0
      ? Math.round((correctStrokes / (correctStrokes + missedStrokes)) * 100)
      : 100;

  const handleContinueToWord = () => {
    if (selectedCharacter) {
      const word = getWordForCharacter(selectedCharacter.character);
      if (word) {
        setCurrentWord(word);
        setCurrentStage('word');
        resetStrokes();
      }
    }
    setShowCelebration(false);
  };

  const handleContinueToFull = () => {
    setCurrentStage('full');
    resetStrokes();
    setShowCelebration(false);
  };

  const handleClose = () => {
    setShowCelebration(false);
  };

  return (
    <div
      className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'
      onClick={handleClose}
    >
      <div
        className='bg-[var(--card-color)] rounded-2xl border border-[var(--main-color)] p-8 max-w-sm w-full text-center relative overflow-hidden'
        onClick={e => e.stopPropagation()}
      >
        {/* Character */}
        <div className='text-6xl font-japanese text-[var(--main-color)] mb-3'>
          {selectedCharacter?.character || 'あ'}
        </div>

        {/* Success message */}
        <div className='text-xl text-[var(--main-color)] font-medium mb-1'>
          Character Mastered!
        </div>
        <div className='text-[var(--main-color)] mb-5'>
          すばらしい！ (Wonderful!)
        </div>

        {/* Stats */}
        <div className='flex justify-center gap-8 mb-6'>
          <div className='text-center'>
            <div className='text-2xl text-green-500 font-bold'>{accuracy}%</div>
            <div className='text-xs text-[var(--secondary-color)]'>
              Accuracy
            </div>
          </div>
          <div className='text-center'>
            <div className='text-2xl text-[var(--main-color)] font-bold'>
              {selectedCharacter?.strokes.length || 0}/
              {selectedCharacter?.strokes.length || 0}
            </div>
            <div className='text-xs text-[var(--secondary-color)]'>Strokes</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl text-[var(--main-color)] font-bold'>
              🔥
            </div>
            <div className='text-xs text-[var(--secondary-color)]'>Streak</div>
          </div>
        </div>

        {/* Buttons */}
        <div className='space-y-2'>
          <button
            onClick={handleContinueToFull}
            className='w-full py-2.5 rounded-xl bg-[var(--main-color)] text-[var(--background-color)] font-medium hover:opacity-90 transition-opacity'
          >
            Practice Full Character →
          </button>
          <button
            onClick={handleContinueToWord}
            className='w-full py-2.5 rounded-xl bg-[var(--background-color)] text-[var(--main-color)] border border-[var(--border-color)] font-medium hover:border-[var(--main-color)] transition-colors'
          >
            Skip to Word Practice →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CelebrationOverlay;
