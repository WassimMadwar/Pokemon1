const pokemonsList = [];
let currentOffset = 0;
const limit = 20;

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
    image: details.sprites.other["official-artwork"].front_default,
    types: details.types.map((t) => t.type.name),
    abilities: details.abilities.slice(0, 3).map((a) => a.ability.name),
    weight: details.weight,
    height: details.height,
    stats: {
      hp: getStat(details.stats, "hp"),
      attack: getStat(details.stats, "attack"),
      defense: getStat(details.stats, "defense"),
      speed: getStat(details.stats, "speed"),
    },
  });
}

function getStat(statsArray, statName) {
  const statObj = statsArray.find((s) => s.stat.name === statName);
  return statObj ? statObj.base_stat : 0;
}

async function loadData() {
  fetchPokemons(currentOffset);
  currentOffset += limit;
}

function getTypeSpanBGC(typ) {
  let bgColor = "";
  switch (typ) {
    case "bug":
      bgColor = "bgBug";
      break;
    case "water":
      bgColor = "bgWater";
      break;
    case "fire":
      bgColor = "bgFire";
      break;
    case "grass":
      bgColor = "bgGrass";
      break;
    case "normal":
      bgColor = "bgNormal";
      break;
    default:
      bgColor = "bgDefault";
  }
  return bgColor;
}

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
