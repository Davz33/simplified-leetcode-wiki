import React from 'react';

interface AnimationContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimationContainer({ children, className = "" }: AnimationContainerProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {children}
    </div>
  );
} 