---
transition: view-transition
---

# CSS Nesting {.inline-block.view-transition-title}

Write CSS rules inside other CSS rules, similar to Sass/SCSS.

Syntax

```css
.parent {
  color: blue;
  
  .child {
    color: red;
  }
}
```

Baseline

<BaselineChecker feature-name="nesting" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS Nesting {.inline-block.view-transition-title}

No preprocessor needed!

### Usage

```css {*|2-4|6-8|*}
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  &:hover {
    background-color: red;
  }
}
```



<template v-slot:right>
<div class="p-4 border border-gray-300 rounded-lg transition-shadow duration-200 cursor-pointer hover:bg-red-500">
<h3 class="text-xl font-bold mb-2">Card Title</h3>
<p class="m-0">Hover over this card to see the nested :hover effect.</p>
</div>
</template>
