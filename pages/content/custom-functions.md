---
transition: view-transition
---

# CSS Custom Functions {.inline-block.view-transition-title}

Write reusable functions that accept arguments and return dynamic values.

Available Now

```css
@function --negate(--value) {
  result: calc(-1 * var(--value));
}

.element { margin: --negate(var(--gap)); }
```

Baseline

<BaselineChecker feature-name="function" />

✅ Available in Chrome 139+ 

---
layout: two-cols
---

## CSS Custom Functions {.inline-block.view-transition-title}

Turn complex CSS patterns into clean, reusable functions.

Usage

````md magic-move
```css
/* Simple negation function */
@function --negate(--value) {
  result: calc(-1 * var(--value));
}
```
```css
/* Opacity function with relative color syntax */
@function --opacity(--color, --alpha) {
  result: rgb(from var(--color) r g b / var(--alpha));
}

.card { background: --opacity(blue, 20%); }
```
```css
/* Fluid typography with default values */
@function --fluid-type(--min, --max, --type: 'header') {
  --scalar: if(style(--type: 'header'): 4vw; 
               style(--type: 'copy'): 0.5vw);
  result: clamp(var(--min), var(--scalar) + var(--min), var(--max));
}

h1 { font-size: --fluid-type(24px, 36px); }
p { font-size: --fluid-type(16px, 24px, 'copy'); }
```
````

<template v-slot:right>
<div class="p-6">
<h4 class="text-sm font-bold mb-4">Real Working Examples</h4>

<div class="space-y-4">
<div class="demo-opacity p-3 rounded text-white font-medium text-center text-sm">
Opacity Function Demo
<div class="text-xs opacity-90 mt-1">--opacity(blue, 70%)</div>
</div>

<div class="demo-fluid-text">
<h3 class="demo-fluid-heading mb-2 font-bold">Fluid Typography</h3>
<p class="demo-fluid-copy text-sm leading-relaxed">
This text scales smoothly with our custom --fluid-type() function. Resize to see!
</p>
</div>

<div class="text-black demo-negate p-3 bg-yellow-100 border border-yellow-300 rounded text-center text-sm">
Negation Function
<div class="text-xs mt-1">Using --negate() for negative margins</div>
</div>

<div class="mt-4 p-3 bg-gray-100 rounded text-xs text-black">
<strong>Benefits:</strong><br>
• Reusable across projects<br>
• Cleaner, readable code<br>
• Dynamic calculations<br>
• Design system consistency
</div>
</div>

</div>
</template>

<style>
/* Real CSS @function definitions */
@function --opacity(--color, --alpha) {
  result: rgb(from var(--color) r g b / var(--alpha));
}

@function --fluid-type(--min, --max, --type: 'header') {
  --scalar: if(style(--type: 'header'): 4vw; 
               style(--type: 'copy'): 0.5vw);
  result: clamp(var(--min), var(--scalar) + var(--min), var(--max));
}

@function --conditional-radius(--radius, --edge: 4px) {
  result: clamp(0px, ((100vw - var(--edge)) - 100%) * 1e5, var(--radius));
}

@function --negate(--value) {
  result: calc(-1 * var(--value));
}

/* Apply the functions to our demos */
.demo-opacity {
  background-color: --opacity(blue, 100%);
  /* Fallback for non-supporting browsers */
  background-color: rgba(0, 0, 255, 0.7);
}

.demo-fluid-heading {
  font-size: --fluid-type(1.2rem, 2rem);
  /* Fallback */
  font-size: clamp(1.2rem, 4vw + 1.2rem, 2rem);
}

.demo-fluid-copy {
  font-size: --fluid-type(0.9rem, 1.2rem, 'copy');
  /* Fallback */
  font-size: clamp(0.9rem, 0.5vw + 0.9rem, 1.2rem);
}

.demo-conditional-border {
  border-radius: --conditional-radius(1rem);
  /* Fallback */
  border-radius: clamp(0px, ((100vw - 4px) - 100%) * 100000, 1rem);
}

.demo-negate {
  --gap: 0.5rem;
  margin-top: --negate(var(--gap));
  /* Fallback */
  margin-top: calc(-1 * 0.5rem);
}
</style>
