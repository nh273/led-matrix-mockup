import { patterns } from "../params/patterns";
import { decompress } from "../helpers/compact";

let q = [];
for (let patt of patterns) {
  let arr = new Array(32 * 8);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  for (let filled of patt.pattern) {
    arr[filled] = 1;
  }
  q.push(decompress(arr));
}

let i = 0;
export function loop() {
  if (++i < q.length) {
    return q[i];
  } else {
    i = 0;
    return q[i];
  }
}
