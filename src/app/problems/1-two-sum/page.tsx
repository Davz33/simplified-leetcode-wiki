import Link from 'next/link';
import TwoSumAnimation from './TwoSumAnimation';
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
      <h3 className="font-semibold mb-1">Example</h3>
      <div className="mb-4 bg-gray-50 p-3 rounded">
        <div><b>Input:</b> nums = [2, 7, 11, 15, 1, 8], target = 9</div>
        <div><b>Output:</b> [0, 1] <span className="text-gray-500">// nums[0] + nums[1] = 2 + 7 = 9</span></div>
      </div>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">The dictionary lets you check in constant time if the needed number exists, making the solution fast (O(n) time).</p>
      <h3 className="font-semibold mb-2">Animated Solution Visualization</h3>
      <TwoSumAnimation />
      <h3 className="font-semibold mb-2">Code-generated Diagram</h3>
      <div className="flex gap-2 mb-8 justify-center">
        {nums.map((num, idx) => (
          <div
            key={idx}
            className={`w-12 h-12 flex items-center justify-center rounded border-2 text-lg font-bold ${highlight.includes(idx) ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700'}`}
          >
            {num}
          </div>
        ))}
      </div>
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <div className="mb-4">
        <div className="font-semibold">Python</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution:
    def twoSum(self, nums, target):
        d = {}
        for i, x in enumerate(nums):
            y = target - x
            if y in d:
                return [d[y], i]
            d[x] = i
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">Java</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> d = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int x = nums[i], y = target - x;
            if (d.containsKey(y)) {
                return new int[]{d.get(y), i};
            }
            d.put(x, i);
        }
        return new int[0];
    }
}
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">C++</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> d;
        for (int i = 0; i < nums.size(); ++i) {
            int x = nums[i], y = target - x;
            if (d.count(y)) return {d[y], i};
            d[x] = i;
        }
        return {};
    }
};
`}</code></pre>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 