function createGallery(pokemons) {
  const gallery = document.createElement("section");
  gallery.innerHTML = "";
  gallery.classList.add("galleryContainer");
  gallery.id = "secGallery";
  pokemons.forEach((PokemonData, i) => {
    const divCard = createFaceCard(PokemonData, i);
    gallery.appendChild(divCard);
  });
  return gallery;
}

function createFaceCard(PokemonData, i) {
  const divCardPok = document.createElement("div");
  divCardPok.classList.add("cardFace");
  const typeCardClass = getTypeCardBGC(PokemonData.types[0]);
  divCardPok.classList.add(typeCardClass);
  const divImgPok = renderImageFaceCard(PokemonData, i);
  const divInfoPok = createInfoFaceCard(PokemonData);
  divCardPok.onclick = () => openPreview(PokemonData, i);
  divCardPok.append(divImgPok, divInfoPok);
  return divCardPok;
}

function renderImageFaceCard(PokemonData) {
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  img.classList.add("imgPeck");
  img.src = PokemonData.image;
  img.alt = `Foto Nr.${PokemonData.id}`;
  img.title = "Click to see Preview";
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
  spnType.classList.add("spnType");
  spnType.classList.add(getTypeSpanBGC(typ));
  const typeIcon = document.createElement("img");
  typeIcon.src = `./img/icons/iconsTypes/${typ}.svg`;
  typeIcon.alt = `${typ} type icon`;
  typeIcon.className = "type-icon";
  const typeText = document.createElement("span");
  typeText.textContent = capitalize(typ);
  typeText.className = "type-text";
  spnType.append(typeIcon, typeText);
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
  document.body.style.overflow = "hidden";
  UpdateObjPok();
  boxDialog.showModal();
  backToGallery();
}



function createOverlay(container) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.id = "overlayLoading";
  const content = document.createElement("div");
  content.className = "overlayContent";
  overlay.appendChild(content);
  container.appendChild(overlay);
  return content;
}

function showProcessingSpinner() {
  const container = getContainer();
  const content = createOverlay(container);
  const loadingDiv = createLoadingDiv();
  content.appendChild(loadingDiv);
  InteractionLock.lock();
  setTimeout(() => {
    const overlay = document.getElementById("overlayLoading");
    if (overlay) {
      overlay.remove();
    }
    InteractionLock.unlock();
  });
}

function createLoadingDiv() {
  const divLoading = document.createElement("div");
  const spinner = createLoadingSpinner();
  const text = createLoadingTxt();
  divLoading.append(spinner, text);
  return divLoading;
}

function createLoadingTxt() {
  const text = document.createElement("p");
  text.textContent = "Please wait, new Pokemon are being added....";
  return text;
}

function createLoadingSpinner() {
  const spinner = document.createElement("div");
  spinner.className = "spinner";
  return spinner;
}

async function loadMorePokemons() {
  showProcessingSpinner();
  const newPokemons = await loadMoreData();
  const gallery = document.getElementById("secGallery");
  newPokemons.forEach((PokemonData, i) => {
    const divCard = createFaceCard(
      PokemonData,
      pokemonsList.length - newPokemons.length + i
    );
    gallery.appendChild(divCard);
  });
}

async function createLoadingNewPokemons() {
  await loadMorePokemons();
  openNextNewPokemon();
}

function openNextNewPokemon() {
  currentPokIndex++;
  loadNewObjDate(currentPokIndex);
  document.body.style.overflow = "hidden";
}

function getContainer() {
  const dialog = document.getElementById("dialog5");
  if (!dialog) {
    const bodyMain = document.body;
    return bodyMain;
  } else {
    return dialog;
  }
}