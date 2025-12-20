'use client';
import clsx from 'clsx';
import useCalligraphyStore from '@/features/Calligraphy/store/useCalligraphyStore';
import { hiraganaData } from '@/features/Calligraphy/data/hiraganaStrokes';
import { katakanaData } from '@/features/Calligraphy/data/katakanaStrokes';

const KanaTypeToggle = () => {
  const selectedKanaType = useCalligraphyStore(state => state.selectedKanaType);
  const setSelectedKanaType = useCalligraphyStore(
    state => state.setSelectedKanaType
  );
  const setSelectedCharacter = useCalligraphyStore(
    state => state.setSelectedCharacter
  );
  const resetStrokes = useCalligraphyStore(state => state.resetStrokes);

  const handleToggle = (type: 'hiragana' | 'katakana') => {
    if (type !== selectedKanaType) {
      setSelectedKanaType(type);
      // Set first character of new type
      const data = type === 'hiragana' ? hiraganaData : katakanaData;
      if (data.length > 0) {
        setSelectedCharacter(data[0]);
        resetStrokes();
      }
    }
  };

  return (
    <div className='inline-flex bg-[var(--card-color)] rounded-xl p-1 border border-[var(--border-color)]'>
      <button
        onClick={() => handleToggle('hiragana')}
        className={clsx(
          'px-4 py-1.5 rounded-lg text-sm font-medium transition-all',
          selectedKanaType === 'hiragana'
            ? 'bg-[var(--main-color)] text-[var(--background-color)]'
            : 'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
        )}
      >
        ひらがな
      </button>
      <button
        onClick={() => handleToggle('katakana')}
        className={clsx(
          'px-4 py-1.5 rounded-lg text-sm font-medium transition-all',
          selectedKanaType === 'katakana'
            ? 'bg-[var(--main-color)] text-[var(--background-color)]'
            : 'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
        )}
      >
        カタカナ
      </button>
    </div>
  );
};

export default KanaTypeToggle;
