function createMenu() {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const card1 = document.createElement("div");
  card1.classList.add("card");
  card1.textContent = "Galaxy Pizza";

  const card2 = document.createElement("div");
  card2.classList.add("card");
  card2.textContent = "Promotion Pizza";

  const card3 = document.createElement("div");
  card3.classList.add("card");
  card3.textContent = "Half-eaten Pizza";

  const card4 = document.createElement("div");
  card4.classList.add("card");
  card4.textContent = "Dragon Pizza";

  cardContainer.appendChild(card1);
  cardContainer.appendChild(card2);
  cardContainer.appendChild(card3);
  cardContainer.appendChild(card4);

  return cardContainer;
}

export default createMenu;
