---
transition: view-transition
---

# CSS if() Function {.inline-block.view-transition-title}

Conditionally apply styles based on boolean expressions directly in CSS.

Syntax

```css
if(condition-1: value-1; condition-2: value-2; else: value-3)
width: if(media(max-width: 768px): 100%; else: 50%);
```

Baseline

<BaselineChecker feature-name="if" />

Available Now

✅ Available in Chrome 137+ • Works with `media()`, `supports()`, `style()`


---
layout: two-cols
---

## CSS if() Function {.inline-block.view-transition-title}

Conditional styling in pure CSS.

### Proposed Usage

````md magic-move
```css
/* Basic Media Queries */
.container {
  width: if(media(max-width: 768px): 100%; else: 50%);
}
```
```css
/* Accessibility & Motion */
.container {
  width: if(media(max-width: 768px): 100%; else: 50%);
}

.animation {
  transition-duration: if(
    media(prefers-reduced-motion: reduce): 0ms;
    else: 300ms
  );
}
```
```css
/* Feature Detection */
.modern-layout {
  display: if(
    supports(display: grid): grid;
    supports(display: flex): flex;
    else: block
  );
  
  background: if(
    supports(color: oklch(0.7 0.185 232)): oklch(0.7 0.185 232);
    else: #00adf3
  );
}
```
````


