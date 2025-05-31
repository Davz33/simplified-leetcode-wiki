import React, { useState, useEffect, useRef } from 'react';

interface MedianOfTwoSortedArraysAnimationProps {
  nums1?: number[];
  nums2?: number[];
}

const defaultNums1 = [1, 3];
const defaultNums2 = [2];

function getSteps(nums1: number[], nums2: number[]) {
  const steps = [];
  const merged = [];
  let i = 0, j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
      merged.push(nums1[i]);
      steps.push({ merged: [...merged], i, j, pick: nums1[i], from: 1 });
      i++;
    } else {
      merged.push(nums2[j]);
      steps.push({ merged: [...merged], i, j, pick: nums2[j], from: 2 });
      j++;
    }
  }
  // Add a final step for median calculation
  const n = merged.length;
  let median;
  if (n % 2 === 1) median = merged[Math.floor(n / 2)];
  else median = (merged[n / 2 - 1] + merged[n / 2]) / 2;
  steps.push({ merged: [...merged], i, j, median });
  return steps;
}

export default function MedianOfTwoSortedArraysAnimation({ nums1, nums2 }: MedianOfTwoSortedArraysAnimationProps) {
  const nums1ToUse = nums1 ?? defaultNums1;
  const nums2ToUse = nums2 ?? defaultNums2;
  const steps = getSteps(nums1ToUse, nums2ToUse);
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

  // Safety check: if no steps available, return loading state
  if (!current) {
    return <div className="text-center p-4">Loading animation...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-8 mb-2">
        <div>
          <div className="text-sm text-gray-500 mb-1">nums1</div>
          <div className="flex gap-2">
            {nums1ToUse.map((num, idx) => (
              <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded border-2 text-lg font-bold ${idx === current.i ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : 'bg-white border-gray-300 text-gray-700'}`}>{num}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-1">nums2</div>
          <div className="flex gap-2">
            {nums2ToUse.map((num, idx) => (
              <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded border-2 text-lg font-bold ${idx === current.j ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : 'bg-white border-gray-300 text-gray-700'}`}>{num}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2">
        <div>Merged: {current.merged.map((d, i) => <span key={i} className="inline-block w-8 text-center font-bold text-green-700">{d}</span>)}</div>
        {current.median !== undefined && (
          <div>Median: <b>{current.median}</b></div>
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