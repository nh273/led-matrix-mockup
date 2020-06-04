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

  function _boustro(index) {
    /* Given index, return row & col i & j coords assuming a
    boustrophedon layout starting from top left & beginning with going down
    the column.  */

    // LEDs going down first
    // i = row number, j = col number

    const j = Math.floor(index / h); // col index = index / number of rows

    // If it's columns 0, 2, 4, etc then the order is normal (top to bottom)
    // Then row number is index
    // else the order is reversed (bottom to top)
    const rem = index % h;
    const i = j % 2 ? h - rem - 1 : rem;

    return { i: i, j: j };
  }

  function setupLEDs() {
    /* Set up a matrix of 32x8 square LEDs
    We don't care that it's in boustro at this point */
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        sk.square(i * dim, j * dim, side);
      }
    }
  }

  function turnLed(index, color) {
    /* Turn on LED index with color (R, G, B)
    Designed to closely mimic how Arduino FastLED library controls LEDs*/
    sk.fill(...color);
    const { i, j } = _boustro(index);
    //console.log(index, i, j);
    sk.square(j * dim, i * dim, side - 1);
  }
};

const base = new p5(s);
