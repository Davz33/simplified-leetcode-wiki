'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LongestSubstringAnimationProps {
  s?: string;
}

const defaultS = 'abcabcbb';

function getSteps(s: string) {
  const steps = [];
  let left = 0;
  const seen: Record<string, number> = {};
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (seen[char] !== undefined && seen[char] >= left) {
      left = seen[char] + 1;
    }
    seen[char] = right;
    maxLen = Math.max(maxLen, right - left + 1);
    steps.push({
      s,
      left,
      right,
      window: s.slice(left, right + 1),
      seen: { ...seen },
      maxLen,
    });
  }
  return steps;
}

export default function LongestSubstringAnimation({ s }: LongestSubstringAnimationProps) {
  const sToUse = s ?? defaultS;
  const steps = getSteps(sToUse);
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

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-1 mb-2">
        {current.s.split('').map((char, idx) => (
          <div
            key={idx}
            className={`w-10 h-12 flex flex-col items-center justify-center rounded border-2 text-lg font-bold transition-all duration-300
              ${idx >= current.left && idx <= current.right ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : 'bg-white border-gray-300 text-gray-700'}`}
          >
            {char}
            <span className="text-xs text-gray-400">{idx}</span>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2">
        <div>Window: <b>{current.window}</b> (indices {current.left} to {current.right})</div>
        <div>Seen: {Object.entries(current.seen).map(([k, v]) => `${k}: ${v}`).join(', ')}</div>
        <div>Max length so far: <b>{current.maxLen}</b></div>
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