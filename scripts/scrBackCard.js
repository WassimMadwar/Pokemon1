
async function loadDataAndShow() {
  await fetchPokemons(currentOffset);
  currentOffset += limit;

  if (pokemonsList.length > 0) {
    const preview = getPreviewContainer(pokemonsList[3]);
    document.body.appendChild(preview); 
  } else {
    console.log("المصفوفة لسه فاضية، استنى شوي");
  }
}


loadDataAndShow();


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
  const divFullInfo = createInfoBackCard(PokemonData);
  const divNavig = createNavigCard(PokemonData);
  divMainCard.append(divFullInfo, divNavig);
  return divMainCard;
}

function renderCurrentImage(srcImg, idImg) {
  const divImg = document.createElement("div");
  const imgBig = document.createElement("img");
  imgBig.id = "currentImg";
  imgBig.classList.add("previewImg");
  imgBig.alt = `Pokemon image ${idImg}`;
  imgBig.src = srcImg;
  divImg.append(imgBig);
  return divImg;
}
