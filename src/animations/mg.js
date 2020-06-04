import { filledMg } from "../params/patterns";
import { decompress } from "../helpers/compact";

export function loop() {
  // prettier-ignore
  const patt = [66, 67, 68, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 107, 108, 109, 114, 115, 116, 144, 145, 150, 151, 152, 153, 154, 157, 158, 159, 161, 162, 163, 164, 165, 166, 170, 171, 172, 173, 177, 178, 179, 180, 181, 185, 186, 187, 189, 190, 191, 192, 193, 198, 199]
  let arr = new Array(32 * 8);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  for (let filled of patt) {
    arr[filled] = 1;
  }
  return decompress(arr);
}
