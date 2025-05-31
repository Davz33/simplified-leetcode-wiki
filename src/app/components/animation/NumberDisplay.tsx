import React from 'react';

interface NumberDisplayProps {
  numbers: number[];
  highlightIndex?: number;
  highlightIndices?: number[];
  label?: string;
  showIndices?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  renderCustomHighlight?: (num: number, idx: number) => string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-lg',
  lg: 'w-12 h-12 text-xl',
};

export default function NumberDisplay({
  numbers,
  highlightIndex,
  highlightIndices = [],
  label,
  showIndices = false,
  className = "",
  size = 'md',
  renderCustomHighlight,
}: NumberDisplayProps) {
  const getHighlightClasses = (idx: number) => {
    if (renderCustomHighlight) {
      return renderCustomHighlight(numbers[idx], idx);
    }
    
    if (idx === highlightIndex) {
      return 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110';
    }
    
    if (highlightIndices.includes(idx)) {
      return 'bg-green-100 border-green-500 text-green-700 scale-110';
    }
    
    return 'bg-white border-gray-300 text-gray-700';
  };

  return (
    <div className={className}>
      {label && (
        <div className="text-sm text-gray-500 mb-1">{label}</div>
      )}
      <div className="flex gap-2">
        {numbers.map((num, idx) => (
          <div
            key={idx}
            className={`
              ${sizeClasses[size]} 
              flex flex-col items-center justify-center rounded border-2 font-bold 
              transition-all duration-300 
              ${getHighlightClasses(idx)}
            `}
          >
            <span>{num}</span>
            {showIndices && (
              <span className="text-xs text-gray-400">{idx}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 