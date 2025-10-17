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
title: Coders.mu Organizer Slides
info: |
  ## Coders.mu Organizer Slides
  
  By [Sandeep Ramgolam](https://github.com/MrSunshyne)
  Community at [coders.mu](https://coders.mu)
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

# Coders.mu Deck



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
src: ./pages/intro/qr.md
hide: false
---


---
src: ./pages/generated/sponsor.md
hide: false
---

---
src: ./pages/meetups/66/community.md
---

---
src: ./pages/meetups/66/organizers.md
---

---
src: ./pages/meetups/66/gallery.md
---

---
layout: intro
---

# Today's Agenda

<span class="font-bold text-theme-orange">Talks</span> > Lunch break > Group photo > <span class="font-bold text-theme-orange">Talks</span> > Quiz

---
src: ./pages/generated/speakers/speaker-1.md
hide: false
---

---
src: ./pages/generated/speakers/speaker-2.md
hide: false
---

---
src: ./pages/generated/speakers/speaker-3.md
hide: false
---

---
src: ./pages/generated/speakers/speaker-4.md
hide: false
---

---
src: ./pages/generated/speakers/speaker-5.md
hide: false
---

---
src: ./pages/meetups/66/vibe.md
hide: false
---

