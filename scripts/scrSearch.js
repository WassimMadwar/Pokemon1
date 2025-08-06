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
  inputFeld.type = "text";
  inputFeld.id = "searchInput";
  inputFeld.placeholder = "Search by name, ID, or type";
  return inputFeld;
}

function performClear() {
  const inputFeld = document.getElementById("searchInput");
  inputFeld.value = "";
  inputFeld.placeholder = "Search by name, ID, or type";
  inputFeld.focus();
}

function performSearch() {}

//   container.appendChild(searchBar);
