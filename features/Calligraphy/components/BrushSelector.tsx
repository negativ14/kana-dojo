'use client';
import clsx from 'clsx';
import useCalligraphyStore, {
  BrushType
} from '@/features/Calligraphy/store/useCalligraphyStore';

const brushes: {
  type: BrushType;
  icon: string;
  label: string;
  labelJp: string;
}[] = [
  { type: 'brush', icon: '🖌️', label: 'Brush', labelJp: '筆' },
  { type: 'pen', icon: '✒️', label: 'Pen', labelJp: 'ペン' },
  { type: 'pencil', icon: '✏️', label: 'Pencil', labelJp: '鉛筆' }
];

interface BrushSelectorProps {
  showLabels?: boolean;
  size?: 'sm' | 'md';
}

const BrushSelector = ({
  showLabels = true,
  size = 'md'
}: BrushSelectorProps) => {
  const selectedBrushType = useCalligraphyStore(
    state => state.selectedBrushType
  );
  const setSelectedBrushType = useCalligraphyStore(
    state => state.setSelectedBrushType
  );

  return (
    <div className='flex gap-1'>
      {brushes.map(brush => {
        const isSelected = selectedBrushType === brush.type;

        return (
          <button
            key={brush.type}
            onClick={() => setSelectedBrushType(brush.type)}
            title={`${brush.label} (${brush.labelJp})`}
            className={clsx(
              'flex flex-col items-center justify-center rounded-lg transition-all',
              size === 'sm' ? 'px-2 py-1.5' : 'px-3 py-2',
              isSelected
                ? 'bg-[var(--main-color)]/20 border border-[var(--main-color)] text-[var(--main-color)]'
                : 'bg-[var(--background-color)] border border-[var(--border-color)] text-[var(--secondary-color)] hover:text-[var(--main-color)] hover:border-[var(--main-color)]'
            )}
          >
            <span className={size === 'sm' ? 'text-base' : 'text-lg'}>
              {brush.icon}
            </span>
            {showLabels && (
              <span
                className={clsx(
                  'hidden sm:block',
                  size === 'sm' ? 'text-[10px]' : 'text-xs'
                )}
              >
                {brush.labelJp}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default BrushSelector;
