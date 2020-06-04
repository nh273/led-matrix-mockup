import * as d3 from "d3";
import { w, h, dim, pad, side, _boustro } from "../helpers/helpers";

console.log("loading module");

export function main() {
  const lightBlue = "#B5D3E7";
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
    .append("g")
    .attr("class", "design-square unfilled");

  grid
    .append("rect")
    .attr("x", (d) => {
      return _boustro(d).j * dim;
    })
    .attr("y", (d) => {
      return _boustro(d).i * dim;
    })
    .attr("width", side)
    .attr("height", side)
    .attr("fill", lightBlue)
    .attr("stroke", "black");

  grid
    .append("text")
    .text((d, i) => i)
    .attr("x", (d) => {
      return _boustro(d).j * dim + side / 2;
    })
    .attr("y", (d) => {
      return _boustro(d).i * dim + dim / 2;
    })
    .style("text-anchor", "middle")
    .attr("fill", "orange")
    .attr("font-size", 13.5)
    .attr("font-weight", 700);

  function handleClick(d, i) {
    let selection = d3.select(this);
    let selectSq = selection.select("rect");
    if (selection.attr("class") === "design-square unfilled") {
      // toggle to filled
      selectSq.attr("fill", "blue");
      selection.attr("class", "design-square filled");
    } else if (selection.attr("class") === "design-square filled") {
      // toggle back to unfilled
      selectSq.attr("fill", lightBlue);
      selection.attr("class", "design-square unfilled");
    }
  }

  grid.on("click", handleClick);
}
