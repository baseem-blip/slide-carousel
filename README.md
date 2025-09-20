# slide-carousel

**slide-carousel** is a lightweight and responsive image slider built entirely with **vanilla JavaScript** — no dependencies required.

### Features:

- **Pure JavaScript** — built without frameworks.
- **Automatic CSS injection** — no external stylesheet needed.
- **Auto Slide** — slides move automatically.
- **Customizable Slide Interval** — adjust autoplay speed.
- **Next & Previous Controls** — navigate slides manually.
- **Responsive Design** — adapts to desktop & mobile screens.
- **Touch-Friendly** — prev/next buttons visible on mobile screens.
- **Unlimited Images** — easily pass any number of images.

With simple setup, `slide-carousel` makes it easy to add a smooth, customizable slider to your project.

---

## Installation

```bash
npm install slide-carousel
```

## Usage

### Add a container in your HTML

```html
<div class="slider" id="carousel"></div>
```

### Import the carousel

```js
import Carousel from "slide-carousel";
```

### Initialize the carousel

```js
Carousel.builder(document.querySelector("#carousel"))
  .setImages([
    "https://placehold.co/1920x1080?text=1",
    "https://placehold.co/1920x1080?text=2",
    "https://placehold.co/1920x1080?text=3",
  ])
  .setInterval(2000)
  .setAutoPlay(false)
  .build();
```

### Default Values

| Method               | Description                          | Default |
| -------------------- | ------------------------------------ | ------- |
| `.setImages([...])`  | Array of image URLs for the carousel | `[]`    |
| `.setInterval(ms)`   | Slide interval in milliseconds       | `2000`  |
| `.setAutoPlay(bool)` | Enable/disable automatic sliding     | `true`  |
