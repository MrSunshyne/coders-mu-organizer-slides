---
transition: view-transition
---

# CSS Container Queries {.inline-block.view-transition-title}

Apply styles based on the size of a containing element, not the viewport.

Syntax

```css
container-type: inline-size;
container-name: sidebar;

@container sidebar (min-width: 400px) {
  .card { font-size: 1.2rem; }
}
```

Baseline

<BaselineChecker feature-name="container-queries" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS Container Queries {.inline-block.view-transition-title}

True component-based responsive design.

Usage

```css {*|2|5-7|*}
.sidebar {
  container-type: inline-size;
}

@container (min-width: 200px) {
  .card { grid-template-columns: 1fr 1fr; }
}

@container (min-width: 300px) {
  .card { grid-template-columns: 1fr 1fr 1fr; }
}

@container (min-width: 400px) {
  .card { grid-template-columns: 1fr 1fr 1fr 1fr; }
}
```

<template v-slot:right>
<div
  class="border-2 border-dashed border-gray-800 p-4 w-48 max-w-full overflow-auto"
  style="resize: horizontal; container-type: inline-size;"
>
  <div class="cq-responsive gap-2 w-full">
    <div class="bg-red-400 p-2 rounded text-white font-bold text-center text-xs">1</div>
    <div class="bg-green-400 p-2 rounded text-white font-bold text-center text-xs">2</div>
    <div class="bg-blue-400 p-2 rounded text-white font-bold text-center text-xs">3</div>
    <div class="bg-yellow-400 p-2 rounded text-white font-bold text-center text-xs">4</div>
  </div>
  <p class="text-xs mt-2 text-gray-600 text-center">↔️ Drag to resize!</p>
</div>

<style scoped>
.cq-responsive {
  display: grid;
  grid-template-columns: 1fr;
  height: 300px;
}

@container (min-width: 200px) {
  .cq-responsive {
    grid-template-columns: 1fr 1fr;
  }
}

@container (min-width: 300px) {
  .cq-responsive {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@container (min-width: 400px) {
  .cq-responsive {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
</template>
