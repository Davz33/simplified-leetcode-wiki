import Link from 'next/link';

export default function ValidParentheses() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">20. Valid Parentheses</h1>
      <p className="mb-4">Check if a string of brackets is valid (all open brackets are closed in the right order).</p>
      <h2 className="text-xl font-semibold mb-2">Simple Explanation</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Use a stack.</li>
        <li>Push open brackets onto the stack.</li>
        <li>For a close bracket, check if it matches the last open bracket.</li>
        <li>If not, it&#39;s invalid.</li>
        <li>At the end, the stack should be empty.</li>
      </ul>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </main>
  );
} 