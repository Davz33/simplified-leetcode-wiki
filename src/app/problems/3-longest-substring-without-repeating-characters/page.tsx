import Link from 'next/link';
import Tabs from '../../components/Tabs';
import LongestSubstringAnimation from './LongestSubstringAnimation';

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
      <h3 className="font-semibold mb-1">Use Cases & Animations</h3>
      <Tabs labels={["Simple", "Complex"]}>
        <div key="simple">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> s = "abcabcbb"</div>
            <div><b>Output:</b> 3 <span className="text-gray-500">{'// The answer is "abc", with length 3.'}</span></div>
          </div>
          <LongestSubstringAnimation />
        </div>
        <div key="complex">
          <div className="mb-4 bg-gray-50 p-3 rounded">
            <div><b>Input:</b> s = "pwwkewxyzabcdefg"</div>
            <div><b>Output:</b> 8 <span className="text-gray-500">{'// The answer is "xyzabcdef", with length 8.'}</span></div>
          </div>
          <LongestSubstringAnimation s="pwwkewxyzabcdefg" />
        </div>
      </Tabs>
      <h3 className="font-semibold mb-2">Why this works</h3>
      <p className="mb-4">The sliding window ensures you always have a substring with unique characters, and you only scan each character once, making it efficient.</p>
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <Tabs labels={["Python", "Java", "C++"]}>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm" key="py"><code>{`
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        d = {}
        ans = left = 0
        for right, c in enumerate(s):
            if c in d and d[c] >= left:
                left = d[c] + 1
            d[c] = right
            ans = max(ans, right - left + 1)
        return ans
`}</code></pre>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm" key="java"><code>{`
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> d = new HashMap<>();
        int ans = 0, left = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (d.containsKey(c) && d.get(c) >= left) {
                left = d.get(c) + 1;
            }
            d.put(c, right);
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
}
`}</code></pre>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm" key="cpp"><code>{`
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> d;
        int ans = 0, left = 0;
        for (int right = 0; right < s.size(); ++right) {
            char c = s[right];
            if (d.count(c) && d[c] >= left) {
                left = d[c] + 1;
            }
            d[c] = right;
            ans = max(ans, right - left + 1);
        }
        return ans;
    }
};
`}</code></pre>
      </Tabs>
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 