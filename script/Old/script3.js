let myImgs = [
  {
    img_src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    img_capt:
      "Offroad-tauglich, abenteuerlustig, geländegängig, kraftvoll, stabil",
  },
  {
    img_src: "./img/motorrad/moto(1).jpeg",
    img_capt:
      "Modern, aerodynamisch, effizient, innovativ, ergonomisch, präzise",
  },
  {
    img_src: "./img/motorrad/moto(2).jpeg",
    img_capt: "Laut, aufregend, auffällig, einzigartig, mutig, unverwechselbar",
  },
  {
    img_src: "./img/motorrad/moto(3).jpeg",
    img_capt: "Leistungsstark, schnell, robust, zuverlässig, wendig, sportlich",
  },
  {
    img_src: "./img/motorrad/moto(4).jpeg",
    img_capt: "Klassisch, stilvoll, elegant, komfortabel, zeitlos, hochwertig",
  },
  {
    img_src: "./img/motorrad/moto(5).jpeg",
    img_capt: "Offroad-tauglich, abenteuerlustig,  stabil, widerstandsfähig",
  },
  {
    img_src: "./img/motorrad/moto(6).jpeg",
    img_capt:
      "Modern, aerodynamisch, effizient, innovativ, ergonomisch, präzise",
  },
  {
    img_src: "./img/motorrad/moto(7).jpeg",
    img_capt: "Laut, aufregend, auffällig, einzigartig, mutig, unverwechselbar",
  },
  {
    img_src: "./img/motorrad/moto(8).jpeg",
    img_capt: "Leistungsstark, schnell, robust, zuverlässig, wendig, sportlich",
  },
  {
    img_src: "./img/motorrad/moto(9).jpeg",
    img_capt: "Klassisch, stilvoll, elegant, komfortabel, zeitlos, hochwertig",
  },
  {
    img_src: "./img/motorrad/moto(10).jpeg",
    img_capt:
      "Offroad-tauglich,  geländegängig, kraftvoll, stabil, widerstandsfähig",
  },
  {
    img_src: "./img/motorrad/moto(11).jpeg",
    img_capt:
      "Modern, aerodynamisch, effizient, innovativ, ergonomisch, präzise",
  },
  {
    img_src: "./img/motorrad/moto(12).jpeg",
    img_capt: "Laut, aufregend, auffällig, einzigartig, mutig, unverwechselbar",
  },
];

function loadNewImgdate(newImgId) {
  const newImgData = myImgs[newImgId];
  const newImg = document.getElementById("currentImg");
  newImg.src = newImgData.img_src;
  const newDisc = document.getElementById("currentBesch");
  newDisc.textContent = "";
  newDisc.textContent = `Naice to Know  \n \n ${newImgData.img_capt} \n\n with ID : ${newImgId} `;
}

function UpdateObjImg(currentImg) {
  const rightBtn = document.getElementById("btn_pfail_ra");
  const leftBtn = document.getElementById("btn_pfail_li");
  rightBtn.onclick = () => {
    if (rightBtn) {
      if (currentImg === myImgs.length - 1) {
        currentImg = 0;
        loadNewImgdate(currentImg);
      } else {
        currentImg++;
        loadNewImgdate(currentImg);
      }
    }
  };
  leftBtn.onclick = () => {
    if (leftBtn) {
      if (currentImg === 0) {
        currentImg = myImgs.length - 1;
        loadNewImgdate(currentImg);
      } else {
        currentImg--;
        loadNewImgdate(currentImg);
      }
    }
  };
}

function openPreview(imgData, i) {
  let currentImg = i;
  const boxDialog = document.createElement("dialog");
  boxDialog.classList.add("box_privew");
  boxDialog.id = "dialog5";
  const navig = document.createElement("div");
  navig.id = "navig";
  navig.classList.add("box_navi");
  const _imgBig = renderCurrentImage(imgData.img_src);
  const _rightBtn = createBtnRight();
  const _leftBtn = createBtnLeft();
  navig.append(_leftBtn, _imgBig, _rightBtn);
  const _disc = createDiscription(imgData.img_capt, currentImg);
  const _btnClose = createBtnClose();
  boxDialog.append(navig, _disc, _btnClose);
  document.body.appendChild(boxDialog);
  _btnClose.onclick = () => closePreview();
  UpdateObjImg(currentImg);
  boxDialog.showModal();
  backToGallery();
}

function renderCurrentImage(src) {
  const imgBig = document.createElement("img");
  imgBig.id = "currentImg";
  imgBig.alt = "Motorrad image";
  imgBig.src = src;
  return imgBig;
}

function createBtnLeft() {
  const btnpfail_li = document.createElement("button");
  btnpfail_li.id = "btn_pfail_li";
  btnpfail_li.classList.add("btn_pfail");
  btnpfail_li.type = "button";
  btnpfail_li.textContent = "<";
  return btnpfail_li;
}

function createBtnRight() {
  const btnpfail_ra = document.createElement("button");
  btnpfail_ra.id = "btn_pfail_ra";
  btnpfail_ra.classList.add("btn_pfail");
  btnpfail_ra.type = "button";
  btnpfail_ra.textContent = ">";
  return btnpfail_ra;
}

function createDiscription(_String, i) {
  const boxBesch = document.createElement("div");
  boxBesch.id = "boxBesch";
  const disc = document.createElement("p");
  disc.id = "currentBesch";
  disc.classList.add("beschreibung");
  disc.textContent = `Naice to Know  \n \n ${_String} \n \n \t\t with ID : ${i}`;
  boxBesch.append(disc);
  return boxBesch;
}

function createBtnClose() {
  const btnClose = document.createElement("button");
  btnClose.id = "btn_close";
  btnClose.classList.add("center");
  btnClose.type = "button";
  btnClose.textContent = "BACK TO GALLERY";
  return btnClose;
}

/**
 * 1-2-1-
 */
function createGallery() {
  const gallery = document.createElement("section");
  gallery.classList.add("gallery_container");

  myImgs.forEach((imgData, i) => {
    const peckimg = document.createElement("div");
    const img = document.createElement("img");
    img.classList.add("peck_img");
    img.src = imgData.img_src;
    img.alt = `Foto Nr.${i}`;

    img.title = "Click to see Preview";
    img.onclick = () => openPreview(imgData, i);

    peckimg.appendChild(img);
    gallery.appendChild(peckimg);
  });
  return gallery;
}

// -
/**
 * 1-2-
 */
function createMain() {
  const main = document.createElement("main");
  const msg = document.createElement("section");
  const msg_txt = document.createElement("h1");
  msg_txt.textContent = "Welcome to Fotogram App";
  msg.appendChild(msg_txt);
  const gallery = createGallery();
  main.append(msg, gallery);
  return main;
}

//
/**
 * 1-
 */
function loadContent() {
  const body = document.body;
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();
  body.append(header, main, footer);
}

function closePreview() {
  const targetPrrview = document.getElementById("dialog5");
  if (targetPrrview) {
    targetPrrview.close();
    targetPrrview.remove();
  }
}
/**
 * 1-1
 */
function createHeader() {
  const header = document.createElement("header");
  header.classList.add("head_container");
  const logo_img = document.createElement("img");
  logo_img.src = "./img/icons/Fotogram_Logo.svg";
  logo_img.title = "logo";
  header.appendChild(logo_img);
  return header;
}

function backToGallery() {
  let boxPreview = document.getElementById("dialog5");
  let besch = document.getElementById("boxBesch");
  let navi = document.getElementById("navig");
  boxPreview.onclick = (event) => {
    if (navi.contains(event.target) || besch.contains(event.target)) {
      return;
    }
    closePreview();
  };
}

/**
 * 1-3-
 */
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

/**
 * هاي الدالة بتجمع رقمين وبتعطيك الناتج.
 * @param {number} a - الرقم الأول
 * @param {number} b - الرقم الثاني
 * @returns {number} ناتج جمع الرقمين
 */
function sum(a, b) {
  return a + b;
}

/**
 *
 */
