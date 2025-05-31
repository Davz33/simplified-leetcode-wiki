import { CodeSolutionData } from '../../components/CodeSolution';

export const medianOfTwoSortedArraysSolutions: CodeSolutionData[] = [
  {
    language: 'Python',
    explanation: 'Binary search approach for O(log(min(m,n))) time complexity - optimal solution.',
    code: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = nums1, nums2
        if len(A) > len(B):
            A, B = B, A
        
        m, n = len(A), len(B)
        imin, imax = 0, m
        half_len = (m + n + 1) // 2
        
        while imin <= imax:
            i = (imin + imax) // 2
            j = half_len - i
            
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
                
                return (max_of_left + min_of_right) / 2.0`
  },
  {
    language: 'Java',
    explanation: 'Java implementation of binary search with careful handling of edge cases.',
    code: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length;
        int n = nums2.length;
        int imin = 0, imax = m;
        int halfLen = (m + n + 1) / 2;
        
        while (imin <= imax) {
            int i = (imin + imax) / 2;
            int j = halfLen - i;
            
            if (i < m && nums2[j-1] > nums1[i]) {
                imin = i + 1;
            } else if (i > 0 && nums1[i-1] > nums2[j]) {
                imax = i - 1;
            } else {
                int maxOfLeft = 0;
                if (i == 0) maxOfLeft = nums2[j-1];
                else if (j == 0) maxOfLeft = nums1[i-1];
                else maxOfLeft = Math.max(nums1[i-1], nums2[j-1]);
                
                if ((m + n) % 2 == 1) return maxOfLeft;
                
                int minOfRight = 0;
                if (i == m) minOfRight = nums2[j];
                else if (j == n) minOfRight = nums1[i];
                else minOfRight = Math.min(nums1[i], nums2[j]);
                
                return (maxOfLeft + minOfRight) / 2.0;
            }
        }
        return 0.0;
    }
}`
  },
  {
    language: 'C++',
    explanation: 'Efficient C++ solution with STL and optimized binary search implementation.',
    code: `#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size();
        int n = nums2.size();
        int imin = 0, imax = m;
        int halfLen = (m + n + 1) / 2;
        
        while (imin <= imax) {
            int i = (imin + imax) / 2;
            int j = halfLen - i;
            
            if (i < m && nums2[j-1] > nums1[i]) {
                imin = i + 1;
            } else if (i > 0 && nums1[i-1] > nums2[j]) {
                imax = i - 1;
            } else {
                int maxOfLeft = 0;
                if (i == 0) maxOfLeft = nums2[j-1];
                else if (j == 0) maxOfLeft = nums1[i-1];
                else maxOfLeft = std::max(nums1[i-1], nums2[j-1]);
                
                if ((m + n) % 2 == 1) return maxOfLeft;
                
                int minOfRight = 0;
                if (i == m) minOfRight = nums2[j];
                else if (j == n) minOfRight = nums1[i];
                else minOfRight = std::min(nums1[i], nums2[j]);
                
                return (maxOfLeft + minOfRight) / 2.0;
            }
        }
        return 0.0;
    }
};`
  },
  {
    language: 'JavaScript',
    explanation: 'JavaScript implementation with modern ES6 features and clear logic flow.',
    code: `const findMedianSortedArrays = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);
    
    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;
        
        if (i < m && nums2[j-1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i-1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxOfLeft = 0;
            if (i === 0) maxOfLeft = nums2[j-1];
            else if (j === 0) maxOfLeft = nums1[i-1];
            else maxOfLeft = Math.max(nums1[i-1], nums2[j-1]);
            
            if ((m + n) % 2 === 1) return maxOfLeft;
            
            let minOfRight = 0;
            if (i === m) minOfRight = nums2[j];
            else if (j === n) minOfRight = nums1[i];
            else minOfRight = Math.min(nums1[i], nums2[j]);
            
            return (maxOfLeft + minOfRight) / 2.0;
        }
    }
    return 0.0;
};`
  },
  {
    language: 'Python',
    filename: 'merge_approach.py',
    explanation: 'Alternative merge approach - O(m+n) time but easier to understand for beginners.',
    code: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        merged = []
        i = j = 0
        
        # Merge the two arrays
        while i < len(nums1) and j < len(nums2):
            if nums1[i] <= nums2[j]:
                merged.append(nums1[i])
                i += 1
            else:
                merged.append(nums2[j])
                j += 1
        
        # Add remaining elements
        merged.extend(nums1[i:])
        merged.extend(nums2[j:])
        
        n = len(merged)
        if n % 2 == 1:
            return merged[n // 2]
        else:
            return (merged[n // 2 - 1] + merged[n // 2]) / 2.0`
  },
  {
    language: 'Go',
    explanation: 'Go implementation with idiomatic error handling and efficient binary search.',
    code: `func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    if len(nums1) > len(nums2) {
        return findMedianSortedArrays(nums2, nums1)
    }
    
    m, n := len(nums1), len(nums2)
    imin, imax := 0, m
    halfLen := (m + n + 1) / 2
    
    for imin <= imax {
        i := (imin + imax) / 2
        j := halfLen - i
        
        if i < m && nums2[j-1] > nums1[i] {
            imin = i + 1
        } else if i > 0 && nums1[i-1] > nums2[j] {
            imax = i - 1
        } else {
            var maxOfLeft int
            if i == 0 {
                maxOfLeft = nums2[j-1]
            } else if j == 0 {
                maxOfLeft = nums1[i-1]
            } else {
                maxOfLeft = max(nums1[i-1], nums2[j-1])
            }
            
            if (m+n)%2 == 1 {
                return float64(maxOfLeft)
            }
            
            var minOfRight int
            if i == m {
                minOfRight = nums2[j]
            } else if j == n {
                minOfRight = nums1[i]
            } else {
                minOfRight = min(nums1[i], nums2[j])
            }
            
            return float64(maxOfLeft+minOfRight) / 2.0
        }
    }
    return 0.0
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}`
  }
]; 