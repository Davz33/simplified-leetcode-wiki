'use client';
import dynamic from 'next/dynamic';
const MedianOfTwoSortedArraysAnimation = dynamic(() => import('./MedianOfTwoSortedArraysAnimation'), { ssr: false });
export default function MedianOfTwoSortedArraysAnimationClient(props: any) {
  return <MedianOfTwoSortedArraysAnimation {...props} />;
} 