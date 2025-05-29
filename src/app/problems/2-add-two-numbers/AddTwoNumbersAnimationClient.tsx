'use client';
import dynamic from 'next/dynamic';
const AddTwoNumbersAnimation = dynamic(() => import('./AddTwoNumbersAnimation'), { ssr: false });
export default function AddTwoNumbersAnimationClient(props: any) {
  return <AddTwoNumbersAnimation {...props} />;
} 