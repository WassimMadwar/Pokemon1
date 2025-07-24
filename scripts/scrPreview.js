function openPreview(PokemonData, i) {
  let currentImgIndex = i;
  const boxDialog = document.createElement("dialog");
  boxDialog.classList.add("box_privew");
  boxDialog.id = "dialog5";
  const navig = createNavigCard(PokemonData);

  //   const fullInfo = createInfoBackCard(PokemonData, currentImgIndex);
  const _btnClose = createBtnClose();
  //   boxDialog.append(navig, fullInfo, _btnClose);
  boxDialog.append(navig, _btnClose);
  document.body.appendChild(boxDialog);
  _btnClose.onclick = () => closePreview();
  UpdateObjImg(currentImgIndex);
  boxDialog.showModal();
  //   backToGallery();
}

function createInfoBackCard(PokemonData, currentImgIndex) {
  const boxBesch = document.createElement("div");
  boxBesch.id = "boxBesch";
  const disc = document.createElement("p");
  disc.id = "currentBesch";//null anruf
  disc.classList.add("beschreibung");
  disc.textContent = `Naice to Know  \n \n ${_String} \n \n \t\t with ID : ${i}`;
  boxBesch.append(disc);
  return boxBesch;
}

function createNavigCard(PokemonData) {
  const navig = document.createElement("div");
  navig.id = "navig";
  navig.classList.add("box_navi");
  const _imgBig = renderCurrentImage(PokemonData.image, PokemonData.id);
  const _rightBtn = createBtnRight();
  const _leftBtn = createBtnLeft();
  navig.append(_leftBtn, _imgBig, _rightBtn);
  return navig;
}



function renderCurrentImage(srcImg, idImg) {
  const imgBig = document.createElement("img");
  imgBig.id = "currentImg";
  imgBig.alt = `Pokemon image ${idImg}`;
  imgBig.src = srcImg;
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

function createBtnClose() {
  const btnClose = document.createElement("button");
  btnClose.id = "btn_close";
  btnClose.classList.add("center");
  btnClose.type = "button";
  btnClose.textContent = "BACK TO GALLERY";
  return btnClose;
}

function backToGallery() {
  let boxPreview = document.getElementById("dialog5");
  let besch = document.getElementById("boxBesch");
  let navi = document.getElementById("navig");
  boxPreview.onclick = (event) => {
    if (navi.contains(event.target || besch.contains(event.target))) {
      return;
    }
    closePreview();
  };
}

function closePreview() {
  const targetPrrview = document.getElementById("dialog5");
  if (targetPrrview) {
    targetPrrview.close();
    targetPrrview.remove();
  }
}

function loadNewImgdate(newImgIndex) {
  const newImgData = pokemonsList[newImgIndex];
  const newImg = document.getElementById("currentImg");
  newImg.src = newImgData.image;
}

function UpdateObjImg(currentImgIndex) {
  const rightBtn = document.getElementById("btn_pfail_ra");
  const leftBtn = document.getElementById("btn_pfail_li");
  rightBtn.onclick = () => {
    if (rightBtn) {
      if (currentImgIndex === pokemonsList.length - 1) {
        currentImgIndex = 0;
        loadNewImgdate(currentImgIndex);
      } else {
        currentImgIndex++;
        loadNewImgdate(currentImgIndex);
      }
    }
  };
  leftBtn.onclick = () => {
    if (leftBtn) {
      if (currentImgIndex === 0) {
        currentImgIndex = pokemonsList.length - 1;
        loadNewImgdate(currentImgIndex);
      } else {
        currentImgIndex--;
        loadNewImgdate(currentImgIndex);
      }
    }
  };
}
