const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const img = document.getElementById('img');

searchButton.addEventListener('click', ()=>{
    const pokemon = searchInput.value.trim().toLowerCase();
    types.innerText = '';

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(pokemon);
        
        const imgSrc = pokemon.sprites.front_default;
        pokemonName.innerText = pokemon.name.toUpperCase();
        pokemonId.innerText = `#`+pokemon.id;
        weight.innerText = pokemon.weight;
        height.innerText = pokemon.height;
        pokemon.types.forEach((typ)=>{types.innerHTML += `<div id="typ">${typ.type.name.toUpperCase()}</div>`});
        hp.innerText = pokemon.stats[0].base_stat;
        attack.innerText = pokemon.stats[1].base_stat;
        defense.innerText = pokemon.stats[2].base_stat;
        specialAttack.innerText = pokemon.stats[3].base_stat;
        specialDefense.innerText = pokemon.stats[4].base_stat;
        speed.innerText = pokemon.stats[5].base_stat;

        pokemonName.insertAdjacentHTML('afterbegin',`<div><img id="sprite" src="${imgSrc}"></div>`)

    })
.catch((err)=>{
    alert('Pokemon not found');
    console.log(`There was an error: ${err}`);
});

})