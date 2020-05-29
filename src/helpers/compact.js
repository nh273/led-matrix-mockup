/* Decompress compact representation of LED arrays into FastLED readable form */

const colorMap = { 0: [0, 0, 0], 1: [0, 255, 0] };

export function decompress(pattern) {
  let res = Array(pattern.length);
  for (let i = 0; i < pattern.length; i++) {
    const color = colorMap[pattern[i]];
    res[i] = [i, color];
  }
  return res;
}
