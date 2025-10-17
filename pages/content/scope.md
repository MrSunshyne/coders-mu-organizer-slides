---
transition: view-transition
---

# CSS @scope {.inline-block.view-transition-title}

Limit CSS rules to a specific part of the document tree.

Syntax

```css
@scope (.component) {
  p { color: red; }
}

@scope (.card) to (.exclude) {
  h2 { font-size: 1.5rem; }
}
```

Baseline

<BaselineChecker feature-name="scope" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS @scope {.inline-block.view-transition-title}

Encapsulate styles without CSS-in-JS.

Usage

```css {*|1|1,7|1,7,2-4|1,7,2-4,5-6|*}
@scope (.card) to (.nested-card) {
  h2 { 
    color: blue; 
    border-bottom: 2px solid blue; 
  }
  p { color: red; font-weight: bold; }
}
```



<template v-slot:right>
<div class="space-y-4">
<div class="demo-card border border-gray-300 p-4 rounded-lg">
<h2 class="text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Scoped Heading ✓</h2>
<p class="text-red-500 font-bold mb-2">Scoped paragraph ✓</p>
<div class="demo-nested-card p-2 bg-gray-100 rounded">
<h2 class="text-base text-gray-800 mb-1">Excluded heading ✗</h2>
<p class="text-gray-600 text-sm mb-0">Excluded paragraph ✗</p>
</div>
</div>
<div class="text-xs text-gray-600 mt-2">
<strong>@scope (.card) to (.nested-card)</strong><br>
✓ Styles apply inside .card<br>  
✗ Styles excluded inside .nested-card
</div>
</div>
</template>
