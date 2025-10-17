---
transition: view-transition
---

# Custom Properties {.inline-block.view-transition-title}

The `custom-properties` property is a CSS property that allows you to define custom properties.

Syntax

```css
custom-properties: --primary-color: #000;
```

Baseline

<BaselineChecker feature-name="custom-properties" />


---
layout: two-cols

# the web page source
url: /examples/variable.html

# a custom class name to the content
class: my-cool-content-on-the-left
---

## Custom Properties {.inline-block.view-transition-title}

Also known as CSS Variables.

###  Usage

```css {*|2|6|*}
:root {
  --primary-color: #000;
}

.container {
  background-color: var(--primary-color);
}
```
