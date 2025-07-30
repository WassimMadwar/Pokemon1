function createNavigCard(PokemonData) {
  const navig = document.createElement("div");
  navig.id = "navig";
  navig.classList.add("divNavig");
  const btnClose = createBtnClose();
  const _rightBtn = createBtnRight();
  const _leftBtn = createBtnLeft();
  navig.append(_leftBtn, btnClose, _rightBtn);
  return navig;
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
  btnClose.textContent = "X";
  btnClose.onclick = () => closePreview();
  return btnClose;
}

function backToGallery() {
  let boxPreview = document.getElementById("dialog5");
  let card = document.getElementById("containerCard");
  boxPreview.onclick = (event) => {
    if (card.contains(event.target)) {
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

function loadNewImgDate(newPokIndex) {
  const newPokData = pokemonsList[newPokIndex];
  const newImg = document.getElementById("currentImg");
  newImg.src = newPokData.image;
  newImg.alt = `Pokemon image ${newPokIndex}`;
}

function UpdateObjPok(currentPokIndex) {
  const rightBtn = document.getElementById("btn_pfail_ra");
  const leftBtn = document.getElementById("btn_pfail_li");
  rightBtn.onclick = () => {
    if (rightBtn) {
      if (currentPokIndex === pokemonsList.length - 1) {
        currentPokIndex = 0;
        loadNewImgDate(currentPokIndex);
      } else {
        currentPokIndex++;
        loadNewImgDate(currentPokIndex);
      }
    }
  };
  leftBtn.onclick = () => {
    if (leftBtn) {
      if (currentPokIndex === 0) {
        currentPokIndex = pokemonsList.length - 1;
        loadNewImgDate(currentPokIndex);
      } else {
        currentPokIndex--;
        loadNewImgDate(currentPokIndex);
      }
    }
  };
}
