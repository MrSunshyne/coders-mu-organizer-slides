---
transition: view-transition
---

# CSS :has() Selector {.inline-block.view-transition-title}

Select a parent element based on its children. The "parent selector" we've always wanted!

Syntax

```css
.parent:has(.child) { /* styles */ }
.form:has(:invalid) { border: red; }
.card:has(img) { padding: 0; }
```

Baseline

<BaselineChecker feature-name="has" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS :has() Selector {.inline-block.view-transition-title}

Style parents based on their children.

Usage

```css {*|2|6|10|*}
/* Style cards that contain images */
.card:has(img) {
  background-color: red;
}

/* Style forms with invalid inputs */
.form:has(:invalid) {
  border: 2px solid red;
}

```


<template v-slot:right>
  <div class="space-y-4">
    <div class="demo-card-with-img border border-gray-300 rounded-lg overflow-hidden p-4">
      <img src="/images/profile-transparent.png" class="w-full h-15 object-cover">
      <p class="p-2 m-0 text-xs">Card with image (red background - :has() would remove background)</p>
      </div>
      <div class="demo-form p-4 border-2 border-blue-500 rounded-lg">
        <input type="email" placeholder="Invalid email" value="invalid-email" class="w-full p-2">
        <p class="mt-2 mb-0 text-xs">Form with :invalid input (red border via :has())</p>
      </div>
  </div>

  <style scoped>
  .demo-card-with-img:has(img) {
    background-color: red;
  }
  .demo-form:has(:invalid) {
    border-color: red;
  }
  </style>
</template>
