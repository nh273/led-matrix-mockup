import * as p5 from "p5";
import { loop } from "./animations/mg";

let s = (sk) => {
  const w = 32;
  const h = 8;
  const dim = 35; // dimension of a square (incl. padding)
  const pad = 5;
  const side = dim - pad * 2; // dim of a LED (excl. padding)

  sk.setup = () => {
    sk.createCanvas(w * dim, h * dim);
    sk.setFrameRate(30); // set draw() call rate (per sec)
  };

  sk.draw = () => {
    setupLEDs();
    const ledsToTurn = loop();
    for (let [i, color] of ledsToTurn) {
      turnLed(i, color);
    }
    sk.fill("white");
  };

  function _boustro(i, j) {
    /* Given row i & column j, return x & y coords assuming a
    boustrophedon layout starting from top left & beginning with going down
    the column */

    // LEDs going down first
    // i = row number, j = col number

    const square_x = j * dim;
    const square_y = j % 2 ? i * dim : (h - i - 1) * dim;

    return { square_x: square_x, square_y: square_y };
  }

  function setupLEDs() {
    /* Set up a matrix of 32x8 square LEDs
    In boustrophedon manner */
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        const { square_x, square_y } = _boustro(i, j);
        sk.square(square_x, square_y, side);
      }
    }
  }

  function turnLed(index, color) {
    /* Turn on LED index with color (R, G, B)
    Designed to closely mimic how Arduino FastLED library controls LEDs*/
    sk.fill(...color);
    const i = Math.floor(index / w); // Row number is index / n rows
    const j = index % w; // Col number is the remainder of index / n rows
    const { square_x, square_y } = _boustro(i, j);
    sk.square(square_x, square_y, side - 1);
  }
};

const base = new p5(s);
