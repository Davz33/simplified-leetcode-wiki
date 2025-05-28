'use client';

import React, { useState, useEffect, useRef } from 'react';

const s = 'babad';

function getSteps(s: string) {
  const steps = [];
  let maxLen = 0, start = 0;
  for (let center = 0; center < 2 * s.length - 1; center++) {
    let left = Math.floor(center / 2);
    let right = left + (center % 2);
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      steps.push({
        s,
        left,
        right,
        current: s.slice(left, right + 1),
        maxLen,
        maxStart: start,
        maxEnd: start + maxLen - 1,
      });
      left--;
      right++;
    }
  }
  return steps;
}

const steps = getSteps(s);

export default function LongestPalindromicSubstringAnimation() {
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
              ${idx >= current.left && idx <= current.right ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : ''}
              ${idx >= current.maxStart && idx <= current.maxEnd ? 'bg-green-100 border-green-500 text-green-700' : ''}
              ${idx < current.left || idx > current.right ? 'bg-white border-gray-300 text-gray-700' : ''}`}
          >
            {char}
            <span className="text-xs text-gray-400">{idx}</span>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2">
        <div>Current window: <b>{current.current}</b> (indices {current.left} to {current.right})</div>
        <div>Longest palindrome so far: <b>{current.s.slice(current.maxStart, current.maxEnd + 1)}</b> (indices {current.maxStart} to {current.maxEnd})</div>
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