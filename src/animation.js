const FRAME_RATE = 30; // In Hz
const FADE = 250; // In milliseconds
let loopWithFade = Array(Math.floor(FRAME_RATE / (1000 / FADE)));

function randomBlink() {
  /* Return a single random LED with random color */
  const i = Math.floor(Math.random() * 32 * 8);
  let rgb = Array(3);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 256);
  }
  return [i, rgb];
}

export function loop() {
  for (let i = 0; i < loopWithFade.length; i++) {
    if (!loopWithFade[i]) {
      loopWithFade[i] = [0, "white"];
    }
  }
  loopWithFade.shift();
  loopWithFade.push(randomBlink());
  return loopWithFade;
}
