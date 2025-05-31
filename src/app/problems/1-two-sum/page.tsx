'use client';
import Link from 'next/link';
import TwoSumAnimationClient from './TwoSumAnimationClient';
import Tabs from '../../components/Tabs';
import CodeSolution from '../../components/CodeSolution';
import { twoSumSolutions } from './solutions';
// Animation component would be imported here if present

export default function TwoSum() {
  // Code-generated diagram: array visualization with highlights
  const nums = [2, 7, 11, 15, 1, 8];
  const target = 9;
  const highlight = [0, 1];

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">1. Two Sum</h1>
      <p className="mb-4">
        <strong>Problem:</strong> Given an array of numbers and a target, find two numbers in the array that add up to the target. Return their indices.
      </p>
      <h2 className="text-xl font-semibold mb-2">Step-by-Step Explanation</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>Go through each number in the array.</li>
        <li>For each number, check if you&#39;ve already seen the number you need to reach the target (target - current number).</li>
        <li>Use a dictionary to remember numbers you&#39;ve seen and their indices.</li>
        <li>If you find such a pair, return their indices.</li>
      </ol>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">The dictionary lets you check in constant time if the needed number exists, making the solution fast (O(n) time).</p>
      
      <h3 className="font-semibold mb-1">Examples</h3>
      <Tabs labels={["Simple", "Complex"]}>
        <div key="simple">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> nums = [2, 7, 11, 15], target = 9</div>
            <div><b>Output:</b> [0, 1] <span className="text-gray-500">(nums[0] + nums[1] = 2 + 7 = 9)</span></div>
          </div>
          <TwoSumAnimationClient />
        </div>
        <div key="complex">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> nums = [3, 5, 7, 11, 13, 17, 19, 21, 2, 6], target = 8</div>
            <div><b>Output:</b> [8, 9] <span className="text-gray-500">(nums[8] + nums[9] = 2 + 6 = 8)</span></div>
            <div className="text-sm text-gray-600 mt-1">This example demonstrates the algorithm working through many elements before finding the solution.</div>
          </div>
          <TwoSumAnimationClient nums={[3, 5, 7, 11, 13, 17, 19, 21, 2, 6]} target={8} />
        </div>
      </Tabs>
      
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <CodeSolution solutions={twoSumSolutions} />
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 