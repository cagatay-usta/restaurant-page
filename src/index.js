import bgimage from "./kopernikbg.jpeg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "hello world!!!";

  const image = new Image();
  image.src = bgimage;
  image.height = 300;

  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
