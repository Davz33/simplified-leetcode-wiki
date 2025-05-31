'use client';
import Link from 'next/link';
import MedianOfTwoSortedArraysAnimationClient from './MedianOfTwoSortedArraysAnimationClient';
import Tabs from '../../components/Tabs';
import CodeSolution from '../../components/CodeSolution';
import { medianOfTwoSortedArraysSolutions } from './solutions';

export default function MedianOfTwoSortedArrays() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">4. Median of Two Sorted Arrays</h1>
      <p className="mb-4">
        <strong>Problem:</strong> Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(min(m, n))).
      </p>
      <h2 className="text-xl font-semibold mb-2">Step-by-Step Explanation</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>Use binary search on the smaller array to partition both arrays into left and right halves.</li>
        <li>Ensure all elements in the left halves are less than or equal to all elements in the right halves.</li>
        <li>The median is the average of the max of the left halves and the min of the right halves (or just the middle value if the total length is odd).</li>
      </ol>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">By partitioning the arrays and using binary search, we efficiently find the correct split for the median in logarithmic time.</p>
      
      <h3 className="font-semibold mb-1">Examples</h3>
      <Tabs labels={["Simple", "Complex"]}>
        <div key="simple">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> nums1 = [1, 3], nums2 = [2]</div>
            <div><b>Output:</b> 2.0 <span className="text-gray-500">(The combined array is [1, 2, 3], and the median is 2.)</span></div>
          </div>
          <MedianOfTwoSortedArraysAnimationClient />
        </div>
        <div key="complex">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> nums1 = [1, 4, 7, 10, 13], nums2 = [2, 3, 5, 6, 8, 9, 11, 12]</div>
            <div><b>Output:</b> 7.0 <span className="text-gray-500">(The median is 7.0 from the merged array)</span></div>
            <div className="text-sm text-gray-600 mt-1">This example demonstrates the algorithm working with larger arrays where the solution is found in the middle.</div>
          </div>
          <MedianOfTwoSortedArraysAnimationClient nums1={[1, 4, 7, 10, 13]} nums2={[2, 3, 5, 6, 8, 9, 11, 12]} />
        </div>
      </Tabs>
      
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <CodeSolution solutions={medianOfTwoSortedArraysSolutions} />
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 