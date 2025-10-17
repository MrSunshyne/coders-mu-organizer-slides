---
transition: view-transition
---

# CSS Trigonometry Functions {.inline-block.view-transition-title}

Advanced mathematical functions for precise calculations in CSS.

Syntax

```css
width: round(123.456px, 10px); /* 120px */
transform: rotate(sin(45deg));
height: mod(100px, 30px); /* 10px */
font-size: rem(17px, 16px); /* 1px */
```

Baseline

<BaselineChecker feature-name="trig-functions" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS Trigonometry Functions {.inline-block.view-transition-title}

Precise mathematical control.

### Usage

```css {*|2|6|10|*}
.rounded-size {
  width: round(123.456px, 10px);
}

.trigonometry {
  transform: rotate(sin(45deg) * 90deg);
}

.modulo {
  margin-left: mod(100vw, 50px);
}
```



<template v-slot:right>
<div class="space-y-4">
<div class="w-30 h-10 bg-red-400 rounded flex items-center justify-center text-white text-xs">
round(123.456px, 10px)
</div>
<div class="w-20 h-20 bg-teal-400 rounded flex items-center justify-center text-white text-xs mx-auto my-8 transform rotate-45">
sin(45°)
</div>
<div class="ml-3 p-2 bg-blue-400 text-white rounded text-xs">
mod(100px, 30px) = 10px margin
</div>
</div>
</template>
