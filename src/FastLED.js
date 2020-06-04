import * as p5 from "p5";
import { w, h, dim, pad, side, _boustro } from "./helpers/helpers";
import { loop } from "./animations/solidPattern";

let s = (sk) => {
  sk.setup = () => {
    let canvas = sk.createCanvas(w * dim, h * dim);
    canvas.parent("p5-div");
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
