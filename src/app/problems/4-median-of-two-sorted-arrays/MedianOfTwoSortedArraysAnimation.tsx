'use client';

import React, { useState, useEffect, useRef } from 'react';

const nums1 = [1, 3];
const nums2 = [2, 4, 5, 6];

function getSteps(A: number[], B: number[]) {
  // Always binary search on the smaller array
  if (A.length > B.length) [A, B] = [B, A];
  const m = A.length, n = B.length;
  const steps = [];
  let imin = 0, imax = m, half = Math.floor((m + n + 1) / 2);
  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2);
    const j = half - i;
    const Aleft = i > 0 ? A[i - 1] : -Infinity;
    const Aright = i < m ? A[i] : Infinity;
    const Bleft = j > 0 ? B[j - 1] : -Infinity;
    const Bright = j < n ? B[j] : Infinity;
    steps.push({
      A: [...A],
      B: [...B],
      i, j, imin, imax, Aleft, Aright, Bleft, Bright,
      found: Aleft <= Bright && Bleft <= Aright,
      median: null as number | null,
      step: steps.length + 1,
    });
    if (Aleft > Bright) {
      imax = i - 1;
    } else if (Bleft > Aright) {
      imin = i + 1;
    } else {
      // Found partition
      let median;
      if ((m + n) % 2 === 1) {
        median = Math.max(Aleft, Bleft);
      } else {
        median = (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      }
      steps[steps.length - 1].median = median;
      break;
    }
  }
  return steps;
}

const steps = getSteps(nums1, nums2);

export default function MedianOfTwoSortedArraysAnimation() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (playing && step < steps.length - 1) {
      intervalRef.current = setTimeout(() => setStep(s => s + 1), 1600);
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
      <div className="mb-2">
        <div className="text-sm text-gray-500 mb-1">nums1</div>
        <div className="flex gap-2">
          {current.A.map((num, idx) => (
            <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded border-2 text-lg font-bold
              ${idx === current.i - 1 ? 'bg-yellow-200 border-yellow-500' : ''}
              ${idx === current.i ? 'bg-blue-100 border-blue-500' : ''}
            `}>{num}</div>
          ))}
        </div>
        <div className="flex gap-2 mt-1">
          {current.A.map((_, idx) => (
            <span key={idx} className="w-10 text-center text-xs text-gray-400">{idx}</span>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <div className="text-sm text-gray-500 mb-1">nums2</div>
        <div className="flex gap-2">
          {current.B.map((num, idx) => (
            <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded border-2 text-lg font-bold
              ${idx === current.j - 1 ? 'bg-yellow-200 border-yellow-500' : ''}
              ${idx === current.j ? 'bg-blue-100 border-blue-500' : ''}
            `}>{num}</div>
          ))}
        </div>
        <div className="flex gap-2 mt-1">
          {current.B.map((_, idx) => (
            <span key={idx} className="w-10 text-center text-xs text-gray-400">{idx}</span>
          ))}
        </div>
      </div>
      <div className="w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2">
        <div>Partition i (nums1): <b>{current.i}</b> | Partition j (nums2): <b>{current.j}</b></div>
        <div>Lefts: nums1[{current.i - 1}] = <b>{current.Aleft === -Infinity ? '-∞' : current.Aleft}</b>, nums2[{current.j - 1}] = <b>{current.Bleft === -Infinity ? '-∞' : current.Bleft}</b></div>
        <div>Rights: nums1[{current.i}] = <b>{current.Aright === Infinity ? '+∞' : current.Aright}</b>, nums2[{current.j}] = <b>{current.Bright === Infinity ? '+∞' : current.Bright}</b></div>
        {current.found ? (
          <div className="text-green-700 font-semibold mt-1">Found! Median = <b>{current.median}</b></div>
        ) : (
          <div className="text-gray-500 mt-1">Adjusting partitions...</div>
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