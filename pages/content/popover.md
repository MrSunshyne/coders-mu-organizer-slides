---
transition: view-transition
---

# Popover API {.inline-block.view-transition-title}

Create accessible popovers without JavaScript, using only HTML and CSS.

HTML Syntax

```html
<button popovertarget="my-popover">Open Popover</button>
<div popover id="my-popover">
  Popover content here!
</div>
```

CSS Styling

```css
[popover] { background: white; border: 1px solid #ccc; }
```

---
layout: two-cols
---

## Popover API {.inline-block.view-transition-title}

Accessible popovers, no JS required.

### Usage

```html {*|1|2-4|*}
<button popovertarget="menu">Menu</button>
<div popover="auto" id="menu">
  <p>Popover content</p>
</div>
```

```css {*|2-4|6-8|*}
[popover] {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

[popover]::backdrop {
  background: rgba(0,0,0,0.5);
}
```



<template v-slot:right>
  <div class="text-center p-8">
    <button 
      class="px-4 py-2 bg-teal-400 text-white border-none rounded cursor-pointer hover:bg-teal-500"
      onclick="this.nextElementSibling.togglePopover ? this.nextElementSibling.togglePopover() : alert('Popover API not supported in this browser')"
    >
      Open Popover
    </button>
    <div 
      popover="auto"
      class="p-4 bg-white border border-gray-300 rounded-lg shadow-lg text-black text-4xl"
    >
      <p class="mb-2 font-bold">Popover Content</p>
      <p class="mb-0">Click outside to close automatically!</p>
      <button 
        onclick="this.parentElement.hidePopover ? this.parentElement.hidePopover() : this.parentElement.style.display='none'"
        class="mt-2 px-2 py-1 bg-red-400 text-white border-none rounded cursor-pointer text-xs hover:bg-red-500"
      >
      Close
      </button>
    </div>
  </div>
  <style scoped>
  [popover]::backdrop {
    background: rgba(0,0,0,0.5);
  }
  </style>
</template>
