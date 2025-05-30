interface AnimationControlsProps {
  step: number;
  totalSteps: number;
  playing: boolean;
  onStepChange: (newStep: number) => void;
  onPlayingChange: (playing: boolean) => void;
}

export default function AnimationControls({
  step,
  totalSteps,
  playing,
  onStepChange,
  onPlayingChange,
}: AnimationControlsProps) {
  return (
    <div className="flex gap-2 items-center">
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 transition-colors"
        onClick={() => onStepChange(Math.max(0, step - 1))}
        disabled={step === 0}
      >
        Previous
      </button>
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
        onClick={() => onPlayingChange(!playing)}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 transition-colors"
        onClick={() => onStepChange(Math.min(totalSteps - 1, step + 1))}
        disabled={step === totalSteps - 1}
      >
        Next
      </button>
    </div>
  );
} 