---
transition: view-transition
---

# CSS accent-color {.inline-block.view-transition-title}

Customize the accent color of form controls like checkboxes, radio buttons, and progress bars.

Syntax

```css
accent-color: #ff0000;
accent-color: blue;
accent-color: auto;
```

Baseline

<BaselineChecker feature-name="accent-color" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS accent-color {.inline-block.view-transition-title}

Brand your form controls instantly.

### Usage

```css {*|2|6|*}
.custom-form {
  accent-color: #ff0000;
}

input[type="range"] {
  accent-color: #4ecdc4;
}
```



<template v-slot:right>
<div class="space-y-4">
<div style="accent-color: #ff0000;" class="space-y-2">
<label class="block"><input type="checkbox" checked class="mr-2"> Custom Checkbox</label>
<label class="block"><input type="radio" name="demo" checked class="mr-2"> Custom Radio</label>
<progress value="70" max="100" class="w-full my-2">70%</progress>
</div>
<div style="accent-color: #4ecdc4;" class="mt-4">
<input type="range" value="50" class="w-full">
</div>
</div>
</template>
