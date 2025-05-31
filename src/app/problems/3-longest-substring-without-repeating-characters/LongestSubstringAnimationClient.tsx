import dynamic from 'next/dynamic';
const LongestSubstringAnimation = dynamic(() => import('./LongestSubstringAnimation'), { ssr: false });
export default function LongestSubstringAnimationClient(props: any) {
  return <LongestSubstringAnimation {...props} />;
} 