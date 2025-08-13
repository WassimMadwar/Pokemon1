function createInfoBackCard(PokemonData) {
  const boxInfo = document.createElement("div");
  boxInfo.id = "boxInfo";
  boxInfo.className = "divFullInfo";
  const divIdent = getIdentificationPok(PokemonData.name, PokemonData.id);
  const divSpecification = getSpecificationPok(PokemonData);
  boxInfo.append(divIdent, divSpecification);
  return boxInfo;
}

function loadNewInfoBackCard(newPokData) {
  const boxInfo = document.getElementById("boxInfo");
  boxInfo.innerHTML = "";
  const newInfo = createInfoBackCard(newPokData);
  boxInfo.appendChild(newInfo);
}

function getIdentificationPok(nam, id) {
  const divIdent = document.createElement("div");
  divIdent.classList.add("cardFaceInfo");
  const spnName = getNameSpan(nam);
  const spnId = getIdSpan(id);
  divIdent.append(spnName, spnId);
  return divIdent;
}

function getIdSpan(id) {
  const spnId = document.createElement("span");
  spnId.textContent = `ID: ${id}`;
  return spnId;
}

function getSpecificationPok(PokemonData) {
  const divSpec = document.createElement("div");
  const divHeadTabs = createHeadTabs();
  const divTabContents = createContentTabs(PokemonData);
  divSpec.append(divHeadTabs, divTabContents);
  return divSpec;
}

//header Tabs
function createHeadTabs() {
  const divNavi = document.createElement("div");
  divNavi.classList.add("tabNavigation");
  const tabAbout = createTabAbout();
  const tabBaseStats = createTabBaseStats();
  divNavi.append(tabAbout, tabBaseStats);
  return divNavi;
}

//head About
function createTabAbout() {
  const aboutTab = document.createElement("span");
  aboutTab.id = "headAbout";
  aboutTab.className = "tab active";
  aboutTab.textContent = "About";
  aboutTab.onclick = () => toggleTabs(1);
  return aboutTab;
}

function createContentTabs(PokemonData) {
  const divContent = document.createElement("div");
  const contAbout = createContentAbout(PokemonData);
  const contBaseStats = createContentBaseStats(PokemonData.stats);
  divContent.append(contAbout, contBaseStats);
  return divContent;
}

//Content About
function createContentAbout(PokemonData) {
  const divAboutContent = document.createElement("div");
  divAboutContent.className = "pad-8 ";
  divAboutContent.id = "aboutContent";
  const divHeight = getHeight(PokemonData.height);
  const divWeight = getWeight(PokemonData.weight);
  const divAbilities = getAbilities(PokemonData.abilities);
  divAboutContent.append(divHeight, divWeight, divAbilities);
  return divAboutContent;
}

//ContentAbout
function getHeight(pokHeight) {
  const divHeight = document.createElement("div");
  const pHeight = document.createElement("p");
  const sHeight = document.createElement("strong");
  sHeight.textContent = "Height : ";
  pHeight.appendChild(sHeight);
  pHeight.innerHTML += `${pokHeight}`;
  divHeight.appendChild(pHeight);
  return divHeight;
}

//ContentAbout
function getWeight(pokWeight) {
  const divWeight = document.createElement("div");
  const pWeight = document.createElement("p");
  const sWeight = document.createElement("strong");
  sWeight.textContent = "Weight : ";
  pWeight.appendChild(sWeight);
  pWeight.innerHTML += `${pokWeight}`;
  divWeight.appendChild(pWeight);
  return divWeight;
}

//ContentAbout
function getAbilities(abilitiesArray) {
  const divAbilities = document.createElement("div");
  const pAbilities = document.createElement("p");
  const sAbilities = document.createElement("strong");
  sAbilities.textContent = "Abilities : ";
  pAbilities.appendChild(sAbilities);
  pAbilities.innerHTML += `${abilitiesArray.join(" , ")}`;
  divAbilities.appendChild(pAbilities);
  return divAbilities;
}

//head Base Stats
function createTabBaseStats() {
  const statsTab = document.createElement("span");
  statsTab.id = "headStats";
  statsTab.classList = "tab";
  statsTab.textContent = "Base Stats";
  statsTab.onclick = () => toggleTabs(2);
  return statsTab;
}

function createContentBaseStats(statsData) {
  const statsContent = document.createElement("div");
  statsContent.id = "statsContent";
  statsContent.className = "dNone";
  for (const [statName, value] of Object.entries(statsData)) {
    const divStat = createStat(statName, value);
    statsContent.appendChild(divStat);
  }
  return statsContent;
}

function createStat(statName, value) {
  const divStat = document.createElement("div");
  divStat.className = "stat pad-8";

  const lblStat = getNameStat(statName);

  const divProgressBar = createProgressBar(value);

  divStat.append(lblStat, divProgressBar);
  return divStat;
}

function createProgressBar(value) {
  const divBar = document.createElement("div");
  divBar.className = "bar";

  let divValue = document.createElement("div");
  divValue.className = "fill";
  divValue.style.width = "0%";
  fillProgressBar(divValue, value);

  divBar.append(divValue);
  return divBar;
}

function fillProgressBar(element, target) {
  let width = 0;
  const interval = setInterval(() => {
    if (width >= target) {
      clearInterval(interval);
    } else {
      width++;
      element.style.width = width + "%";
    }
  }, 10);
}

function getNameStat(statName) {
  const lblStat = document.createElement("label");
  const sStat = document.createElement("strong");
  sStat.textContent = capitalize(statName);
  lblStat.appendChild(sStat);
  return lblStat;
}

function toggleTabs(indexTab) {
  toggleTabHeader(indexTab);
  toggleTabContent(indexTab);
}

function toggleTabContent(indexTab) {
  const aboutContent = document.getElementById("aboutContent");
  const statsContent = document.getElementById("statsContent");
  if (indexTab == 2) {
    aboutContent.classList.add("dNone");
    statsContent.classList.remove("dNone");
    return;
  }
  if (indexTab == 1) {
    aboutContent.classList.remove("dNone");
    statsContent.classList.add("dNone");
    return;
  }
}

function toggleTabHeader(indexTab) {
  const headAbout = document.getElementById("headAbout");
  const headStats = document.getElementById("headStats");
  if (indexTab == 2) {
    headAbout.classList.remove("active");
    headStats.classList.add("active");
    return;
  }
  if (indexTab == 1) {
    headStats.classList.remove("active");
    headAbout.classList.add("active");
    return;
  }
}
