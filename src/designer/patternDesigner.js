import * as d3 from "d3";
import { w, h, dim, pad, side, _boustro } from "../helpers/helpers";

console.log("loading module");

export function main() {
  let svg = d3
    .select("#d3-div")
    .append("svg")
    .attr("width", () => {
      console.log("create canvas");
      return w * dim;
    })
    .attr("height", h * dim);

  let grid = svg
    .selectAll(".design-square")
    .data(d3.range(w * h))
    .enter()
    .append("rect")
    .attr("class", "design-square")
    .attr("x", (d) => {
      return _boustro(d).j * dim;
    })
    .attr("y", (d) => {
      return _boustro(d).i * dim;
    })
    .attr("width", side)
    .attr("height", side)
    .attr("fill", "blue")
    .attr("stroke", "black");
}
