---
# Custom colorful layered theme
theme: default
layout: intro
# Enable PDF download
download: true
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: CSS is FUN
info: |
  ## CSS is fun in 2025
  
  By [Sandeep Ramgolam](https://github.com/MrSunshyne)
  Blog at [sandeep.ramgolam.com](https://sandeep.ramgolam.com)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: view-transition
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
---

# Hi



<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
src: ./pages/2025-10-18/test-theme.md
hide: false
---

---
src: ./pages/2025-10-18/test-two-cols.md
hide: false
---

---
src: ./pages/2025-10-18/test-image-right.md
hide: false
---

---
src: ./pages/2025-10-18/test-center.md
hide: false
---

---
src: ./pages/intro/qr.md
hide: false
---

---
src: ./pages/intro/topic.md
hide: false
---

---
src: ./pages/intro/speaker-introduction.md
hide: false
---

---
src: ./pages/intro/speaker-find-me.md
hide: false
---

---
src: ./pages/content/plan.md
hide: true
---

---
src: ./pages/intro/icebreaker.md
hide: false
---

---
src: ./pages/content/grid.md
hide: false
---

---
src: ./pages/content/variables.md
hide: false
---

---
src: ./pages/content/baseline.md
hide: false
---

---
src: ./pages/content/subgrid.md
hide: false
---

---
src: ./pages/content/nesting.md
hide: false
---

---
src: ./pages/content/aspect-ratio.md
hide: false
---

---
src: ./pages/content/accent-color.md
hide: false
---

---
src: ./pages/content/text-wrap-balance.md
hide: false
---

---
src: ./pages/content/container-queries.md
hide: false
---

---
src: ./pages/content/has-selector.md
hide: false
---

---
src: ./pages/content/scope.md
hide: false
---

---
src: ./pages/content/view-transitions.md
hide: false
---

---
src: ./pages/content/scroll-animations.md
hide: false
---

---
src: ./pages/content/popover.md
hide: false
---

---
src: ./pages/content/invoker.md
hide: false
---

---
src: ./pages/content/math-functions.md
hide: false
---

---
src: ./pages/content/sibling-functions.md
hide: false
---


---
src: ./pages/content/if.md
hide: false
---

---
src: ./pages/content/if-state-based.md
hide: false
---

---
src: ./pages/content/random.md
hide: false
---

---
src: ./pages/content/anchor-positioning.md
hide: false
---

---
src: ./pages/content/custom-functions.md
hide: false
---

---
src: ./pages/content/thank-you.md
hide: false
---