import { patterns } from "../params/patterns";
import * as d3 from "d3";

export function createLoader() {
  const buttonArea = document.createElement("div");
  document.body.appendChild(buttonArea);
  for (let patt of patterns) {
    let butt = document.createElement("button");
    butt.class = "pattern-load-button";
    butt.value = patt.pattern;
    let buttText = document.createTextNode(patt.name);
    buttonArea.appendChild(butt);
    butt.appendChild(buttText);

    butt.addEventListener("click", (e) => {
      let arr = e.target.value.split(",");
      handleLoaderButtonClick(arr);
    });
  }
}

function handleLoaderButtonClick(pattern) {
  let squares = document
    .getElementById("d3-div")
    .getElementsByClassName("design-square");

  for (let p of pattern) {
    squares[p].class = "design-square filled";
    squares[p].querySelector("rect").setAttribute("fill", "blue");
  }
}
