---
transition: view-transition
---

# CSS Anchor Positioning {.inline-block.view-transition-title}

Position elements relative to other elements anywhere in the DOM.

Syntax

```css
.anchor { anchor-name: --my-anchor; }
.positioned { 
  position: absolute;
  top: anchor(--my-anchor bottom);
  left: anchor(--my-anchor start);
}
```

Baseline

<BaselineChecker feature-name="anchor-positioning" />

---
layout: two-cols
---

## CSS Anchor Positioning {.inline-block.view-transition-title}

Position relative to any element.

### Usage

```css {*|2|6-8|*}
.button {
  anchor-name: --button;
}

.tooltip {
  position: absolute;
  top: anchor(--button bottom);
  left: anchor(--button center);
}
```



<template v-slot:right>
<div class="relative p-12">
<button 
  class="px-4 py-2 bg-teal-400 text-white border-none rounded cursor-pointer hover:bg-teal-500"
  onmouseover="this.nextElementSibling.style.display='block'" 
  onmouseout="this.nextElementSibling.style.display='none'"
>
Hover for Tooltip
</button>
<div 
  class="hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10"
  style="display: none;"
>
Positioned with Anchor API
<div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-800"></div>
</div>
</div>
</template>
