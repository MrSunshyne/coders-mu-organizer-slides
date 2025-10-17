---
transition: view-transition
---

# Invoker API {.inline-block.view-transition-title}

Trigger actions on elements declaratively with HTML attributes.

HTML Syntax

```html
<button commandfor="dialog" command="showModal">
  Open Dialog
</button>
<dialog id="dialog">Content here</dialog>
```

More Examples

```html
<button commandfor="details" command="toggle">Toggle</button>
<details id="details">Collapsible content</details>
```

---
layout: two-cols
---

## Invoker API {.inline-block.view-transition-title}

Declarative element interactions.

Usage

```html {*|1-2|4-6|*}
<button commandfor="my-dialog" command="showModal">
  Open Dialog
</button>
<dialog id="my-dialog">
  <p>Dialog content</p>
</dialog>
```

```html {*|1|2|*}
<button commandfor="details" command="toggle">
<details id="details">Details...</details>
```



<template v-slot:right>
<div class="space-y-4 p-4">
<button 
  class="px-4 py-2 bg-teal-400 text-white border-none rounded cursor-pointer hover:bg-teal-500"
  onclick="document.getElementById('demo-dialog').showModal()"
>
Open Dialog (Demo)
</button>
<dialog 
  id="demo-dialog"
  class="p-4 border-none rounded-lg shadow-xl"
>
<p class="mb-4">This is a dialog opened with the Invoker API concept!</p>
<button 
  onclick="document.getElementById('demo-dialog').close()"
  class="px-2 py-1 bg-red-400 text-white border-none rounded cursor-pointer hover:bg-red-500"
>
Close
</button>
</dialog>
<div class="mt-4">
<button 
  class="px-2 py-1 bg-blue-400 text-white border-none rounded cursor-pointer text-xs hover:bg-blue-500"
  onclick="this.nextElementSibling.open = !this.nextElementSibling.open"
>
Toggle Details
</button>
<details class="mt-2 text-sm">
<summary class="cursor-pointer">Expandable Content</summary>
<p class="mt-2 text-gray-600">This content can be toggled with the Invoker API!</p>
</details>
</div>
</div>
</template>
