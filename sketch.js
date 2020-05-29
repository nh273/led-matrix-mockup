const w = 32;
const h = 8;
const dim = 50; // dimension of a square (incl. padding)
const pad = 5;
const side = dim - pad * 2; // dim of a LED (excl. padding)

function setup() {
  createCanvas(w * dim, h * dim);
}

function draw() {
  setupLEDs();
  leds(32, (255, 0, 0));
}

function setupLEDs() {
  /* Set up a matrix of 32x8 square LEDs */
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      square(i * dim, j * dim, side);
    }
  }
}

function leds(index, color) {
  /* Turn on LED index with color (R, G, B)
  Designed to closely mimic how Arduino FastLED library controls LEDs*/
  fill(color);
  const j = Math.floor(index / w); // Row number is index / n rows
  const i = index % w; // Col number is the remainder of index / n rows
  square(i * dim, j * dim, side - 1);
  fill((255, 255, 255));
}
