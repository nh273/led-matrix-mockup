import { QueueWithFade } from "../helpers/FadeQueue";

const FRAME_RATE = 30; // In Hz
const FADE = 250; // In milliseconds

function randomBlink() {
  /* Return a single random LED with random color */
  const i = Math.floor(Math.random() * 32 * 8);
  let rgb = Array(3);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 256);
  }
  return [i, rgb];
}

let q = new QueueWithFade(FRAME_RATE, FADE);

export function loop() {
  q.push(randomBlink());
  return q.step();
}
