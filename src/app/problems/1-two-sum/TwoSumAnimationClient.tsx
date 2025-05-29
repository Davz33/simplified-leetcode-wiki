'use client';
import dynamic from 'next/dynamic';
const TwoSumAnimation = dynamic(() => import('./TwoSumAnimation'), { ssr: false });
export default function TwoSumAnimationClient(props: any) {
  return <TwoSumAnimation {...props} />;
} 