import "./FastLED";
import * as designer from "./designer/patternDesigner";
import "./style/main.css";

function HelloWorld() {
  // "title" div with a h1 Title
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-div";
  document.body.appendChild(titleDiv);

  // Add title to title div
  const h1 = document.createElement("h1");
  titleDiv.appendChild(h1);
  const h1Text = document.createTextNode("LED Matrix mock-up demo");
  h1.appendChild(h1Text);

  const p5div = document.createElement("div");
  p5div.setAttribute("id", "p5-div");
  document.body.appendChild(p5div);

  const designDiv = document.createElement("div");
  designDiv.id = "design-div";
  document.body.appendChild(designDiv);

  const prompt = document.createTextNode("Design the pattern here");
  const h2 = document.createElement("h2");
  designDiv.appendChild(h2);
  h2.appendChild(prompt);

  const d3div = document.createElement("div");
  d3div.setAttribute("id", "d3-div");
  document.body.appendChild(d3div);

  const arrArea = document.createElement("div");
  arrArea.id = "selection-array-area";
  document.body.appendChild(arrArea);

  designer.main();
}

HelloWorld();
