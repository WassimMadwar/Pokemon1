let currentOffset = 0;
const limit = 20;
const pokemonsList = [];
let currentPokIndex = 0;

const InteractionLock = {
  isLocked: false,
  lock() {
    if (this.isLocked) return;
    this.isLocked = true;
    document.body.style.pointerEvents = "none";
  },
  unlock() {
    if (!this.isLocked) return;
    this.isLocked = false;
    document.body.style.pointerEvents = "auto";
  },
};

async function fetchPokemonsFromAPI(currentOffset) {
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
    console.error("Error in load Data : ", error);
  }
}

function addPokemonToList(details) {
  pokemonsList.push({
    id: details.id,
    name: details.name,
    image: details.sprites.other["official-artwork"].front_default,
    types: getTypes(details.types),
    abilities: extractAbilities(details.abilities),
    weight: details.weight,
    height: details.height,
    stats: getStats(details.stats),
  });
}

function extractAbilities(abilitiesArray) {
  const result = [];
  abilitiesArray.slice(0, 3).forEach((a) => {
    result.push(a.ability.name);
  });
  return result;
}

function getStats(statsArray) {
  return {
    hp: getStatValue(statsArray, "hp"),
    attack: getStatValue(statsArray, "attack"),
    defense: getStatValue(statsArray, "defense"),
    speed: getStatValue(statsArray, "speed"),
  };
}

function getTypes(typesArray) {
  const result = [];
  typesArray.forEach((t) => {
    result.push(t.type.name);
  });
  return result;
}

function getStatValue(statsArray, statName) {
  const statObj = statsArray.find((s) => s.stat.name === statName);
  return statObj ? statObj.base_stat : 0;
}

async function loadMoreData() {
  try {
    const previousLength = pokemonsList.length;
    updateCurrentOffset();
    await fetchPokemonsFromAPI(currentOffset);
    const newPokemons = pokemonsList.slice(previousLength);
    return newPokemons;
  } catch (err) {
    console.error("Error in loadMoreData :", err);
    return [];
  }
}

function updateCurrentOffset() {
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
    case "electric":
      bgColor = "bgElectric";
      break;
    case "psychic":
      bgColor = "bgPsychic";
      break;
    case "ice":
      bgColor = "bgIce";
      break;
    case "dragon":
      bgColor = "bgDragon";
      break;
    case "dark":
      bgColor = "bgDark";
      break;
    case "fairy":
      bgColor = "bgFairy";
      break;
    case "fighting":
      bgColor = "bgFighting";
      break;
    case "poison":
      bgColor = "bgPoison";
      break;
    case "ground":
      bgColor = "bgGround";
      break;
    case "flying":
      bgColor = "bgFlying";
      break;
    case "rock":
      bgColor = "bgRock";
      break;
    case "ghost":
      bgColor = "bgGhost";
      break;
    case "steel":
      bgColor = "bgSteel";
      break;
    default:
      bgColor = "bgDefault";
  }
  return bgColor;
}

function getTypeCardBGC(typ) {
  let bgColor = "";
  switch (typ) {
    case "bug":
      bgColor = "cardBug";
      break;
    case "water":
      bgColor = "cardWater";
      break;
    case "fire":
      bgColor = "cardFire";
      break;
    case "grass":
      bgColor = "cardGrass";
      break;
    case "normal":
      bgColor = "cardNormal";
      break;
    case "electric":
      bgColor = "cardElectric";
      break;
    case "psychic":
      bgColor = "cardPsychic";
      break;
    case "ice":
      bgColor = "cardIce";
      break;
    case "dragon":
      bgColor = "cardDragon";
      break;
    case "dark":
      bgColor = "cardDark";
      break;
    case "fairy":
      bgColor = "cardFairy";
      break;
    case "fighting":
      bgColor = "cardFighting";
      break;
    case "poison":
      bgColor = "cardPoison";
      break;
    case "ground":
      bgColor = "cardGround";
      break;
    case "flying":
      bgColor = "cardFlying";
      break;
    case "rock":
      bgColor = "cardRock";
      break;
    case "ghost":
      bgColor = "cardGhost";
      break;
    case "steel":
      bgColor = "cardSteel";
      break;
    default:
      bgColor = "cardDefault";
  }
  return bgColor;
}

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
