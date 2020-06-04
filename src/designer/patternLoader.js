import { patterns } from "../params/patterns";
import { lightBlue } from "../helpers/helpers";

export function createLoader(callback) {
  /* Create one button to load each pattern that is imported */
  const buttonArea = document.createElement("div");
  buttonArea.id = "pattern-load-button-area";
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
      arr = arr.map((elem) => +elem);
      handleLoaderButtonClick(arr);
      callback(arr);
    });
  }
}

function handleLoaderButtonClick(pattern) {
  let squares = document
    .getElementById("d3-div")
    .getElementsByClassName("design-square");

  for (let p of pattern) {
    squares[p].setAttribute("class", "design-square filled");
    squares[p].querySelector("rect").setAttribute("fill", "blue");
  }
}

export function createClear(callback) {
  /* Create a button to clear all the design squares */
  let buttArea = document.getElementById("pattern-load-button-area");
  let butt = document.createElement("button");
  butt.id = "clear-button";
  buttArea.appendChild(butt);

  let buttText = document.createTextNode("clear");
  butt.appendChild(buttText);

  butt.addEventListener("click", () => clear(callback));
}

function clear(callback) {
  let squares = document
    .getElementById("d3-div")
    .getElementsByClassName("design-square");

  for (let sq of squares) {
    sq.setAttribute("class", "design-square unfilled");
    sq.querySelector("rect").setAttribute("fill", lightBlue);
  }

  // callback to clear the array text
  callback();
}
