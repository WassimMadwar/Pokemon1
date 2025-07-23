// import { pokemonsList, loadData, fetchPokemons } from "./pokemonsDB.js";


// fetchPokemons();
// await loadData();

/**
 * 1-2-1-
 */
function createGallery() {
  const gallery = document.createElement("section");
  gallery.classList.add("gallery_container");
  //
  pokemonsList.forEach((PokemonData, i) => {
    const divCard = createFaceCard(PokemonData, i);
    gallery.appendChild(divCard);
  });

  return gallery;
}

function createFaceCard(PokemonData, i) {
  const divCardPok = document.createElement("div");
  const divImgPok = renderImagePok(PokemonData, i);
  const divInfoPok = createInfoFaceCard(PokemonData);
  divCardPok.append(divImgPok, divInfoPok);
  return divCardPok;
}

function renderImagePok(PokemonData, i) {
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
  const spnName = getNameSpan(PokemonData.name);
  const spnType = getTypeSpan(PokemonData.types[0]);
  divInfoPok.append(spnName, spnType);
  return divInfoPok;
}

function getNameSpan(nam) {
  const spnName = document.createElement("span");
  spnName.textContent = nam;
  return spnName;
}

function getTypeSpan(typ) {
  const spnType = document.createElement("span");
  spnType.textContent = typ;
  return spnType;
}

// export { createGallery };
