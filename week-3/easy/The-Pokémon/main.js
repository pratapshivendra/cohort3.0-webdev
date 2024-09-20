const selectedElement = document.getElementById("category");
let allpokemoncontainer = document.querySelector(".container");
const searchBtn = document.getElementById('search-button');
let category = "";
let rendercnt = 0;

selectedElement.addEventListener("change", function () {
  category = selectedElement.value;
});

searchBtn.addEventListener('click', function() {
  clearContainer();
  fetchPokemons();
})


const quantityElement = document.getElementById("quantity");
let quantity = 0;
quantityElement.addEventListener("input", function () {
  quantity = Number(quantityElement.value);
});

function clearContainer() {
  const allPokemonContainer = document.querySelector(".container");
  allPokemonContainer.innerHTML = "";
  rendercnt = 0;
}


function createPokemonImg(pokedata, container) {
  let pokediv = document.createElement("div");
  pokediv.classList.add("cards-img");
  let pokeimg = document.createElement("img");
  pokeimg.setAttribute("loading", "lazy");
  pokeimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedata.id}.png`;
  pokeimg.alt = `${pokedata.name} image`;
  pokediv.appendChild(pokeimg);
  container.append(pokediv);
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then((pokedata) => {
      const isValidCategory = pokedata.types.some((element) => element.type.name === category);
      if (isValidCategory && rendercnt< quantity) {
        renderPokemon(pokedata);
        rendercnt++;
      } else {
        console.log("no category selected or limit reached");
      }
    });
}

function fetchPokemons() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach((pokemon) => {
        if (rendercnt < quantity) {
          fetchPokemonData(pokemon);
        } else return;
      });
    });
}

function fetchCategory() {
  fetch(`https://pokeapi.co/api/v2/type`)
    .then((response) => response.json())
    .then((alltypes) => {
      alltypes.results.forEach((typesData, idx) => getTypes(typesData, idx));
    });
}

function getTypes(data) {
  if (data.name == "unknown" || data.name == "stellar") return;
  let pokemonCategory = document.getElementById("category");
  let pokemontype = document.createElement("option");
  pokemontype.setAttribute("value", `${data.name}`);
  pokemontype.setAttribute("class", "element");
  let capitalname = data.name;
  pokemontype.innerHTML = capitalname.charAt(0).toUpperCase()+ capitalname.slice(1);
  pokemonCategory.appendChild(pokemontype);
}
function renderPokemon(pokedata) {
  let pokemoncontainer = document.createElement("div");
  pokemoncontainer.classList.add("cards");

  createPokemonImg(pokedata, pokemoncontainer);
  
  let pokeInfo = document.createElement("div");
  pokeInfo.setAttribute("class", "pokemon-info");
  let pokeName = document.createElement("h3");
  const capitalname = pokedata.name;
  pokeName.innerHTML = capitalname.charAt(0).toUpperCase() + capitalname.slice(1);
  pokeInfo.appendChild(pokeName);
  
  let typesContainer = document.createElement("div");
  typesContainer.setAttribute("class", "pokemon-types");
  pokedata.types.forEach(typeInfo => {
    let typeElement = document.createElement("span");
    typeElement.textContent = typeInfo.type.name; 
    typeElement.classList.add("pokemonElement"); 
    typesContainer.appendChild(typeElement);
  });
  pokeInfo.appendChild(typesContainer);
  pokemoncontainer.appendChild(pokeInfo);
  allpokemoncontainer.appendChild(pokemoncontainer);
}

fetchCategory();
