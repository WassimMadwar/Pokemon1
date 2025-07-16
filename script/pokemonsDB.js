// fetchData.js

// راح نخزنهم هون
const pokemons = [];

async function fetchPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();

    const pokemonList = data.results;

    // نجيب معلومات كل بوكيمون بالتفصيل
    for (const pokemon of pokemonList) {
      const detailsResponse = await fetch(pokemon.url);
      const details = await detailsResponse.json();

      pokemons.push({
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map((t) => t.type.name),
        abilities: details.abilities.slice(0, 3).map((a) => a.ability.name),
      });
    }

    // نطبعهم للتجريب (ممكن تشيل هاد السطر بعدين)
    console.log(pokemons);
  } catch (error) {
    console.error("فشل تحميل بيانات البوكيمونات:", error);
  }
}

fetchPokemons();

// تصدير المصفوفة (حتى نستخدمها بملفات ثانية)
export { pokemons };
