function injectCSS(css) {
  if (!document.querySelector("#carousel-styles")) {
    const style = document.createElement("style");
    style.id = "carousel-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }
}

const carouselCSS = `
:root {
	--slide-width: 30em;
	--slide-height: 20em;
	--slide-transition-duration: 800ms;
	--slide-transition-easing: ease;
}

.slider-btn-prev,
.slider-btn-next {
	border: none;
	background: none;
	color: white;
	cursor: pointer;
	border-radius: 50%;
	padding: 12px;
	transition: background 0.3s ease;
}

.slider-btn-prev:focus,
.slider-btn-next:focus {
	outline: none;
	border: none;
}

.slider {
	width: calc(3 * var(--slide-width));
	height: calc(1 * var(--slide-height));
	display: flex;
	align-items: center;
	transform-style: preserve-3d;
	pointer-events: none;
}

.slider-btn {
	--size: 40px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	opacity: 0.7;
	transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
	z-index: 999;
	display: none;
}

.slides-wrapper {
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	transform-style: preserve-3d;
	pointer-events: none;
}

.slides {
	width: 100%;
	height: 100%;
	pointer-events: none;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transform-style: preserve-3d;
	perspective: 1200px;
}

.slide {
	--slide-tx: 0px;
	--slide-ty: 0vh;
	--padding: 0px;
	--offset: 0;

	width: var(--slide-width);
	height: var(--slide-height);
	user-select: none;
	position: absolute;
	transform-style: preserve-3d;

	transform: translate3d(var(--slide-tx), var(--slide-ty), var(--slide-tz, 0))
		rotateY(var(--slide-rotY)) scale(var(--slide-scale));
	transition:
		transform var(--slide-transition-duration) var(--slide-transition-easing),
		opacity var(--slide-transition-duration) var(--slide-transition-easing);
}

.slide[data-current] {
	--slide-scale: 1;
	--slide-tz: 100px;
	--slide-tx: 0px;
	--slide-rotY: 0deg;
	pointer-events: auto;
	z-index: 30;
}

.slide[data-next] {
	--slide-tx: calc(1.2 * var(--slide-width));
	--slide-tz: -150px;
	--slide-rotY: -35deg;
	--slide-scale: 1.1;
	z-index: 20;
	pointer-events: auto;
	cursor: pointer;
}

.slide[data-previous] {
	--slide-tx: calc(-1.2 * var(--slide-width));
	--slide-tz: -150px;
	--slide-rotY: 35deg;
	--slide-scale: 1.1;
	z-index: 20;
	pointer-events: auto;
	cursor: pointer;
}

.slide:not([data-current]):not([data-next]):not([data-previous]) {
	--slide-scale: 0.7;
	--slide-tz: -300px;
	--slide-rotY: 0deg;
	pointer-events: none;
	z-index: 1;
	opacity: 0;
}

.slide[data-current] .slide-image {
	filter: brightness(1);
}

.slide:not([data-current]) .slide-image {
	filter: brightness(0.6);
}

.slide-inner {
	--rotX: 0;
	--rotY: 0;
	--bgPosX: 0%;
	--bgPosY: 0%;

	position: relative;
	left: calc(var(--padding) / 2);
	top: calc(var(--padding) / 2);
	width: calc(100% - var(--padding));
	height: calc(100% - var(--padding));
	transform-style: preserve-3d;
	transform: rotateX(var(--rotX)) rotateY(var(--rotY));
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.slide-image-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 12px;
}

.slide-image {
	width: 100%;
	height: 100%;
	position: relative;
	object-fit: cover;
	transform: scale(1) translate3d(var(--bgPosX), var(--bgPosY), 0);
	transition: filter var(--slide-transition-duration) var(--slide-transition-easing);
}

@media (max-width: 1610px) {
	:root {
		--slide-width: 25em;
		--slide-height: 15em;
	}
}

@media (max-width: 1300px) {
	:root {
		--slide-width: 22em;
		--slide-height: 15em;
	}

	.slider {
		width: calc(2.5 * var(--slide-width));
	}

	.slide[data-next] {
		--slide-tx: calc(1 * var(--slide-width));
		--slide-scale: 1;
		--slide-rotY: -25deg;
	}

	.slide[data-previous] {
		--slide-tx: calc(-1 * var(--slide-width));
		--slide-scale: 1;
		--slide-rotY: 25deg;
	}

	.slider-btn {
		--size: 35px;
		padding: 10px;
	}
}

@media (max-width: 970px) {
	:root {
		--slide-width: 18em;
		--slide-height: 12em;
	}

	.slider {
		width: calc(2 * var(--slide-width));
		height: calc(1.8 * var(--slide-height));
	}

	.slide[data-next] {
		--slide-tx: calc(0.8 * var(--slide-width));
		--slide-tz: -100px;
		--slide-rotY: -20deg;
		--slide-scale: 0.9;
	}

	.slide[data-previous] {
		--slide-tx: calc(-0.8 * var(--slide-width));
		--slide-tz: -100px;
		--slide-rotY: 20deg;
		--slide-scale: 0.9;
	}

	.slider-btn {
		--size: 32px;
		padding: 8px;
	}

	.slide-inner {
		border-radius: 8px;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
	}
}

@media (max-width: 680px) {
	:root {
		--slide-width: 16em;
		--slide-height: 11em;
	}

	.slider {
		width: calc(1.8 * var(--slide-width));
		height: calc(1.6 * var(--slide-height));
		padding: 0 10px;
	}

	.slide[data-current] {
		--slide-scale: 0.95;
		--slide-tz: 50px;
		--slide-scale: 1.2;
	}

	.slide[data-next] {
		--slide-tx: calc(0.6 * var(--slide-width));
		--slide-tz: -80px;
		--slide-rotY: -15deg;
		--slide-scale: 0.8;
		display: none;
	}

	.slide[data-previous] {
		--slide-tx: calc(-0.6 * var(--slide-width));
		--slide-tz: -80px;
		--slide-rotY: 15deg;
		--slide-scale: 0.8;
		display: none;
	}

	.slide:not([data-current]):not([data-next]):not([data-previous]) {
		--slide-scale: 0.6;
		--slide-tz: -200px;
	}

	.slider-btn {
		--size: 28px;
		padding: 6px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: block;
	}

	.slider-btn-prev {
		left: 5px;
	}

	.slider-btn-next {
		right: 5px;
	}

	.slide-inner {
		border-radius: 6px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.slides {
		perspective: 800px;
	}
}

@media (max-width: 470px) {
	:root {
		--slide-width: 12em;
		--slide-height: 8em;
	}

	.slider {
		width: calc(1.6 * var(--slide-width));
		padding: 0 5px;
	}

	.slide[data-next],
	.slide[data-previous] {
		--slide-scale: 0.7;
		--slide-rotY: 0deg;
		--slide-tz: -120px;
	}

	.slide[data-next] {
		--slide-tx: calc(0.5 * var(--slide-width));
	}

	.slide[data-previous] {
		--slide-tx: calc(-0.5 * var(--slide-width));
	}

	.slider-btn {
		--size: 24px;
		padding: 4px;
	}
}
`;

class CarouselBuilder {
  constructor(container) {
    this.container = container;
    this._options = {
      images: [],
      interval: 2000,
      autoPlay: true,
    };
  }

  setImages(images) {
    this._options.images = images;
    return this;
  }

  setInterval(ms) {
    this._options.interval = ms;
    return this;
  }

  setAutoPlay(flag) {
    this._options.autoPlay = flag;
    return this;
  }

  build() {
    return new Carousel(this.container, this._options);
  }
}

export default class Carousel {
  constructor(container, options) {
    this.container = container;
    this.options = Object.assign({ interval: 2000, autoPlay: true }, options);
    this.slides = [];
    this.current = 0;
    this.timer = null;

    injectCSS(carouselCSS);

    this._render();
    this._bindEvents();
    if (this.options.autoPlay) this.start();
  }

  static builder(container) {
    return new CarouselBuilder(container);
  }

  _render() {
    this.container.innerHTML = `
      <button class="slider-btn slider-btn-prev" aria-label="Previous">◀</button>
      <div class="slides-wrapper">
        <div class="slides"></div>
      </div>
      <button class="slider-btn slider-btn-next" aria-label="Next">▶</button>
    `;

    const slidesWrapper = this.container.querySelector(".slides");

    this.options.images.forEach((src, i) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      if (i === 0) slide.dataset.current = true;
      else if (i === 1) slide.dataset.next = true;
      else if (i === this.options.images.length - 1)
        slide.dataset.previous = true;

      slide.innerHTML = `
        <div class="slide-inner">
          <div class="slide-image-wrapper">
            <img src="${src}" alt="slide ${i}" class="slide-image"/>
          </div>
        </div>
      `;
      slidesWrapper.appendChild(slide);
      this.slides.push(slide);
    });
  }

  _bindEvents() {
    const prevBtn = this.container.querySelector(".slider-btn-prev");
    const nextBtn = this.container.querySelector(".slider-btn-next");
    const slidesWrapper = this.container.querySelector(".slides");

    prevBtn.addEventListener("click", () => this.prev());
    nextBtn.addEventListener("click", () => this.next());

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    });

    slidesWrapper.addEventListener("click", (e) => {
      const clickedSlide = e.target.closest(".slide");
      if (clickedSlide?.hasAttribute("data-next")) {
        this.next();
      } else if (clickedSlide?.hasAttribute("data-previous")) {
        this.prev();
      }
    });

    slidesWrapper.addEventListener("mouseover", () => this.stop());
    slidesWrapper.addEventListener("mouseleave", () => this.start(true));
  }

  _updateClasses() {
    this.slides.forEach((slide) => {
      delete slide.dataset.current;
      delete slide.dataset.next;
      delete slide.dataset.previous;
    });

    const total = this.slides.length;
    const prevIndex = (this.current - 1 + total) % total;
    const nextIndex = (this.current + 1) % total;

    this.slides[this.current].dataset.current = true;
    this.slides[prevIndex].dataset.previous = true;
    this.slides[nextIndex].dataset.next = true;
  }

  start(immediate = false) {
    if (!this.options.autoPlay) return;
    this.stop();
    if (immediate) {
      this.next();
    }

    if (this.options.autoPlay) {
      this.timer = setInterval(() => this.next(), this.options.interval);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
    this._updateClasses();
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    this._updateClasses();
  }
}
