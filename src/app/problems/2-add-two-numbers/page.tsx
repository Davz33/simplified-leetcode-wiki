'use client';
import Link from 'next/link';
import AddTwoNumbersAnimationClient from './AddTwoNumbersAnimationClient';
import Tabs from '../../components/Tabs';
import CodeSolution from '../../components/CodeSolution';
import { addTwoNumbersSolutions } from './solutions';

export default function AddTwoNumbers() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">2. Add Two Numbers</h1>
      <p className="mb-4">
        <strong>Problem:</strong> You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
      </p>
      <h2 className="text-xl font-semibold mb-2">Step-by-Step Explanation</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>Start at the head of both linked lists.</li>
        <li>Add the digits from both lists and the carry from the previous step.</li>
        <li>If the sum is 10 or more, carry over 1 to the next digit.</li>
        <li>Continue until both lists and the carry are processed.</li>
      </ol>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">This approach mimics the way you add numbers by hand, digit by digit, from right to left, handling the carry as you go.</p>
      
      <h3 className="font-semibold mb-1">Examples</h3>
      <Tabs labels={["Simple", "Complex"]}>
        <div key="simple">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> (2 → 4 → 3) + (5 → 6 → 4)</div>
            <div><b>Output:</b> (7 → 0 → 8) <span className="text-gray-500">(342 + 465 = 807)</span></div>
          </div>
          <AddTwoNumbersAnimationClient />
        </div>
        <div key="complex">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> (9 → 9 → 9 → 9) + (9 → 9 → 9 → 9 → 9 → 9)</div>
            <div><b>Output:</b> (8 → 9 → 9 → 9 → 0 → 0 → 1) <span className="text-gray-500">(9999 + 999999 = 1009998)</span></div>
            <div className="text-sm text-gray-600 mt-1">This example demonstrates handling multiple carries through different length lists.</div>
          </div>
          <AddTwoNumbersAnimationClient l1={[9, 9, 9, 9]} l2={[9, 9, 9, 9, 9, 9]} />
        </div>
      </Tabs>
      
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <CodeSolution solutions={addTwoNumbersSolutions} />
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 