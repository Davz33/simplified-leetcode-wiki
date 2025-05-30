import { useState, useEffect, useRef } from 'react';

interface UseAnimationTimerProps {
  totalSteps: number;
  interval?: number;
  autoPlay?: boolean;
}

export function useAnimationTimer({ 
  totalSteps, 
  interval = 1200, 
  autoPlay = true 
}: UseAnimationTimerProps) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (playing && step < totalSteps - 1) {
      intervalRef.current = setTimeout(() => setStep(s => s + 1), interval);
    } else if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [playing, step, totalSteps, interval]);

  return {
    step,
    setStep,
    playing,
    setPlaying,
  };
} 