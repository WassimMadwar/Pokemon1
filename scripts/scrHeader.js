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
  divLogo.className = "logo-container";
  const imgLogo = document.createElement("img");
  imgLogo.alt = "Logo";
  imgLogo.src = "./img/icons/logo.png";
  imgLogo.title = "go to webseite";
  const link = document.createElement("a");
  link.href = "./index.html";
  link.appendChild(imgLogo);
  divLogo.appendChild(link);
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

function getValidationMessage() {
  const msg =
    "⚠️ Please enter a number greater than 0 or text containing at least 3 characters.";
  msg.className = "msgInput";
  return msg;
}

function createNoResultsMessage() {
  const messageContainer = document.createElement("div");
  messageContainer.className = "no-results-message";
  const mainText = document.createElement("div");
  mainText.className = "main-text";
  mainText.textContent = "No Pokémon Found";
  const suggestionText = document.createElement("div");
  suggestionText.className = "suggestion-text";
  suggestionText.textContent = `No results found for "${searchKey}".`;
  const hintText = document.createElement("div");
  hintText.className = "load-more-hint";
  hintText.textContent = "Try loading more Pokémon to find a match!";
  messageContainer.append(mainText, suggestionText, hintText);
  return messageContainer;
}

let searchKey = "";
let searchResults = [];

function performClear() {
  const inputFeld = document.getElementById("searchInput");
  inputFeld.value = "";
  inputFeld.placeholder = "Search by name, ID, or type";
  inputFeld.focus();
  searchKey = "";
  renderCards(pokemonsList);
  showLoadMoreButton();
}

function handleSearchInput() {
  const searchInput = document.getElementById("searchInput");
  searchKey = searchInput.value.trim();
  if (searchKey === "") {
    renderCards(pokemonsList);
    showLoadMoreButton();
    return;
  }
  if (!isValidSearchQuery(searchKey)) {
    searchInput.setCustomValidity(getValidationMessage());
    searchInput.reportValidity();
    return;
  }
  searchInput.setCustomValidity("");
  hideLoadMoreButton();
  performSearch(searchKey.toLowerCase());
}

function isValidSearchQuery(searchKey) {
  const isNumber = /^\d+$/.test(searchKey);
  return (
    (isNumber && Number(searchKey) > 0) || (!isNumber && searchKey.length >= 3)
  );
}

function performSearch(serKey) {
  searchResults = [];
  if (!serKey) {
    return;
  }
  for (let i = 0; i < pokemonsList.length; i++) {
    let pokemon = pokemonsList[i];
    let matchFound = checkPokemonMatch(pokemon, serKey);
    if (matchFound) {
      searchResults.push(pokemon);
    }
  }
  renderCards(searchResults);
}

function checkPokemonMatch(pokemon, serKey) {
  if (checkMatchID(pokemon.id, serKey)) {
    return true;
  } else if (checkMatchName(pokemon.name, serKey)) {
    return true;
  } else {
    return checkTypeMatch(pokemon.types, serKey);
  }
}

function checkMatchID(id, serKey) {
  let pokemonIdString = id.toString();
  if (pokemonIdString === serKey) {
    return true;
  }
}

function checkMatchName(name, serKey) {
  if (name.toLowerCase().includes(serKey)) {
    return true;
  }
}

function checkTypeMatch(types, serKey) {
  for (let i = 0; i < types.length; i++) {
    if (types[i].toLowerCase().includes(serKey)) {
      return true;
    }
  }
  return false;
}

function renderCards(pokemons) {
  let gallery = document.getElementById("secGallery");
  gallery.innerHTML = "";
  if (pokemons.length === 0 && searchKey && searchKey.trim() !== "") {
    const noResultsMessage = createNoResultsMessage();
    gallery.appendChild(noResultsMessage);
  } else {
    pokemons.forEach((PokemonData, i) => {
      const divCard = createFaceCard(PokemonData, i);
      gallery.appendChild(divCard);
    });
  }
}

function hideLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = "none";
  }
}

function showLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = "block";
  }
}
