import { filledMg } from "../params/patterns";
import { decompress } from "../helpers/compact";

export function loop() {
  return decompress(filledMg);
}
