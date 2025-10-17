---
transition: view-transition
---

# Scroll Driven Animations {.inline-block.view-transition-title}

Create animations that are controlled by scroll position instead of time.

Syntax

```css
animation-timeline: scroll();
animation-timeline: scroll(block nearest);
animation-timeline: view();
```

Baseline

<BaselineChecker feature-name="scroll-driven-animations" />

---
layout: two-cols
layoutClass: gap-16
---

## Scroll Driven Animations {.inline-block.view-transition-title}

Animations triggered by scrolling.

Usage

````md magic-move
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ⏱️  Time-based animation */
.old-way {
  animation: fade-in 2s ease-in-out;
}
```
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ⏱️  Time-based animation */
.old-way {
  animation: fade-in 2s ease-in-out;
}

/* 📜  Scroll-driven animation */
.new-way {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```
````



<template v-slot:right>
<div class="scroll-container h-100 overflow-y-auto border border-gray-300 p-4">
<div class="spacer h-100"></div>
<div class="fade-in-block h-20 bg-gradient-to-br from-red-400 to-teal-400 rounded-lg my-4 flex items-center justify-center text-white font-bold">
Fade In
</div>
<div class="scale-in-block h-20 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg my-4 flex items-center justify-center text-white font-bold">
Scale In
</div>
<div class="slide-in-block h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg my-4 flex items-center justify-center text-white font-bold">
Slide In
</div>
<div class="rotate-in-block h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg my-4 flex items-center justify-center text-white font-bold">
Rotate In
</div>
<div class="spacer h-20"></div>
</div>
<p class="text-xs text-gray-600 mt-2">↕️ Scroll to see view-timeline animations!</p>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-in {
  from { 
    opacity: 0;
    transform: scale(0.5); 
  }
  to { 
    opacity: 1;
    transform: scale(1); 
  }
}

@keyframes slide-in {
  from { 
    opacity: 0;
    transform: translateX(-50px); 
  }
  to { 
    opacity: 1;
    transform: translateX(0); 
  }
}

@keyframes rotate-in {
  from { 
    opacity: 0;
    transform: rotate(-180deg) scale(0.8); 
  }
  to { 
    opacity: 1;
    transform: rotate(0deg) scale(1); 
  }
}

.fade-in-block {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}

.scale-in-block {
  animation: scale-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}

.slide-in-block {
  animation: slide-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}

.rotate-in-block {
  animation: rotate-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
</style>
</template>
