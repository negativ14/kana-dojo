'use client';
import { useEffect, useRef } from 'react';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';
import { hiraganaData } from '@/features/Calligraphy/data/hiraganaStrokes';
import { katakanaData } from '@/features/Calligraphy/data/katakanaStrokes';
import Canvas from './Canvas';
import CharacterSelector from './CharacterSelector';
import BrushSelector from './BrushSelector';
import StageProgress from './StageProgress';
import StatsPanel from './StatsPanel';
import StrokeProgress from './StrokeProgress';
import HowToUseModal from './HowToUseModal';
import WrongStrokeOverlay from './WrongStrokeOverlay';
import CelebrationOverlay from './CelebrationOverlay';
import KanaTypeToggle from './KanaTypeToggle';

const CalligraphyPage = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Store state
  const selectedKanaType = useCalligraphyStore(state => state.selectedKanaType);
  const selectedCharacter = useCalligraphyStore(
    state => state.selectedCharacter
  );
  const setSelectedCharacter = useCalligraphyStore(
    state => state.setSelectedCharacter
  );
  const setShowCharacterSelector = useCalligraphyStore(
    state => state.setShowCharacterSelector
  );
  const setShowHowToUse = useCalligraphyStore(state => state.setShowHowToUse);
  const showGuide = useCalligraphyStore(state => state.showGuide);
  const toggleGuide = useCalligraphyStore(state => state.toggleGuide);
  const currentStage = useCalligraphyStore(state => state.currentStage);
  const currentWord = useCalligraphyStore(state => state.currentWord);
  const currentWordCharIndex = useCalligraphyStore(
    state => state.currentWordCharIndex
  );

  // Set default character on mount
  useEffect(() => {
    if (!selectedCharacter) {
      const data =
        selectedKanaType === 'hiragana' ? hiraganaData : katakanaData;
      if (data.length > 0) {
        setSelectedCharacter(data[0]);
      }
    }
  }, [selectedCharacter, selectedKanaType, setSelectedCharacter]);

  // Handle clear and undo - these will be passed to canvas
  const handleClear = () => {
    // Canvas handles this internally via ref or event
    window.dispatchEvent(new CustomEvent('calligraphy:clear'));
  };

  const handleUndo = () => {
    window.dispatchEvent(new CustomEvent('calligraphy:undo'));
  };

  return (
    <div className='flex flex-col gap-4 items-center min-h-[100dvh] max-w-5xl mx-auto px-4 py-6'>
      {/* Header */}
      <div className='w-full flex items-center justify-between'>
        <button
          onClick={() => setShowCharacterSelector(true)}
          className='flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] hover:border-[var(--main-color)] transition-colors'
        >
          <span className='text-2xl font-japanese text-[var(--main-color)]'>
            書道
          </span>
          <svg
            className='w-4 h-4 text-[var(--secondary-color)]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>

        <button
          onClick={() => setShowHowToUse(true)}
          className='px-3 py-2 rounded-xl bg-[var(--card-color)] text-[var(--secondary-color)] text-sm border border-[var(--border-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] transition-colors'
        >
          ? Guide
        </button>
      </div>

      {/* Kana Type Toggle */}
      <KanaTypeToggle />

      {/* Stage Progress */}
      <StageProgress />

      {/* Main Content */}
      <div className='w-full flex flex-col lg:flex-row gap-4'>
        {/* Left Panel - Character Info (Desktop) */}
        <div className='hidden lg:flex lg:w-48 flex-col gap-4'>
          {/* Character Display */}
          <button
            onClick={() => setShowCharacterSelector(true)}
            className='w-full aspect-square rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--main-color)] transition-colors group'
          >
            <span className='text-7xl font-japanese text-[var(--main-color)] group-hover:scale-105 transition-transform'>
              {selectedCharacter?.character || 'あ'}
            </span>
          </button>

          {/* Romaji & Sound */}
          <div className='text-center'>
            <div className='text-2xl text-[var(--main-color)] font-medium'>
              {selectedCharacter?.romaji || 'a'}
            </div>
            <button className='mt-2 px-3 py-1.5 rounded-lg bg-[var(--card-color)] text-[var(--secondary-color)] text-sm border border-[var(--border-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] transition-colors'>
              🔊 Listen
            </button>
          </div>

          {/* Stroke Progress */}
          <StrokeProgress />

          {/* Brush Selector */}
          <div>
            <div className='text-xs text-[var(--secondary-color)] mb-2'>
              Brush
            </div>
            <BrushSelector />
          </div>
        </div>

        {/* Center - Canvas */}
        <div className='flex-1' ref={canvasContainerRef}>
          {/* Word display for Stage 3 */}
          {currentStage === 'word' && currentWord && (
            <div className='mb-4 text-center'>
              <div className='text-3xl font-japanese text-[var(--main-color)] mb-1'>
                {currentWord.word}
              </div>
              <div className='text-[var(--secondary-color)]'>
                {currentWord.reading} - {currentWord.meaning}
              </div>
              <div className='flex justify-center gap-2 mt-2'>
                {currentWord.word.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`text-xl font-japanese px-2 py-1 rounded ${
                      index < currentWordCharIndex
                        ? 'text-green-500 bg-green-500/10'
                        : index === currentWordCharIndex
                          ? 'text-[var(--main-color)] bg-[var(--main-color)]/10 border border-[var(--main-color)]'
                          : 'text-[var(--secondary-color)]'
                    }`}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Canvas />

          {/* Canvas Controls */}
          <div className='flex justify-center gap-2 mt-4'>
            <button
              onClick={handleClear}
              className='px-4 py-2 rounded-lg bg-[var(--card-color)] text-[var(--secondary-color)] text-sm border border-[var(--border-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] transition-colors'
            >
              Clear
            </button>

            {currentStage === 'stroke' && (
              <button
                onClick={toggleGuide}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                  showGuide
                    ? 'bg-[var(--main-color)]/20 border-[var(--main-color)] text-[var(--main-color)]'
                    : 'bg-[var(--card-color)] border-[var(--border-color)] text-[var(--secondary-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)]'
                }`}
              >
                Guide
              </button>
            )}

            <button
              onClick={handleUndo}
              className='px-4 py-2 rounded-lg bg-[var(--card-color)] text-[var(--secondary-color)] text-sm border border-[var(--border-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] transition-colors'
            >
              Undo
            </button>
          </div>

          {/* Mobile: Character & Controls Row */}
          <div className='flex lg:hidden items-center justify-between mt-4 gap-4'>
            {/* Character (clickable) */}
            <button
              onClick={() => setShowCharacterSelector(true)}
              className='flex items-center gap-3'
            >
              <div className='w-14 h-14 rounded-lg bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center'>
                <span className='text-3xl font-japanese text-[var(--main-color)]'>
                  {selectedCharacter?.character || 'あ'}
                </span>
              </div>
              <div>
                <div className='text-lg text-[var(--main-color)] font-medium'>
                  {selectedCharacter?.romaji || 'a'}
                </div>
                <div className='text-xs text-[var(--secondary-color)]'>
                  Tap to change
                </div>
              </div>
            </button>

            {/* Brush Selector (compact) */}
            <BrushSelector showLabels={false} size='sm' />
          </div>
        </div>

        {/* Right Panel - Stats (Desktop) */}
        <div className='hidden lg:block lg:w-40'>
          <StatsPanel layout='vertical' />
        </div>
      </div>

      {/* Bottom Stats (Mobile) */}
      <div className='w-full lg:hidden'>
        <StatsPanel layout='horizontal' />
      </div>

      {/* Modals & Overlays */}
      <CharacterSelector />
      <HowToUseModal />
      <WrongStrokeOverlay />
      <CelebrationOverlay />
    </div>
  );
};

export default CalligraphyPage;
