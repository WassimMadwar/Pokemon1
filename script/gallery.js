// gallery.js

import { pokemonsList, loadData, fetchPokemons } from "./pokemonsDB.js";

// const pokemons = await fetchPokemons();

console.log(pokemonsList); // مؤقتًا للتجريب

fetchPokemons();

// {
//     name: "bulbasaur",
//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     types: [
//         "grass",
//         "poison"
//     ],
//     "abilities": [
//         "overgrow",
//         "chlorophyll"
//     ],
//     "weight": 69,
//     "height": 7
// }
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
  const img = renderImagePok(PokemonData, i);

  peckimg.appendChild(img);
}
function renderImagePok(PokemonData, i) {
  const img = document.createElement("img");
  img.classList.add("peck_img");
  img.src = PokemonData.image;
  img.alt = `Foto Nr.${i}`;

  img.title = "Click to see Preview";
  img.onclick = () => openPreview(PokemonData, i);
}
