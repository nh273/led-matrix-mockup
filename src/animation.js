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

class QueueWithFade {
  /* A Queue that you can push LEDs to and it will handle the fading
  At each call of loop(), (a) new LED(s) can be pushed to the queue,
  and the method step() should be called once to step the queue forward */
  constructor() {
    // The longer the queue, the longer each LED will stay on
    this.queue = Array(Math.floor(FRAME_RATE / (1000 / FADE)));
  }

  push(newLed) {
    this.queue.push(newLed);
  }

  _fadeColor(c) {
    const fadeStep = 20;
    return Math.max(0, c - fadeStep);
  }

  fade(led) {
    let [i, color] = led;
    return [i, color.map((c) => this._fadeColor(c))];
  }

  step() {
    this.queue.shift();
    for (let i = 0; i < this.queue.length; i++) {
      if (!this.queue[i]) {
        this.queue[i] = [0, [255, 255, 255]];
      } else {
        this.queue[i] = this.fade(this.queue[i]);
      }
    }
    return this.queue;
  }
}

let q = new QueueWithFade();

export function loop() {
  q.push(randomBlink());
  return q.step();
}
