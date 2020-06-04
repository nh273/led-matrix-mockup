export const w = 32;
export const h = 8;
export const dim = 35; // dimension of a square (incl. padding)
export const pad = 5;
export const side = dim - pad * 2; // dim of a LED (excl. padding)

export function _boustro(index) {
  /* Given index, return row & col i & j coords assuming a
    boustrophedon layout starting from top left & beginning with going down
    the column.  */

  // LEDs going down first
  // i = row number, j = col number

  const j = Math.floor(index / h); // col index = index / number of rows

  // If it's columns 0, 2, 4, etc then the order is normal (top to bottom)
  // Then row number is index
  // else the order is reversed (bottom to top)
  const rem = index % h;
  const i = j % 2 ? h - rem - 1 : rem;

  return { i: i, j: j };
}
