const wrapper = document.createElement("div");
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.height = "100dvh";

document.body.append(wrapper);
const cards = [];

wrapper.style.display = "flex";
wrapper.style.gap = "24px";
wrapper.style.padding = "60px";

let firstCard = document.createElement("div");
let secondCard = document.createElement("div");
let thirdCard = document.createElement("div");
firstCard.className = "card";
secondCard.className = "card";
thirdCard.className = "card";
cards.push(firstCard, secondCard, thirdCard);

console.log(cards);
cards.forEach((card) => {
  card.style.border = "2px solid black";
  card.style.borderRadius = "4px";
  card.style.padding = "24px 16px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
});

const createCard = (content) => {
  let card = document.createElement("div");
  card.className = "card";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.gap = "16px";
  card.style.fontFamily = "sans-serif";

  let firstDiv = document.createElement("div");
  let secondDiv = document.createElement("div");
  let thirdDiv = document.createElement("div");
  let fourthDiv = document.createElement("div");

  secondDiv.style.fontFamily = "sans-serif";
  secondDiv.style.fontWeight = "900";
  secondDiv.style.fontSize = "26px";

  firstDiv.innerHTML = `<i class="fa fa-twitter"></i>`;
  if (content == "twitter") {
    firstDiv.innerHTML = `<i class="fa fa-twitter"></i>`;
    secondDiv.textContent = "TWITTER";
  } else if (content == "instagram") {
    firstDiv.innerHTML = `<i class="fa fa-instagram"></i>`;
    secondDiv.textContent = "INSTAGRAM";
  } else if (content == "youtube") {
    firstDiv.innerHTML = `<i class="fa fa-youtube"></i>`;
    secondDiv.textContent = "YOUTUBE";
  }

  firstDiv.querySelector("i").style.fontSize = "42px";

  thirdDiv.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.";
  thirdDiv.style.textAlign = "center";

  fourthDiv.innerHTML = "<button>READ MORE</button>";
  fourthDiv.style.width = "100%";
  fourthDiv.querySelector("button").style.backgroundColor = "black";
  fourthDiv.querySelector("button").style.borderRadius = "32px";
  fourthDiv.querySelector("button").style.padding = "16px";
  fourthDiv.querySelector("button").style.width = "100%";
  fourthDiv.querySelector("button").style.outline = "none";
  fourthDiv.querySelector("button").style.border = "none";
  fourthDiv.querySelector("button").style.color = "white";

  card.append(secondDiv);
  card.append(thirdDiv);
  card.append(fourthDiv);

  card.style.border = "2px solid black";
  card.style.borderRadius = "4px";
  card.style.padding = "24px 16px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";

  wrapper.append(card);
};
createCard("twitter");
createCard("instagram");
createCard("youtube");
