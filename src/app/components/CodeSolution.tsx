'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tabs from './Tabs';
import CopyButton from './CopyButton';

export interface CodeSolutionData {
  language: string;
  code: string;
  filename?: string;
  explanation?: string;
}

interface CodeSolutionProps {
  solutions: CodeSolutionData[];
  className?: string;
}

const languageMap: Record<string, string> = {
  'Python': 'python',
  'Java': 'java',
  'C++': 'cpp',
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'Go': 'go',
  'Rust': 'rust',
  'C': 'c',
  'C#': 'csharp',
  'Swift': 'swift',
  'Kotlin': 'kotlin',
  'Ruby': 'ruby',
  'PHP': 'php',
  'Scala': 'scala',
};

function CodeBlock({ solution }: { solution: CodeSolutionData }) {
  return (
    <>
      {solution.explanation && (
        <div className="mb-3 text-sm text-gray-600 bg-blue-50 p-3 rounded border border-blue-200">
          <div className="flex items-start">
            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <strong>About this solution:</strong> {solution.explanation}
            </div>
          </div>
        </div>
      )}
      <div className="relative group">
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton text={solution.code.trim()} />
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-900">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-300 ml-2">
                {solution.filename || `solution.${languageMap[solution.language] || 'txt'}`}
              </span>
            </div>
            <span className="text-xs text-gray-400 font-medium">{solution.language}</span>
          </div>
          <SyntaxHighlighter
            language={languageMap[solution.language] || 'text'}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              fontSize: '14px',
              lineHeight: '1.5',
              background: 'transparent',
            }}
            showLineNumbers={true}
            lineNumberStyle={{
              color: '#6b7280',
              fontSize: '12px',
              paddingRight: '1em',
              userSelect: 'none',
              opacity: 0.6,
            }}
          >
            {solution.code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default function CodeSolution({ solutions, className = "" }: CodeSolutionProps) {
  if (!solutions || solutions.length === 0) {
    return (
      <div className={`text-gray-500 text-center py-8 ${className}`}>
        <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <p>No code solutions available.</p>
      </div>
    );
  }

  // If only one solution, display it directly without tabs
  if (solutions.length === 1) {
    const solution = solutions[0];
    return (
      <div className={className}>
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {solution.language}
            {solution.filename && (
              <span className="text-gray-500 ml-1">• {solution.filename}</span>
            )}
          </span>
        </div>
        <CodeBlock solution={solution} />
      </div>
    );
  }

  // Multiple solutions - use tabs
  const tabLabels = solutions.map(solution => {
    const label = solution.language;
    return solution.filename ? `${label} (${solution.filename})` : label;
  });

  const tabContents = solutions.map((solution, index) => (
    <CodeBlock key={index} solution={solution} />
  ));

  return (
    <div className={className}>
      <Tabs labels={tabLabels} contentClassName="relative">
        {tabContents}
      </Tabs>
    </div>
  );
} 