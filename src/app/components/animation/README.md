# Animation Components

This directory contains reusable components for creating algorithm visualizations and animations across LeetCode problems. These components eliminate code duplication and ensure consistent styling and behavior.

## Components Overview

### `AnimationContainer`
The main container for algorithm animations with consistent layout and spacing.

```tsx
<AnimationContainer className="optional-class">
  {/* Your animation content */}
</AnimationContainer>
```

### `NumberDisplay`
Displays arrays of numbers with highlighting capabilities, perfect for visualizing arrays, linked lists, etc.

```tsx
<NumberDisplay
  numbers={[1, 2, 3, 4, 5]}
  highlightIndex={2}                    // Highlights index 2 in yellow
  highlightIndices={[0, 4]}            // Highlights indices 0 and 4 in green
  label="Array"                        // Optional label above the display
  showIndices={true}                   // Shows index numbers below values
  size="lg"                           // 'sm' | 'md' | 'lg'
  renderCustomHighlight={(num, idx) => // Custom highlighting logic
    idx === specialIndex ? 'bg-red-100 border-red-500' : 'bg-white'
  }
/>
```

#### Props:
- `numbers`: Array of numbers to display
- `highlightIndex?`: Single index to highlight in yellow
- `highlightIndices?`: Array of indices to highlight in green
- `label?`: Label text to display above the numbers
- `showIndices?`: Whether to show index numbers below each value
- `size?`: Size variant ('sm', 'md', 'lg')
- `renderCustomHighlight?`: Function for custom highlighting logic
- `className?`: Additional CSS classes

### `InfoPanel`
Displays algorithm state information in a consistent styled panel.

```tsx
<InfoPanel>
  <InfoRow label="Current Value" value={42} />
  <InfoRow label="Status" value="Processing..." />
  <div>Custom content can also go here</div>
</InfoPanel>
```

### `InfoRow`
A formatted row for displaying label-value pairs within InfoPanel.

```tsx
<InfoRow label="Variable Name" value="Variable Value" />
<InfoRow label="Complex Value" value={<span className="text-red-500">Error</span>} />
```

### `AnimationControls`
Standard playback controls for stepping through animation states.

```tsx
<AnimationControls
  step={currentStep}
  totalSteps={allSteps.length}
  playing={isPlaying}
  onStepChange={(newStep) => setCurrentStep(newStep)}
  onPlayingChange={(playing) => setIsPlaying(playing)}
/>
```

### `useAnimationTimer`
A custom hook that manages animation timing and playback state.

```tsx
const { step, setStep, playing, setPlaying } = useAnimationTimer({
  totalSteps: steps.length,
  interval: 1200,           // Optional: milliseconds between steps
  autoPlay: true            // Optional: start playing automatically
});
```

## Usage Patterns

### Basic Algorithm Animation

```tsx
'use client';

import React from 'react';
import { 
  AnimationContainer, 
  AnimationControls, 
  InfoPanel, 
  InfoRow, 
  NumberDisplay, 
  useAnimationTimer 
} from '../../components/animation';

export default function MyAlgorithmAnimation({ input }: { input?: number[] }) {
  const steps = computeAlgorithmSteps(input || [1, 2, 3]);
  const { step, setStep, playing, setPlaying } = useAnimationTimer({ 
    totalSteps: steps.length 
  });

  const current = steps[step];

  return (
    <AnimationContainer>
      <NumberDisplay
        numbers={current.array}
        highlightIndex={current.currentIndex}
        label="Input Array"
      />
      
      <InfoPanel>
        <InfoRow label="Current Step" value={step + 1} />
        <InfoRow label="Current Value" value={current.value} />
        <InfoRow label="Status" value={current.status} />
      </InfoPanel>
      
      <AnimationControls
        step={step}
        totalSteps={steps.length}
        playing={playing}
        onStepChange={setStep}
        onPlayingChange={setPlaying}
      />
    </AnimationContainer>
  );
}
```

### Custom Highlighting

For complex highlighting needs, use `renderCustomHighlight`:

```tsx
<NumberDisplay
  numbers={array}
  renderCustomHighlight={(num, idx) => {
    if (idx === currentPointer) return 'bg-yellow-100 border-yellow-500 text-yellow-700 scale-110';
    if (visited.includes(idx)) return 'bg-blue-100 border-blue-500 text-blue-700';
    if (result.includes(idx)) return 'bg-green-100 border-green-500 text-green-700';
    return 'bg-white border-gray-300 text-gray-700';
  }}
/>
```

## Styling

All components use Tailwind CSS classes for consistent styling. The color scheme is:
- **Yellow**: Current/active elements (`bg-yellow-100 border-yellow-500 text-yellow-700`)
- **Green**: Result/success elements (`bg-green-100 border-green-500 text-green-700`)
- **Gray**: Default/inactive elements (`bg-white border-gray-300 text-gray-700`)
- **Blue**: Additional state (visited, processed, etc.)

## Adding New Components

When creating new animation components:

1. Use the existing components as building blocks
2. Follow the established patterns for step computation and state management
3. Use the `useAnimationTimer` hook for consistent timing behavior
4. Maintain the consistent color scheme for highlighting
5. Add loading states for safety

## Benefits

- **Consistency**: All animations have the same look, feel, and behavior
- **Maintainability**: Changes to styling or behavior can be made in one place
- **Reusability**: Common patterns are extracted and can be mixed and matched
- **Performance**: Shared components are optimized and tested once
- **Developer Experience**: Clear, typed interfaces with good defaults 