let currentOffset = 0;
const limit = 20;
const pokemonsList = [];
let currentPokIndex = 0;
const InteractionLock = {
  isLocked: false,

  lock() {
    if (this.isLocked) return;
    this.isLocked = true;
  document.body.style.overflow = "hidden";

    document.body.style.pointerEvents = "none";
  },

  unlock() {
    if (!this.isLocked) return;
    this.isLocked = false;
    document.body.style.pointerEvents = "auto";
      document.body.style.overflow = "";

  },
};

// يجب فصل هذه الدوال
// تحميل قائمة البوكيمونات.

// تحميل تفاصيل كل بوكيمون.

// إضافة البوكيمون إلى القائمة.
async function fetchPokemonsFromAPI(currentOffset = 0) {
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
    types: getTypes(details.types),
    abilities: extractAbilities(details.abilities),
    weight: details.weight,
    height: details.height,
    stats: getStats(details.stats),
  });
}

function extractAbilities(abilitiesArray, limit = 3) {
  return abilitiesArray.slice(0, limit).map((a) => a.ability.name);
}
function getStats(statsArray) {
  return {
    hp: getStat(statsArray, "hp"),
    attack: getStat(statsArray, "attack"),
    defense: getStat(statsArray, "defense"),
    speed: getStat(statsArray, "speed"),
  };
}
function getTypes(typesArray) {
  return typesArray.map((t) => t.type.name);
}
function getStat(statsArray, statName) {
  const statObj = statsArray.find((s) => s.stat.name === statName);
  return statObj ? statObj.base_stat : 0;
}

async function loadMoreData() {
  const previousLength = pokemonsList.length;
  updateCurrentOffset();
  await fetchPokemonsFromAPI(currentOffset);

  const newPokemons = pokemonsList.slice(previousLength);

  return newPokemons;
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
    default:
      bgColor = "bgDefault";
  }
  return bgColor;
}

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
