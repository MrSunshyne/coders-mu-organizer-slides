---
transition: view-transition
---

# CSS Subgrid {.inline-block.view-transition-title}

The `subgrid` value for `grid-template-columns` and `grid-template-rows` allows nested grids to participate in the sizing of their parent grid.

Syntax

```css
grid-template-columns: subgrid;
grid-template-rows: subgrid;
```

Baseline

<BaselineChecker feature-name="subgrid" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS Subgrid {.inline-block.view-transition-title}

Perfect alignment between nested grids and their parent.

### Usage

```css {*|3,7|*}
.parent-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.nested-grid {
  grid-template-columns: subgrid;
  display: grid;
}
```

<template v-slot:right>
<div class="grid grid-cols-3 gap-4 border-2 border-gray-800 p-4">
  <div class="bg-red-400 p-4 text-white font-bold text-center">1</div>
  <div class="grid gap-2 col-span-2" style="grid-template-columns: subgrid;">
    <div class="bg-teal-400 p-2 text-white font-bold text-center text-sm">2a</div>
    <div class="bg-blue-400 p-2 text-white font-bold text-center text-sm">2b</div>
  </div>
</div>

```html 
<div class="grid grid-cols-3">
  <div class="bg-red-400">1</div>
  <div class="grid gap-2 col-span-2" style="grid-template-columns: subgrid;">
    <div class="bg-teal-400">2a</div>
    <div class="bg-blue-400">2b</div>
  </div>
</div>
```
</template>
