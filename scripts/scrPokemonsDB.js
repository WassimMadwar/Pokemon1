const pokemonsList = [];
let currentOffset = 0;
const limit = 20;

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

async function fetchPokemons(currentOffset = 0) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`
    );
    const data = await response.json();
    const pokemonList = data.results;

    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      const detailsResponse = await fetch(pokemon.url);
      const details = await detailsResponse.json();

      addPokemonToList(details);
    }
  } catch (error) {
    console.error(" فشل تحميل بيانات البوكيمونات:", error);
  }
}

function addPokemonToList(details) {
  pokemonsList.push({
    id: details.id,
    name: details.name,
    image: details.sprites.front_default,
    types: details.types.map((t) => t.type.name),
    abilities: details.abilities.slice(0, 3).map((a) => a.ability.name),
    weight: details.weight,
    height: details.height,
  });
}

// دالة لعمل "Load More"
async function loadData() {
  fetchPokemons(currentOffset);
  currentOffset += limit;
}

// loadData();


// تصدير البيانات والدالة
// export { pokemonsList, loadData, fetchPokemons };

// {
//     "id": 1,
//     "name": "bulbasaur",
//     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     "types": [
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