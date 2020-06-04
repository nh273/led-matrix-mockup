import * as d3 from "d3";
import { w, h, dim, pad, side, _boustro } from "../helpers/helpers";
import { sortBy } from "async";

console.log("loading module");

export function main() {
  const lightBlue = "#B5D3E7";
  const textAreaH = 150;
  let svg = d3
    .select("#d3-div")
    .append("svg")
    .attr("width", w * dim)
    .attr("height", h * dim + textAreaH);

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

  let selectArr = [];

  function handleClick(d, i) {
    let selection = d3.select(this);
    let selectSq = selection.select("rect");
    if (selection.attr("class") === "design-square unfilled") {
      // toggle to filled
      selectSq.attr("fill", "blue");
      selection.attr("class", "design-square filled");
      selectArr.push(d);
      redrawArr(selectArr);
    } else if (selection.attr("class") === "design-square filled") {
      // toggle back to unfilled
      selectSq.attr("fill", lightBlue);
      selection.attr("class", "design-square unfilled");
      selectArr = selectArr.filter((item) => item !== d);
      redrawArr(selectArr);
    }
  }

  grid.on("click", handleClick);

  function redrawArr(selectArr) {
    selectArr.sort(d3.ascending);
    svg.select("#selectArr").remove();

    svg
      .append("text")
      .attr("id", "selectArr")
      .attr("y", dim * h + 20)
      .attr("x", 0)
      .text("{" + selectArr + "}")
      .attr("font-size", 20)
      .attr("fill", "black")
      .attr("font-weight", 700);
  }
}
