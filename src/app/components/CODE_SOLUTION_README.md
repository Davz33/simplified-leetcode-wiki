# Code Solution Components

This document describes the enhanced code solution system that provides multi-tab functionality with syntax highlighting for LeetCode problems.

## Components Overview

### `CodeSolution`
The main component for displaying code solutions with automatic tab handling and syntax highlighting.

### `CopyButton`
A utility component that provides one-click copying of code to clipboard with visual feedback.

### Enhanced `Tabs`
An improved tab component with better accessibility, hover effects, and styling.

## Features

### ✨ **Multi-Language Support**
- **Python** - With type hints and clean formatting
- **Java** - Full class definitions with imports
- **C++** - Modern C++ with STL containers
- **JavaScript** - ES6+ syntax with arrow functions
- **TypeScript** - Type-safe JavaScript solutions
- **Go** - Idiomatic Go with proper error handling
- **Rust** - Memory-safe systems programming
- **C#** - .NET framework solutions
- **Swift** - iOS/macOS development
- **Kotlin** - JVM/Android solutions
- **Ruby** - Dynamic scripting solutions
- **PHP** - Web development solutions
- **Scala** - Functional programming on JVM

### 🎨 **Syntax Highlighting**
- **VS Code Dark Plus theme** for professional appearance
- **Line numbers** for easy reference
- **Language-specific highlighting** with proper keyword recognition
- **Responsive design** that works on all screen sizes

### 🔧 **Enhanced UX**
- **Copy-to-clipboard** functionality with visual feedback
- **File-like header** with simulated window controls
- **Hover effects** for better interactivity
- **Accessibility support** with proper ARIA labels
- **Smooth transitions** and animations

### 📝 **Flexible Content**
- **Solution explanations** with contextual information
- **Multiple approaches** for the same problem
- **Alternative implementations** (recursive, iterative, etc.)
- **Performance comparisons** and trade-offs

## Usage Examples

### Basic Single Solution

```tsx
import { CodeSolution } from '../components/CodeSolution';

const solutions = [{
  language: 'Python',
  explanation: 'Efficient hash map solution with O(n) time complexity.',
  code: `def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`
}];

<CodeSolution solutions={solutions} />
```

### Multi-Tab Solutions

```tsx
const solutions = [
  {
    language: 'Python',
    explanation: 'Clean and readable Python solution.',
    code: '...'
  },
  {
    language: 'Java',
    explanation: 'Enterprise-grade Java implementation.',
    code: '...'
  },
  {
    language: 'Python',
    filename: 'recursive.py',
    explanation: 'Alternative recursive approach.',
    code: '...'
  }
];

<CodeSolution solutions={solutions} />
```

### Advanced Configuration

```tsx
<CodeSolution 
  solutions={complexSolutions} 
  className="my-custom-spacing"
/>
```

## Data Structure

### `CodeSolutionData` Interface

```typescript
interface CodeSolutionData {
  language: string;      // Programming language name
  code: string;          // The actual code solution
  filename?: string;     // Optional filename for display
  explanation?: string;  // Optional explanation of the approach
}
```

### Example Data Files

Create structured solution files for each problem:

```typescript
// src/app/problems/1-two-sum/solutions.ts
export const twoSumSolutions: CodeSolutionData[] = [
  {
    language: 'Python',
    explanation: 'Hash map approach for O(n) time complexity.',
    code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Implementation here
        pass`
  },
  // More solutions...
];
```

## Styling and Theming

### Dark Code Blocks
All code blocks use a professional dark theme that matches VS Code Dark Plus:
- **Background**: Dark gray (#1e1e1e)
- **Syntax Colors**: Language-appropriate highlighting
- **Line Numbers**: Subtle gray with proper spacing
- **Window Controls**: Simulated macOS-style colored dots

### Copy Button States
- **Default**: Gray background with copy icon
- **Hover**: Slightly darker with smooth transition
- **Copied**: Green background with checkmark icon
- **Auto-reset**: Returns to default after 2 seconds

### Tab Styling
- **Active Tab**: Blue accent with background highlight
- **Inactive Tabs**: Gray with hover effects
- **Smooth Transitions**: 200ms duration for all state changes
- **Focus States**: Keyboard navigation support

## Integration in Problem Pages

### Step 1: Create Solutions File
```typescript
// problems/your-problem/solutions.ts
import { CodeSolutionData } from '../../components/CodeSolution';

export const yourProblemSolutions: CodeSolutionData[] = [
  // Your solutions here
];
```

### Step 2: Import and Use
```tsx
// problems/your-problem/page.tsx
import CodeSolution from '../../components/CodeSolution';
import { yourProblemSolutions } from './solutions';

export default function YourProblem() {
  return (
    <main>
      {/* Problem description */}
      <h3>Code Solutions</h3>
      <CodeSolution solutions={yourProblemSolutions} />
    </main>
  );
}
```

## Best Practices

### 🎯 **Solution Organization**
1. **Primary solution first** - Put the most recommended approach as the first tab
2. **Language diversity** - Include solutions in multiple popular languages
3. **Clear explanations** - Add contextual explanations for each approach
4. **Consistent formatting** - Use proper indentation and naming conventions

### 📚 **Content Guidelines**
1. **Complete solutions** - Include all necessary imports and class definitions
2. **Production-ready code** - Write code that would pass code review
3. **Educational value** - Focus on teaching concepts, not just solving
4. **Performance notes** - Mention time/space complexity in explanations

### 🔧 **Technical Considerations**
1. **File naming** - Use descriptive filenames for alternative approaches
2. **Code length** - Keep solutions concise but complete
3. **Error handling** - Include appropriate error handling where relevant
4. **Comments** - Add strategic comments for complex logic

## Accessibility Features

- **Keyboard Navigation**: Full tab keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Focus Management**: Clear focus indicators
- **High Contrast**: Colors that meet WCAG guidelines
- **Responsive Design**: Works on all device sizes

## Performance Benefits

- **Code Splitting**: Syntax highlighter loaded only when needed
- **Lazy Loading**: Tabs load content on demand
- **Optimized Rendering**: React.memo for expensive operations
- **Efficient Re-renders**: Minimal DOM updates

This system transforms the static code display into an interactive, educational experience that helps developers learn from multiple perspectives and approaches to solving algorithmic problems. 