---
transition: view-transition
---

# CSS if() with State-Based Styling {.inline-block.view-transition-title}

Dynamic styling based on data attributes using `style()` queries.

Key Features

- Query custom properties directly on the element
- No parent element required (unlike CSS style queries)
- Perfect for component-based architectures

Baseline

<BaselineChecker feature-name="if" />

---
layout: two-cols
layoutClass: gap-16
---

## Dynamic Component States {.inline-block.view-transition-title}

Style components based on their data attributes.

Usage

````md magic-move
```html
<div class="status-card" data-status="pending">
  <h3>Task Status</h3>
  <p>Processing...</p>
</div>
```
```css
.status-card {
  --status: attr(data-status type(<custom-ident>));
  padding: 1rem;
  border-radius: 8px;
}
```
```css
.status-card {
  --status: attr(data-status type(<custom-ident>));
  padding: 1rem;
  border-radius: 8px;
  background: if(
    style(--status: pending): #fff3cd;
    style(--status: complete): #d4edda;
    style(--status: error): #f8d7da;
    else: #f8f9fa
  );
}
```
```css
.status-card {
  --status: attr(data-status type(<custom-ident>));
  padding: 1rem;
  border-radius: 8px;
  background: if(
    style(--status: pending): #fff3cd;
    style(--status: complete): #d4edda;
    style(--status: error): #f8d7da;
    else: #f8f9fa
  );
  border-color: if(
    style(--status: pending): #856404;
    style(--status: complete): #155724;
    style(--status: error): #721c24;
    else: #6c757d
  );
}
```
````

<template v-slot:right>
<div class="p-4 h-120 overflow-y-auto">
<h4 class="text-sm font-bold mb-4">HTML Structure</h4>

```html
<!-- Different status cards -->
<div class="card" data-status="pending">
  <h3>⏳ Pending Task</h3>
  <p>Waiting for approval</p>
</div>

<div class="card" data-status="complete">
  <h3>✅ Complete Task</h3>
  <p>Successfully finished</p>
</div>

<div class="card" data-status="error">
  <h3>❌ Failed Task</h3>
  <p>Something went wrong</p>
</div>

<div class="card" data-status="draft">
  <h3>📝 Draft Task</h3>
  <p>Work in progress</p>
</div>
```

<div class="mt-6">
<h4 class="text-sm font-bold mb-3">Live Demo</h4>
<div class="space-y-3  text-black">
<div class="p-3 rounded border border-yellow-600" style="background-color: #fff3cd;" data-status="pending">
<h4 class="font-medium mb-1 text-sm">⏳ Pending Task</h4>
<p class="text-xs opacity-80 m-0">Waiting for approval</p>
</div>
<div class="p-3 rounded border border-green-700" style="background-color: #d4edda;" data-status="complete">
<h4 class="font-medium mb-1 text-sm">✅ Complete Task</h4>
<p class="text-xs opacity-80 m-0">Successfully finished</p>
</div>
<div class="p-3 rounded border border-red-700" style="background-color: #f8d7da;" data-status="error">
<h4 class="font-medium mb-1 text-sm">❌ Failed Task</h4>
<p class="text-xs opacity-80 m-0">Something went wrong</p>
</div>
<div class="p-3 rounded border border-gray-500" style="background-color: #f8f9fa;" data-status="draft">
<h4 class="font-medium mb-1 text-sm">📝 Draft Task</h4>
<p class="text-xs opacity-80 m-0">Work in progress</p>
</div>
</div>
</div>
</div>
</template>
