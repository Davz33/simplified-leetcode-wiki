import Link from 'next/link';
import dynamic from 'next/dynamic';
const MedianOfTwoSortedArraysAnimation = dynamic(() => import('./MedianOfTwoSortedArraysAnimation'), { ssr: false });

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
      <h3 className="font-semibold mb-1">Example</h3>
      <div className="mb-4 bg-gray-50 p-3 rounded">
        <div><b>Input:</b> nums1 = [1, 3], nums2 = [2]</div>
        <div><b>Output:</b> 2.0 <span className="text-gray-500">// The combined array is [1, 2, 3], and the median is 2.</span></div>
      </div>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">By partitioning the arrays and using binary search, we efficiently find the correct split for the median in logarithmic time.</p>
      <h3 className="font-semibold mb-2">Animated Solution Visualization</h3>
      <MedianOfTwoSortedArraysAnimation />
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <div className="mb-4">
        <div className="font-semibold">Python</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        A, B = nums1, nums2
        m, n = len(A), len(B)
        if m > n:
            A, B, m, n = B, A, n, m
        imin, imax, half = 0, m, (m + n + 1) // 2
        while imin <= imax:
            i = (imin + imax) // 2
            j = half - i
            if i < m and B[j-1] > A[i]:
                imin = i + 1
            elif i > 0 and A[i-1] > B[j]:
                imax = i - 1
            else:
                if i == 0: max_of_left = B[j-1]
                elif j == 0: max_of_left = A[i-1]
                else: max_of_left = max(A[i-1], B[j-1])
                if (m + n) % 2 == 1:
                    return max_of_left
                if i == m: min_of_right = B[j]
                elif j == n: min_of_right = A[i]
                else: min_of_right = min(A[i], B[j])
                return (max_of_left + min_of_right) / 2.0
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">Java</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        if (m > n) return findMedianSortedArrays(nums2, nums1);
        int imin = 0, imax = m, half = (m + n + 1) / 2;
        while (imin <= imax) {
            int i = (imin + imax) / 2;
            int j = half - i;
            if (i < m && nums2[j-1] > nums1[i]) imin = i + 1;
            else if (i > 0 && nums1[i-1] > nums2[j]) imax = i - 1;
            else {
                int maxLeft = 0;
                if (i == 0) maxLeft = nums2[j-1];
                else if (j == 0) maxLeft = nums1[i-1];
                else maxLeft = Math.max(nums1[i-1], nums2[j-1]);
                if ((m + n) % 2 == 1) return maxLeft;
                int minRight = 0;
                if (i == m) minRight = nums2[j];
                else if (j == n) minRight = nums1[i];
                else minRight = Math.min(nums1[i], nums2[j]);
                return (maxLeft + minRight) / 2.0;
            }
        }
        return 0.0;
    }
}
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">C++</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() > nums2.size()) return findMedianSortedArrays(nums2, nums1);
        int m = nums1.size(), n = nums2.size();
        int imin = 0, imax = m, half = (m + n + 1) / 2;
        while (imin <= imax) {
            int i = (imin + imax) / 2;
            int j = half - i;
            if (i < m && nums2[j-1] > nums1[i]) imin = i + 1;
            else if (i > 0 && nums1[i-1] > nums2[j]) imax = i - 1;
            else {
                int maxLeft = 0;
                if (i == 0) maxLeft = nums2[j-1];
                else if (j == 0) maxLeft = nums1[i-1];
                else maxLeft = max(nums1[i-1], nums2[j-1]);
                if ((m + n) % 2 == 1) return maxLeft;
                int minRight = 0;
                if (i == m) minRight = nums2[j];
                else if (j == n) minRight = nums1[i];
                else minRight = min(nums1[i], nums2[j]);
                return (maxLeft + minRight) / 2.0;
            }
        }
        return 0.0;
    }
};
`}</code></pre>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 