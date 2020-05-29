export class QueueWithFade {
  /* A Queue that you can push LEDs to and it will handle the fading
    At each call of loop(), (a) new LED(s) can be pushed to the queue,
    and the method step() should be called once to step the queue forward */
  constructor(frame_rate = 30, fade = 250) {
    // The longer the queue, the longer each LED will stay on
    this.queue = Array(Math.floor(frame_rate / (1000 / fade)));
  }

  push(newLed) {
    this.queue.push(newLed);
  }

  _fadeColor(c) {
    const fadeStep = 10; // MAGIC NUMBER don't set too large or color will dull
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
