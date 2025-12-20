'use client';
import clsx from 'clsx';
import useCalligraphyStore, {
  LearningStage
} from '@/features/Calligraphy/store/useCalligraphyStore';

const stages: { stage: LearningStage; number: number; label: string }[] = [
  { stage: 'stroke', number: 1, label: 'Stroke' },
  { stage: 'full', number: 2, label: 'Full' },
  { stage: 'word', number: 3, label: 'Word' }
];

const StageProgress = () => {
  const currentStage = useCalligraphyStore(state => state.currentStage);
  const setCurrentStage = useCalligraphyStore(state => state.setCurrentStage);
  const resetStrokes = useCalligraphyStore(state => state.resetStrokes);

  const handleStageChange = (stage: LearningStage) => {
    setCurrentStage(stage);
    resetStrokes();
  };

  const getStageStatus = (
    stage: LearningStage
  ): 'active' | 'completed' | 'locked' => {
    const currentIndex = stages.findIndex(s => s.stage === currentStage);
    const stageIndex = stages.findIndex(s => s.stage === stage);

    if (stage === currentStage) return 'active';
    if (stageIndex < currentIndex) return 'completed';
    return 'locked';
  };

  return (
    <div className='flex items-center justify-center gap-2 sm:gap-3'>
      {stages.map((stageItem, index) => {
        const status = getStageStatus(stageItem.stage);

        return (
          <div
            key={stageItem.stage}
            className='flex items-center gap-2 sm:gap-3'
          >
            <button
              onClick={() => handleStageChange(stageItem.stage)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all',
                status === 'active'
                  ? 'bg-[var(--main-color)] text-[var(--background-color)]'
                  : status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-[var(--background-color)] text-[var(--secondary-color)] border border-[var(--border-color)] hover:border-[var(--main-color)] hover:text-[var(--main-color)]'
              )}
            >
              {stageItem.number}. {stageItem.label}
            </button>

            {/* Connector line */}
            {index < stages.length - 1 && (
              <div
                className={clsx(
                  'w-4 sm:w-8 h-0.5 rounded-full',
                  getStageStatus(stages[index + 1].stage) !== 'locked'
                    ? 'bg-green-500'
                    : 'bg-[var(--border-color)]'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StageProgress;
