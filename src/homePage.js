import delivery from "./kopernikdelivery.png";

function createHomePage() {
  const container = document.createElement("div");
  container.classList.add("about-container");

  const heading = document.createElement("h2");
  heading.textContent = "Hottest Pizza in the Galaxy!";
  container.appendChild(heading);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image");

  const img = new Image();
  img.src = delivery;
  img.id = "delivery";
  imgContainer.appendChild(img);
  container.appendChild(imgContainer);
  return container;
}

export default createHomePage;
