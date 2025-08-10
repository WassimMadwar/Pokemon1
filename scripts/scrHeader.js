function createHeader() {
  const header = document.createElement("header");
  header.classList.add("headContainer");
  const divLogo = renderLogoImg();
  const searchBar = createSearchBar();
  header.append(divLogo, searchBar);
  return header;
}

function renderLogoImg() {
  const divLogo = document.createElement("div");
  const imgLogo = document.createElement("img");
  imgLogo.alt = "Logo";
  imgLogo.src = "./img/icons/logo.png";
  imgLogo.title = "logo";
  divLogo.appendChild(imgLogo);
  return divLogo;
}

function createSearchBar() {
  const searchBar = document.createElement("div");
  searchBar.className = "searchBar";
  const searchIcon = createSearchIcon();
  const input = createSearchInput();
  input.focus();
  const btnClear = createSearchClear();
  searchBar.append(searchIcon, input, btnClear);
  return searchBar;
}

function createSearchIcon() {
  const searchIcon = document.createElement("span");
  searchIcon.className = "searchIcon";
  searchIcon.textContent = "🔍";
  searchIcon.onclick = handleSearchInput;
  return searchIcon;
}

function createSearchClear() {
  const btnClear = document.createElement("button");
  btnClear.className = "btnClear";
  btnClear.textContent = "Clear";
  btnClear.onclick = () => performClear();
  return btnClear;
}

function createSearchInput() {
  const inputFeld = document.createElement("input");
  inputFeld.className = "searchInput";
  inputFeld.type = "text";
  inputFeld.id = "searchInput";
  inputFeld.placeholder = "Search by name, ID, or type";
  inputFeld.oninput = handleSearchInput;
  return inputFeld;
}

// logic

let searchQuery = "";
let searchResults = [];

function performClear() {
  const inputFeld = document.getElementById("searchInput");
  inputFeld.value = "";
  inputFeld.placeholder = "Search by name, ID, or type";
  inputFeld.focus();
  renderCards(pokemonsList);
}

function handleSearchInput() {
  const searchInput = document.getElementById("searchInput");
  searchQuery = searchInput.value.trim();
  if (searchQuery === "") {
    renderCards(pokemonsList);
  }
  if (!isValidSearchQuery(searchQuery)) {
    searchInput.setCustomValidity(getValidationMessage());
    searchInput.reportValidity();
    return;
  }
  searchInput.setCustomValidity("");
  performSearch(searchQuery.toLowerCase());
}

function getValidationMessage() {
  const msg =
    "⚠️ Please enter a number greater than 0 or text containing at least 3 characters.";
  msg.className = "msgInput";
  return msg;
}

function isValidSearchQuery(searchQuery) {
  const isNumber = /^\d+$/.test(searchQuery);
  return (
    (isNumber && Number(searchQuery) > 0) ||
    (!isNumber && searchQuery.length >= 3)
  );
}

function performSearch(query) {
  searchResults = [];
  if (!query) {
    return;
  }
  for (let i = 0; i < pokemonsList.length; i++) {
    let pokemon = pokemonsList[i];
    let matchFound = checkPokemonMatch(pokemon, query);

    if (matchFound) {
      searchResults.push(pokemon);
    }
  }
  renderCards(searchResults);
}

function checkPokemonMatch(pokemon, query) {
  if (checkMatchID(pokemon.id, query)) {
    return true;
  } else if (checkMatchName(pokemon.name, query)) {
    return true;
  } else {
    return checkTypeMatch(pokemon.types, query);
  }
}

function checkMatchID(id, query) {
  let pokemonIdString = id.toString();
  if (pokemonIdString === query) {
    return true;
  }
}

function checkMatchName(name, query) {
  if (name.toLowerCase().includes(query)) {
    return true;
  }
}

function checkTypeMatch(types, query) {
  for (let i = 0; i < types.length; i++) {
    if (types[i].toLowerCase().includes(query)) {
      return true;
    }
  }
  return false;
}

function renderCards(pokemons) {
  let gallery = document.getElementById("secGallery");
  gallery.innerHTML = "";

  pokemons.forEach((PokemonData, i) => {
    const divCard = createFaceCard(PokemonData, i);
    gallery.appendChild(divCard);
  });
}
