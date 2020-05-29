import * as p5 from "p5";

let s = (sk) => {
  const w = 32;
  const h = 8;
  const dim = 50; // dimension of a square (incl. padding)
  const pad = 5;
  const side = dim - pad * 2; // dim of a LED (excl. padding)

  sk.setup = () => {
    sk.createCanvas(w * dim, h * dim);
  };

  sk.draw = () => {
    setupLEDs();
  };

  function setupLEDs() {
    /* Set up a matrix of 32x8 square LEDs */
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        sk.square(i * dim, j * dim, side);
      }
    }
  }
};

export function leds(index, color) {
  /* Turn on LED index with color (R, G, B)
  Designed to closely mimic how Arduino FastLED library controls LEDs*/
  sk.fill(color);
  const j = Math.floor(index / w); // Row number is index / n rows
  const i = index % w; // Col number is the remainder of index / n rows
  sk.square(i * dim, j * dim, side - 1);
  sk.fill((255, 255, 255));
}

const P5 = new p5(s);
