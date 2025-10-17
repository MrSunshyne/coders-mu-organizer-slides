---
transition: view-transition
---

# CSS aspect-ratio {.inline-block.view-transition-title}

Control the aspect ratio of an element without using padding hacks.

Syntax

```css
aspect-ratio: 16 / 9;
aspect-ratio: 1;
aspect-ratio: auto;
```

Baseline

<BaselineChecker feature-name="aspect-ratio" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS aspect-ratio {.inline-block.view-transition-title}

Goodbye padding-bottom hacks!

### Usage

```css {*|2|6|*}
.video-container {
  aspect-ratio: 16 / 9;
  background: #000;
}

.square {
  aspect-ratio: 1;
  background: #ff6b6b;
}
```



<template v-slot:right>
<div class="space-y-4">
<div class="aspect-video bg-black w-full flex items-center justify-center text-white font-bold">16:9 Video</div>
<div class="aspect-square bg-red-400 w-3/5 flex items-center justify-center text-white font-bold">1:1 Square</div>
</div>
</template>
