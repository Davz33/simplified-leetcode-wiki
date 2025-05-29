'use client';
import React, { useState, ReactNode } from 'react';

interface TabsProps {
  labels: string[];
  children: ReactNode[];
}

export default function Tabs({ labels, children }: TabsProps) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b mb-4">
        {labels.map((label, idx) => (
          <button
            key={label}
            className={`px-4 py-2 -mb-px border-b-2 font-medium transition-colors duration-200 focus:outline-none ${
              idx === active
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActive(idx)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <div>{children[active]}</div>
    </div>
  );
} 