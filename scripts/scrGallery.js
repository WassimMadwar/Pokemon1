function createGallery() {
  const gallery = document.createElement("section");
  gallery.classList.add("galleryContainer");
  gallery.id = "secGallery";
  pokemonsList.forEach((PokemonData, i) => {
    const divCard = createFaceCard(PokemonData, i);
    gallery.appendChild(divCard);
  });

  return gallery;
}

function createFaceCard(PokemonData, i) {
  const divCardPok = document.createElement("div");
  divCardPok.classList.add("cardFace");
  const divImgPok = renderImageFaceCard(PokemonData, i);
  const divInfoPok = createInfoFaceCard(PokemonData);
  divCardPok.append(divImgPok, divInfoPok);
  return divCardPok;
}

function renderImageFaceCard(PokemonData, i) {
  const divImg = document.createElement("div");

  const img = document.createElement("img");
  img.classList.add("peck_img");
  img.src = PokemonData.image;
  img.alt = `Foto Nr.${PokemonData.id}`;

  img.title = "Click to see Preview";
  img.onclick = () => openPreview(PokemonData, i);
  divImg.appendChild(img);
  return divImg;
}

function createInfoFaceCard(PokemonData) {
  const divInfoPok = document.createElement("div");
  divInfoPok.classList.add("cardFaceInfo");
  const spnName = getNameSpan(PokemonData.name);
  const spnType = getTypeSpan(PokemonData.types[0]);
  divInfoPok.append(spnName, spnType);
  return divInfoPok;
}

function getNameSpan(nam) {
  const spnName = document.createElement("span");
  spnName.textContent = capitalize(nam);
  return spnName;
}

function getTypeSpan(typ) {
  const spnType = document.createElement("span");
  spnType.textContent = capitalize(typ);
  spnType.classList.add("spnType");
  spnType.classList.add(getTypeSpanBGC(typ));

  return spnType;
}

function openPreview(PokemonData, i) {
  currentPokIndex = i;
  const boxDialog = document.createElement("dialog");
  boxDialog.id = "dialog5";
  boxDialog.classList.add("box_privew");
  const container = getPreviewContainer(PokemonData);
  boxDialog.appendChild(container);
  document.body.appendChild(boxDialog);
  UpdateObjPok();
  boxDialog.showModal();
  document.body.style.overflow = "hidden";
  backToGallery();
}

function createLoadingNewPokemons() {
  const content = createOverlay();
  showProcessingSpinner(content);
}

function createOverlay() {
  const dialog = document.getElementById("dialog5");
  if (!dialog) return;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.id = "divOverlay";

  const content = document.createElement("div");
  content.className = "overlayContent";

  overlay.appendChild(content);
  dialog.appendChild(overlay);

  return content;
}

function showProcessingSpinner(content) {
  const spinner = document.createElement("div");
  spinner.className = "spinner";

  const text = document.createElement("p");
  text.textContent = "Please wait, new Pokemon are being added....";
  loadMorePokemons();
  content.append(spinner, text);
  setTimeout(() => {
    spinner.remove();
    text.remove();
    afterLoadingNewPokemons();
  }, 3000);
}

function afterLoadingNewPokemons() {
  const divOver = document.getElementById("divOverlay");
  divOver.remove();
  currentPokIndex++;
  loadNewObjDate(currentPokIndex);
}

async function loadMorePokemons() {
  const newPokemons = await loadMoreData();
  const gallery = document.getElementById("secGallery");
  newPokemons.forEach((PokemonData, i) => {
    const divCard = createFaceCard(
      PokemonData,
      pokemonsList.length - newPokemons.length + i
    );
    console.log(i);
    gallery.appendChild(divCard);
  });
}
