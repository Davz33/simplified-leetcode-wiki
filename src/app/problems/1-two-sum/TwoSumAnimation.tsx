import React, { useState, useEffect, useRef } from 'react';

// Precompute the steps for the animation
function getSteps(nums: number[], target: number) {
  const steps = [];
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    steps.push({
      i,
      nums: [...nums],
      map: { ...map },
      current: nums[i],
      complement,
      found: map.hasOwnProperty(complement),
      answer: map.hasOwnProperty(complement) ? [map[complement], i] : null,
    });
    if (map.hasOwnProperty(complement)) break;
    map[nums[i]] = i;
  }
  return steps;
}

export default function TwoSumAnimation({ nums: propNums, target: propTarget }: { nums?: number[], target?: number }) {
  const defaultNums = [2, 7, 11, 15, 1, 8];
  const defaultTarget = 9;
  
  const numsToUse = propNums ?? defaultNums;
  const targetToUse = propTarget ?? defaultTarget;
  const steps = getSteps(numsToUse, targetToUse);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (playing && step < steps.length - 1) {
      intervalRef.current = setTimeout(() => setStep(s => s + 1), 1200);
    } else if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [playing, step]);

  const current = steps[step];

  // Safety check: if no steps available, return null or loading state
  if (!current) {
    return <div className="text-center p-4">Loading animation...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 mb-2">
        {current.nums.map((num, idx) => (
          <div
            key={idx}
            className={`w-12 h-12 flex flex-col items-center justify-center rounded border-2 text-lg font-bold transition-all duration-300
              ${idx === current.i ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : ''}
              ${current.answer && (idx === current.answer[0] || idx === current.answer[1]) ? 'bg-green-100 border-green-500 text-green-700 scale-110' : ''}
              ${!current.answer && idx !== current.i ? 'bg-white border-gray-300 text-gray-700' : ''}
            `}
          >
            {num}
            <span className="text-xs text-gray-400">{idx}</span>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2">
        <div>Target: <b>{targetToUse}</b></div>
        <div>Current index: <b>{current.i}</b> (value: <b>{current.current}</b>)</div>
        <div>Complement needed: <b>{current.complement}</b></div>
        <div>Hash map: {Object.keys(current.map).length === 0 ? <span className="text-gray-400">&#123;&#125;</span> : (
          <span>{Object.entries(current.map).map(([k, v]) => `${k}: ${v}`).join(', ')}</span>
        )}</div>
        {current.answer ? (
          <div className="text-green-700 font-semibold mt-1">Found! Indices: [{current.answer[0]}, {current.answer[1]}]</div>
        ) : (
          <div className="text-gray-500 mt-1">Checking if complement exists in hash map...</div>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
          onClick={() => setPlaying(p => !p)}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
          onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
} 