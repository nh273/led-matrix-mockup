Attempting to mock up a 32x8 NeoPixel matrix using P5.js, trying to stay close to the function signatures of FastLED library.

Do to the quirks of P5.js, it's far simpler to treat the `draw()` method inside `FastLED.js` as the main event loop.

`draw` is a perpetual loop that gets called every frame, it would call on the `loop()` method in `animation.js` that mimics an Arduino sketch's loop.

`loop()` here is not a void method but will instead return as list of `{i, color}` of the LEDs index i & color (RGB) for which to draw.
