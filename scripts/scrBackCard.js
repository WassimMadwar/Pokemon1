function getPreviewContainer(PokemonData) {
  const container = document.createElement("div");
  container.id = "containerCard";
  container.classList.add("PreviewContainer");
  const divBigImg = renderCurrentImage(PokemonData.image, PokemonData.id);
  const divMainCard = createMainCard(PokemonData);
  container.append(divBigImg, divMainCard);
  return container;
}

function createMainCard(PokemonData) {
  const divMainCard = document.createElement("div");
  divMainCard.className = "MainCard";
  divMainCard.id = "mainCard";
  const divFullInfo = createInfoBackCard(PokemonData);
  const divNavig = createNavigCard();
  divMainCard.append(divFullInfo, divNavig);
  return divMainCard;
}

function renderCurrentImage(srcImg, idImg) {
  const divImg = document.createElement("div");
  const imgBig = document.createElement("img");
  imgBig.id = "currentImg";
  imgBig.innerHTML = "";
  divImg.classList.add("divImg");
  imgBig.classList.add("previewImg");
  imgBig.alt = `Pokemon image ${idImg}`;
  imgBig.src = srcImg;
  divImg.append(imgBig);
  return divImg;
}

function loadNewObjDate(newPokIndex) {
  const newPokData = pokemonsList[newPokIndex];
  const newPokImage = newPokData.image;
  const newPokID = newPokData.id;
  loadNewImgDate(newPokImage, newPokID);
  loadNewInfoBackCard(newPokData);
}

function loadNewImgDate(newPokImage, newPokID) {
  const imgBig = document.getElementById("currentImg");
  imgBig.src = newPokImage;
  imgBig.alt = `Pokemon image ${newPokID}`;
}
