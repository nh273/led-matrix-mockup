import { filledMg } from "../params/patterns";
import { decompress } from "../helpers/compact";

export function loop() {
  let arr = [];
  for (let i in filledMg) {
    if (filledMg[i] === 1) {
      arr.push(+i);
    }
  }
  return decompress(filledMg);
}
