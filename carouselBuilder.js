import Carousel from "./carousel";

export default class CarouselBuilder {
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
