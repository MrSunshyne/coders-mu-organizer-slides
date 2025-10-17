---
transition: view-transition
---

# CSS random() Function {.inline-block.view-transition-title}

Generate random values directly in CSS for dynamic styling.

Syntax

```css
width: random(100px, 300px);
opacity: random(0.5, 1);
transform: rotate(random(-45deg, 45deg));
```

Future Feature

> This is a proposed CSS function that would enable random values without JavaScript.

Not even in Baseline yet

---
layout: two-cols
layoutClass: gap-16
---

## CSS random() Function {.inline-block.view-transition-title}

Randomness in pure CSS.

Proposed Usage

```css {*|2|6|10|*}
.particle {
  width: random(10px, 50px);
}

.wobble {
  transform: rotate(random(-5deg, 5deg));
}

.fade {
  opacity: random(0.3, 0.9);
}
```



<template v-slot:right>
<div class="grid grid-cols-4 gap-2 p-4">
<div class="w-6 h-6 bg-red-400 rounded-full opacity-70"></div>
<div class="w-9 h-9 bg-teal-400 rounded-full opacity-90"></div>
<div class="w-5 h-5 bg-blue-400 rounded-full opacity-50"></div>
<div class="w-10 h-10 bg-yellow-400 rounded-full opacity-80"></div>
<div class="w-8 h-8 bg-pink-400 rounded-full opacity-60 transform rotate-15"></div>
<div class="w-11 h-11 bg-blue-500 rounded-full opacity-40 transform -rotate-10"></div>
<div class="w-4 h-4 bg-purple-600 rounded-full opacity-80 transform rotate-25"></div>
<div class="w-10 h-10 bg-green-400 rounded-full opacity-70 transform -rotate-20"></div>
</div>
<p class="text-xs text-gray-600 text-center m-0">*Simulated random values - future CSS feature</p>
</template>
