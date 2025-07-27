async function createMain() {
  const main = document.createElement("main");

  await fetchPokemons();

  const gallery = createGallery();

  main.append(gallery);
  return main;
}

async function loadContent() {
  const body = document.body;
  //   const header = createHeader();
  const main = await createMain();
  const footer = createFooter();
  body.append(main, footer);
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("head_container");
  const logo_img = document.createElement("img");
  logo_img.src = "./img/icons/Fotogram_Logo.svg";
  logo_img.title = "logo";
  header.appendChild(logo_img);
  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  const footer_div = document.createElement("div");
  footer_div.classList.add("footer_container");
  const links = [
    { text: "Impressum", href: "./impressum.html" },
    { text: "Madwarsoft", href: "./madwarsoft.html" },
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

window.onload = () => loadContent();
