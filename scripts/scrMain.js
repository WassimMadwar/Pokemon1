async function createMain() {
  const main = document.createElement("main");
  main.id = "main";
  await fetchPokemonsFromAPI();

  const gallery = createGallery(pokemonsList);
  const btnLoadMore = createLoadMoreButton();
  main.append(gallery, btnLoadMore);
  return main;
}

async function loadContent() {
  const body = document.body;
  const header = createHeader();
  const main = await createMain();
  const footer = createFooter();
  body.append(header, main, footer);
}

function createFooter() {
  const footer = document.createElement("footer");
  const footer_div = document.createElement("div");
  footer_div.classList.add("footer_container");
  const links = [
    { text: "Impressum", href: "./impressum.html" },
    { text: "Datenschutz", href: "./datenschutzDE.html" },
  ];
  links.forEach((linkData) => {
    const link = document.createElement("a");
    link.textContent = linkData.text;
    link.href = linkData.href;
    link.target = "_blank";
    footer_div.appendChild(link);
  });
  footer.appendChild(footer_div);
  return footer;
}

function createLoadMoreButton() {
  const btnLoadMore = document.createElement("button");
  btnLoadMore.id = "loadMoreBtn";
  btnLoadMore.textContent = "Load More Pokémon";

  btnLoadMore.className = "pokemon-load-btn";
  btnLoadMore.onclick = loadMorePokemons;

  return btnLoadMore;
}

window.onload = () => loadContent();
