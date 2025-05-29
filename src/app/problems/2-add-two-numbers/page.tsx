import Link from 'next/link';
import AddTwoNumbersAnimationClient from './AddTwoNumbersAnimationClient';

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
      <h3 className="font-semibold mb-1">Example</h3>
      <div className="mb-4 bg-gray-50 p-3 rounded">
        <div><b>Input:</b> (2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)</div>
        <div><b>Output:</b> (7 -&gt; 0 -&gt; 8) <span className="text-gray-500">// 342 + 465 = 807</span></div>
      </div>
      <h3 className="font-semibold mb-1">Why this works</h3>
      <p className="mb-4">This approach mimics the way you add numbers by hand, digit by digit, from right to left, handling the carry as you go.</p>
      <h3 className="font-semibold mb-2">Animated Solution Visualization</h3>
      <AddTwoNumbersAnimationClient />
      <h3 className="font-semibold mb-2 mt-6">Code Solutions</h3>
      <div className="mb-4">
        <div className="font-semibold">Python</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = ListNode(0)
        cur = dummy
        carry = 0
        while l1 or l2 or carry:
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            s = x + y + carry
            carry = s // 10
            cur.next = ListNode(s % 10)
            cur = cur.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">Java</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0), cur = dummy;
        int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int x = l1 != null ? l1.val : 0;
            int y = l2 != null ? l2.val : 0;
            int sum = x + y + carry;
            carry = sum / 10;
            cur.next = new ListNode(sum % 10);
            cur = cur.next;
            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
        }
        return dummy.next;
    }
}
`}</code></pre>
      </div>
      <div className="mb-4">
        <div className="font-semibold">C++</div>
        <pre className="bg-gray-100 rounded p-2 overflow-x-auto text-sm"><code>{`
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode dummy(0), *cur = &dummy;
        int carry = 0;
        while (l1 || l2 || carry) {
            int x = l1 ? l1->val : 0;
            int y = l2 ? l2->val : 0;
            int sum = x + y + carry;
            carry = sum / 10;
            cur->next = new ListNode(sum % 10);
            cur = cur->next;
            l1 = l1 ? l1->next : nullptr;
            l2 = l2 ? l2->next : nullptr;
        }
        return dummy.next;
    }
};
`}</code></pre>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">← Back to Home</Link>
    </main>
  );
} 