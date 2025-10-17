---
transition: view-transition
layout: center
---

# Baseline vs Interop

## What's the difference? 

They're related terms in web standards, but they mean different things.

---

## Interop (Interoperability Project)

<div class="text-lg leading-relaxed">

**What it is:** A cross-browser collaboration (Chrome, Safari, Firefox) where vendors agree on yearly focus areas to improve web platform **interoperability**.

**Goal:** Make sure features work consistently across browsers.

**How it works:** 
- Each year they publish **Interop scores** for chosen features
- Track test pass rates in WPT (Web Platform Tests)
- Examples: CSS Grid, Flexbox, Container Queries, etc.

**Example:** *Interop 2024 includes subgrid, CSS nesting* → browsers work together to fix differences.

</div>

<div class="mt-8 p-4 bg-blue-100 rounded-lg text-blue-900">
Think of it as <strong>"active collaboration to fix gaps"</strong>
</div>

---

## Baseline

<div class="text-lg leading-relaxed">

**What it is:** A concept from web.dev/MDN that defines when a feature is **"safe to use broadly"** because it's supported in all **major browsers in their actively maintained versions.**

**Goal:** Give developers a clear signal of when they can rely on a feature without polyfills or fallback.

**Two levels:**
- **🆕 Newly available in Baseline** → Just reached cross-browser support
- **✅ Widely available in Baseline** → Has been broadly supported for at least 30 months

**Example:** *CSS Nesting entered Baseline Newly Available in 2023, and will move to Widely Available after enough time passes.*

</div>

<div class="mt-8 p-4 bg-green-100 rounded-lg text-green-900">
Think of it as <strong>"a snapshot of what's safe to use today"</strong>
</div>

---

## Key Difference

<div class="grid pt-10 grid-cols-2 gap-8 text-xl">

<div class="p-6 bg-blue-50 rounded-lg text-blue-800 ">
<h3 class="text-2xl font-bold mb-4">🤝 Interop</h3>
<p><strong>Vendor effort</strong></p>
<p class="text-lg mt-2">Browsers working together to <em>improve support</em></p>
</div>

<div class="p-6 bg-green-50 text-green-800 rounded-lg">
<h3 class="text-2xl font-bold  mb-4">📊 Baseline</h3>
<p><strong>Developer signal</strong></p>
<p class="text-lg mt-2">Telling you <em>which features are ready to rely on</em></p>
</div>

</div>

---

## Example Timeline

<div class="timeline text-lg">

**CSS Nesting Journey:**

1. **2022** → Featured in **Interop 2022** focus areas
2. **2023** → All major browsers implement support  
3. **2023** → Enters **Baseline "Newly Available"**
4. **2025** → Will move to **Baseline "Widely Available"** (after 30+ months)

</div>

<div class="mt-8 p-4 bg-yellow-100 rounded-lg text-yellow-900">
<strong>The Connection:</strong> Interop drives the work → Baseline signals when it's ready for developers
</div>

---
layout: iframe
url: https://sandeep.ramgolam.com/blog/introducing-baseline-banner
---