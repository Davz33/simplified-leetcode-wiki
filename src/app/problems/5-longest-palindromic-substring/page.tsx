import Link from 'next/link';
import LongestPalindromicSubstringAnimation from './LongestPalindromicSubstringAnimation';

export default function LongestPalindromicSubstring() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">5. Longest Palindromic Substring</h1>
      <p className="mb-4">
        <strong>Problem:</strong> Given a string s, return the longest palindromic substring in s.
      </p>
      <h2 className="text-xl font-semibold mb-2">Step-by-Step Explanation</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>For each character (and between each pair of characters), expand outwards to find the longest palindrome centered there.</li>
        <li>Keep track of the longest palindrome found so far.</li>
        <li>Return the longest palindromic substring at the end.</li>
      </ol>
      <h3 className="font-semibold mb-1">Example</h3>
      <div className="mb-4 bg-gray-50 p-3 rounded">
        <div><b>Input:</b> s = "babad"</div>
        <div><b>Output:</b> "bab" <span className="text-gray-500">// or "aba" (both are valid)</span></div>
      </div>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">Every palindrome is centered at a character or between two characters, so checking all centers finds the answer efficiently.</p>
      <h3 className="font-semibold mb-2">Animated Solution Visualization</h3>
      <LongestPalindromicSubstringAnimation />
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <div className="mb-4">
        <div className="font-semibold">Python</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        for i in range(len(s)):
            for l, r in [(i, i), (i, i+1)]:
                while l >= 0 and r < len(s) and s[l] == s[r]:
                    l -= 1
                    r += 1
                if r - l - 1 > len(res):
                    res = s[l+1:r]
        return res
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">Java</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
    public String longestPalindrome(String s) {
        String res = "";
        for (int i = 0; i < s.length(); i++) {
            for (int l = i, r = i; l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r); l--, r++)
                if (r - l + 1 > res.length()) res = s.substring(l, r + 1);
            for (int l = i, r = i + 1; l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r); l--, r++)
                if (r - l + 1 > res.length()) res = s.substring(l, r + 1);
        }
        return res;
    }
}
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">C++</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
public:
    string longestPalindrome(string s) {
        string res;
        for (int i = 0; i < s.size(); ++i) {
            for (int l = i, r = i; l >= 0 && r < s.size() && s[l] == s[r]; --l, ++r)
                if (r - l + 1 > res.size()) res = s.substr(l, r - l + 1);
            for (int l = i, r = i + 1; l >= 0 && r < s.size() && s[l] == s[r]; --l, ++r)
                if (r - l + 1 > res.size()) res = s.substr(l, r - l + 1);
        }
        return res;
    }
};
`}</code></pre>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 