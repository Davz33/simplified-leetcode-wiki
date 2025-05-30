import { CodeSolutionData } from '../../components/CodeSolution';

export const twoSumSolutions: CodeSolutionData[] = [
  {
    language: 'Python',
    explanation: 'Efficient one-pass hash map solution with O(n) time complexity.',
    code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        
        return []  # No solution found`
  },
  {
    language: 'Java',
    explanation: 'HashMap-based solution demonstrating Java collections and boxing.',
    code: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        
        throw new IllegalArgumentException("No two sum solution");
    }
}`
  },
  {
    language: 'C++',
    explanation: 'STL unordered_map solution with efficient lookups and modern C++ features.',
    code: `#include <unordered_map>
#include <vector>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> numMap;
        
        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];
            auto it = numMap.find(complement);
            
            if (it != numMap.end()) {
                return {it->second, i};
            }
            
            numMap[nums[i]] = i;
        }
        
        return {}; // No solution found
    }
};`
  },
  {
    language: 'JavaScript',
    explanation: 'ES6 Map solution showcasing modern JavaScript syntax and methods.',
    code: `const twoSum = (nums, target) => {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return []; // No solution found
};`
  },
  {
    language: 'Python',
    filename: 'brute_force.py',
    explanation: 'Brute force approach - O(n²) time but easier to understand for beginners.',
    code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        
        return []  # No solution found`
  },
  {
    language: 'Go',
    explanation: 'Idiomatic Go solution using maps and multiple return values.',
    code: `func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)
    
    for i, num := range nums {
        complement := target - num
        if index, exists := numMap[complement]; exists {
            return []int{index, i}
        }
        numMap[num] = i
    }
    
    return nil // No solution found
}`
  }
]; 