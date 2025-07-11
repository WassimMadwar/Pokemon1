// تمثيل بيانات البوكيمون (Ditto)
const dittoData = {
  name: "Ditto",
  type: "normal",
  sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
};

// دالة لإنشاء كارت بوكيمون
function createPokemonCard(data) {
  const card = document.createElement("div");
  card.className = "pokemon-card";

  const image = document.createElement("img");
  image.src = data.sprite;
  image.alt = data.name;

  const name = document.createElement("div");
  name.className = "pokemon-name";
  name.textContent = data.name;

  const type = document.createElement("div");
  type.className = "pokemon-type";
  type.textContent = `Type: ${data.type}`;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(type);

  return card;
}

// إضافة الكارت للصفحة
const container = document.getElementById("pokemon-container");
const dittoCard = createPokemonCard(dittoData);
container.appendChild(dittoCard);
 