'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AddTwoNumbersAnimationProps {
  l1?: number[];
  l2?: number[];
}

const defaultL1 = [2, 4, 3];
const defaultL2 = [5, 6, 4];

function getSteps(l1: number[], l2: number[]) {
  const steps = [];
  let i = 0, j = 0, carry = 0;
  const result: number[] = [];
  while (i < l1.length || j < l2.length || carry) {
    const x = i < l1.length ? l1[i] : 0;
    const y = j < l2.length ? l2[j] : 0;
    const sum = x + y + carry;
    steps.push({
      i, j, x, y, carry, sum, digit: sum % 10, result: [...result, sum % 10],
      l1: [...l1], l2: [...l2],
    });
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i++;
    j++;
  }
  return steps;
}

export default function AddTwoNumbersAnimation({ l1, l2 }: AddTwoNumbersAnimationProps) {
  const l1ToUse = l1 ?? defaultL1;
  const l2ToUse = l2 ?? defaultL2;
  const steps = getSteps(l1ToUse, l2ToUse);
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
      <div className="flex gap-8 mb-2">
        <div>
          <div className="text-sm text-gray-500 mb-1">l1</div>
          <div className="flex gap-2">
            {current.l1.map((num, idx) => (
              <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded border-2 text-lg font-bold ${idx === current.i ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : 'bg-white border-gray-300 text-gray-700'}`}>{num}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-1">l2</div>
          <div className="flex gap-2">
            {current.l2.map((num, idx) => (
              <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded border-2 text-lg font-bold ${idx === current.j ? 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110' : 'bg-white border-gray-300 text-gray-700'}`}>{num}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2">
        <div>Current l1 digit: <b>{current.x}</b> | Current l2 digit: <b>{current.y}</b></div>
        <div>Carry: <b>{current.carry}</b></div>
        <div>Sum: <b>{current.x} + {current.y} + {current.carry} = {current.sum}</b></div>
        <div>Result digit: <b>{current.digit}</b></div>
        <div>Result list: {current.result.map((d, i) => <span key={i} className="inline-block w-8 text-center font-bold text-green-700">{d}</span>)}</div>
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