import Link from 'next/link';

const problems = [
  { num: 1, title: 'Two Sum' },
  { num: 2, title: 'Add Two Numbers' },
  { num: 3, title: 'Longest Substring Without Repeating Characters' },
  { num: 4, title: 'Median of Two Sorted Arrays' },
  { num: 5, title: 'Longest Palindromic Substring' },
  { num: 6, title: 'Zigzag Conversion' },
  { num: 7, title: 'Reverse Integer' },
  { num: 8, title: 'String to Integer (atoi)' },
  { num: 9, title: 'Palindrome Number' },
  { num: 10, title: 'Regular Expression Matching' },
  { num: 11, title: 'Container With Most Water' },
  { num: 12, title: 'Integer to Roman' },
  { num: 13, title: 'Roman to Integer' },
  { num: 14, title: 'Longest Common Prefix' },
  { num: 15, title: '3Sum' },
  { num: 16, title: '3Sum Closest' },
  { num: 17, title: 'Letter Combinations of a Phone Number' },
  { num: 18, title: '4Sum' },
  { num: 19, title: 'Remove Nth Node From End of List' },
  { num: 20, title: 'Valid Parentheses' },
  { num: 21, title: 'Merge Two Sorted Lists' },
  { num: 53, title: 'Maximum Subarray' },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Simple LeetCode Wiki</h1>
      <p className="mb-8 text-lg text-center text-gray-600">Easy explanations for classic LeetCode problems.</p>
      <ul className="space-y-4 text-lg">
        {problems.map(({ num, title }) => (
          <li key={num}>
            {num <= 4 && (
              <Link href={`/problems/${num}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-blue-600 hover:underline">
                {num}. {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
