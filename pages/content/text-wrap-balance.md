---
transition: view-transition
---

# CSS text-wrap: balance {.inline-block.view-transition-title}

Automatically balance text across lines for better typography.

Syntax

```css
text-wrap: balance;
text-wrap: wrap;
text-wrap: nowrap;
```

Baseline

<BaselineChecker feature-name="text-wrap" />

---
layout: two-cols
layoutClass: gap-16
---

## CSS text-wrap: balance {.inline-block.view-transition-title}

Perfect headlines, every time.

### Usage

```css {*|2|6|*}
.justify {
  text-align: justify;
}

.headline {
  text-wrap: balance;
}

.description {
  text-wrap: pretty;
}
```



<template v-slot:right>
<div class="max-w-xs">

<h2 class="text-3xl leading-tight mb-4 border-b-2 border-gray-300 pb-2" style="text-align: justify;">
This is a long headline that would normally wrap awkwardly using text-wrap: justify
</h2>
<h2 class="text-3xl leading-tight mb-4 border-b-2 border-gray-300 pb-2" style="text-wrap: balance;">
This is a long headline that would normally wrap awkwardly.
</h2>
<p class="leading-relaxed m-0" style="text-wrap: pretty;">
This paragraph uses text-wrap: pretty for improved readability and better line breaks that avoid orphans and widows.
</p>
</div>
</template>
