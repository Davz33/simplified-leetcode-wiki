'use client';
import Link from 'next/link';
import LongestSubstringAnimationClient from './LongestSubstringAnimationClient';
import Tabs from '../../components/Tabs';
import CodeSolution from '../../components/CodeSolution';
import { longestSubstringSolutions } from './solutions';

export default function LongestSubstring() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">3. Longest Substring Without Repeating Characters</h1>
      <p className="mb-4">
        <strong>Problem:</strong> Given a string, find the length of the longest substring without repeating characters.
      </p>
      <h2 className="text-xl font-semibold mb-2">Step-by-Step Explanation</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>Use a sliding window to keep track of the current substring without repeats.</li>
        <li>Move the right pointer forward, adding new characters.</li>
        <li>If a character repeats, move the left pointer forward until the substring has no repeats.</li>
        <li>Keep track of the maximum length found.</li>
      </ol>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">The sliding window ensures you always have a substring with unique characters, and you only scan each character once, making it efficient.</p>
      
      <h3 className="font-semibold mb-1">Examples</h3>
      <Tabs labels={["Simple", "Complex"]}>
        <div key="simple">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> s = &quot;abcabcbb&quot;</div>
            <div><b>Output:</b> 3 <span className="text-gray-500">(The answer is &quot;abc&quot;, with length 3.)</span></div>
          </div>
          <LongestSubstringAnimationClient />
        </div>
        <div key="complex">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> s = &quot;pwwkewabcdefg&quot;</div>
            <div><b>Output:</b> 7 <span className="text-gray-500">(The answer is &quot;abcdefg&quot;, with length 7.)</span></div>
            <div className="text-sm text-gray-600 mt-1">This example demonstrates the algorithm handling multiple repetitions and finding a longer optimal substring.</div>
          </div>
          <LongestSubstringAnimationClient s="pwwkewabcdefg" />
        </div>
      </Tabs>
      
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <CodeSolution solutions={longestSubstringSolutions} />
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 