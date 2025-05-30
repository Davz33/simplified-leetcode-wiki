import { CodeSolutionData } from '../../components/CodeSolution';

export const longestSubstringSolutions: CodeSolutionData[] = [
  {
    language: 'Python',
    explanation: 'Sliding window approach with hash map for optimal O(n) time complexity.',
    code: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        left = 0
        max_length = 0
        
        for right, char in enumerate(s):
            if char in char_map and char_map[char] >= left:
                left = char_map[char] + 1
            
            char_map[char] = right
            max_length = max(max_length, right - left + 1)
        
        return max_length`
  },
  {
    language: 'Java',
    explanation: 'HashMap-based sliding window solution with efficient character tracking.',
    code: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charMap = new HashMap<>();
        int left = 0;
        int maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);
            
            if (charMap.containsKey(currentChar) && charMap.get(currentChar) >= left) {
                left = charMap.get(currentChar) + 1;
            }
            
            charMap.put(currentChar, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}`
  },
  {
    language: 'C++',
    explanation: 'STL unordered_map solution with modern C++ features for fast lookups.',
    code: `#include <unordered_map>
#include <string>
#include <algorithm>

class Solution {
public:
    int lengthOfLongestSubstring(std::string s) {
        std::unordered_map<char, int> charMap;
        int left = 0;
        int maxLength = 0;
        
        for (int right = 0; right < s.size(); ++right) {
            char currentChar = s[right];
            
            if (charMap.count(currentChar) && charMap[currentChar] >= left) {
                left = charMap[currentChar] + 1;
            }
            
            charMap[currentChar] = right;
            maxLength = std::max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`
  },
  {
    language: 'JavaScript',
    explanation: 'ES6 Map solution showcasing modern JavaScript with clean syntax.',
    code: `const lengthOfLongestSubstring = (s) => {
    const charMap = new Map();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1;
        }
        
        charMap.set(currentChar, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};`
  },
  {
    language: 'Python',
    filename: 'set_approach.py',
    explanation: 'Alternative Set-based approach - easier to understand but slightly less efficient.',
    code: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        left = 0
        max_length = 0
        
        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            
            char_set.add(s[right])
            max_length = max(max_length, right - left + 1)
        
        return max_length`
  },
  {
    language: 'Go',
    explanation: 'Idiomatic Go solution using maps with efficient string processing.',
    code: `func lengthOfLongestSubstring(s string) int {
    charMap := make(map[byte]int)
    left := 0
    maxLength := 0
    
    for right := 0; right < len(s); right++ {
        currentChar := s[right]
        
        if lastIndex, exists := charMap[currentChar]; exists && lastIndex >= left {
            left = lastIndex + 1
        }
        
        charMap[currentChar] = right
        if right-left+1 > maxLength {
            maxLength = right - left + 1
        }
    }
    
    return maxLength
}`
  }
]; 