---
transition: view-transition
---

# CSS Sibling Functions {.inline-block.view-transition-title}

Dynamic styling based on an element's position among its siblings.

Syntax

```css
sibling-index()    /* Returns position (1, 2, 3...) */
sibling-count()    /* Returns total number of siblings */

width: calc(sibling-index() * 50px);
color: hsl(calc(360deg / sibling-count() * sibling-index()) 50% 50%);
```

Baseline

<BaselineChecker feature-name="sibling-count" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS Sibling Functions {.inline-block.view-transition-title}

Create patterns based on element position and count.

Usage

````md magic-move
```css
/* Dynamic widths based on position */
li {
  width: calc(sibling-index() * 50px);
}
```
```css
/* Rainbow colors using both functions */
li {
  width: calc(sibling-index() * 50px);
  background: hsl(
    calc(360deg / sibling-count() * sibling-index()) 
    70% 60%
  );
}
```
```css
/* Sequential animations */
li {
  animation: fade-in 1s ease-out;
  animation-delay: calc(sibling-index() * 0.2s);
  animation-fill-mode: backwards;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
```css
/* Auto-numbering without <ol> */
div {
  --list-index: sibling-index();
  display: flex;
  gap: 1ch;
}

div::before {
  content: var(--list-index);
  font-weight: bold;
  color: hsl(calc(360deg / sibling-count() * sibling-index()) 70% 40%);
}
```
````

<template v-slot:right>
<div class="p-4">
<h4 class="text-sm font-bold mb-4">Dynamic Examples</h4>

<div class="mb-6">
<h5 class="text-xs font-medium mb-2">Rainbow Width Bars</h5>
<div class="demo-bars space-y-2">
<div class="demo-bar bg-red-400 text-white text-xs p-1 text-center font-medium">Item 1</div>
<div class="demo-bar bg-orange-400 text-white text-xs p-1 text-center font-medium">Item 2</div>
<div class="demo-bar bg-yellow-400 text-white text-xs p-1 text-center font-medium">Item 3</div>
<div class="demo-bar bg-green-400 text-white text-xs p-1 text-center font-medium">Item 4</div>
<div class="demo-bar bg-blue-400 text-white text-xs p-1 text-center font-medium">Item 5</div>
</div>
</div>

<div class="mb-6">
<h5 class="text-xs font-medium mb-2">Auto-Numbered List</h5>
<div class="demo-numbered space-y-1">
<div class="demo-item flex gap-2 text-sm"><span class="demo-number font-bold text-red-500">1</span>First Item</div>
<div class="demo-item flex gap-2 text-sm"><span class="demo-number font-bold text-orange-500">2</span>Second Item</div>
<div class="demo-item flex gap-2 text-sm"><span class="demo-number font-bold text-green-500">3</span>Third Item</div>
<div class="demo-item flex gap-2 text-sm"><span class="demo-number font-bold text-blue-500">4</span>Fourth Item</div>
</div>
</div>

</div>

<style>
/* Simulate sibling-index() and sibling-count() effects */
.demo-bar:nth-child(1) { width: 20%; }
.demo-bar:nth-child(2) { width: 40%; }
.demo-bar:nth-child(3) { width: 60%; }
.demo-bar:nth-child(4) { width: 80%; }
.demo-bar:nth-child(5) { width: 100%; }

/* If sibling functions were supported, this would work: */
/*
.demo-bar {
  width: calc(sibling-index() * 20%);
  background: hsl(calc(360deg / sibling-count() * sibling-index()) 70% 60%);
}

.demo-item {
  --list-index: sibling-index();
}

.demo-item::before {
  content: var(--list-index);
  color: hsl(calc(360deg / sibling-count() * sibling-index()) 70% 40%);
}
*/
</style>
</template>
