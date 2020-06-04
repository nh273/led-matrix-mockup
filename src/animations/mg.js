import { mg } from "../params/patterns";
import { decompress } from "../helpers/compact";

export function loop() {
  // prettier-ignore
  let arr = new Array(32 * 8);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  for (let filled of mg) {
    arr[filled] = 1;
  }
  return decompress(arr);
}
