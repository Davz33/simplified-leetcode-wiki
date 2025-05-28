import Link from 'next/link';

export default function MergeTwoSortedLists() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">21. Merge Two Sorted Lists</h1>
      <p className="mb-4">Combine two sorted linked lists into one sorted list.</p>
      <h2 className="text-xl font-semibold mb-2">Simple Explanation</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Compare the first nodes of both lists.</li>
        <li>Add the smaller one to the result.</li>
        <li>Move forward in that list.</li>
        <li>Repeat until both lists are done.</li>
      </ul>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </main>
  );
} 