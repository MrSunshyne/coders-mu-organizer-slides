---
transition: view-transition
---

# View Transitions API {.inline-block.view-transition-title}

Create smooth transitions between different states or pages with native CSS.

Syntax

```css
::view-transition-old(root) { /* exit animation */ }
::view-transition-new(root) { /* enter animation */ }

view-transition-name: my-element;
```

### JavaScript

```js
document.startViewTransition(() => {
  // DOM changes here
});
```

---
layout: iframe-right
url: "https://live-transitions.pages.dev/"
---

# View Transitions Demo

Click around ! 

Author: Maxi Ferreira

X: https://x.com/charca