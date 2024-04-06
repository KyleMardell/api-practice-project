// Pokemon search

const findPokemon = () => { 
    const pokemonName = document.getElementById("pokemon-name").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error("Pokemon not found")
            } else {
                return response.json();
            }
    })
    .then(data => {
        console.log(data);
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            type: data.types.map(type => type.type.name).join(", ")
        };
    
        displayPokemon(pokemon);
    })
    .catch((error) => console.log(error));
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const infoHTML = `
        <h3>Name: ${pokemon.name}</h3>
        <h4>ID#: ${pokemon.id}</h4>
        <p>Types: ${pokemon.type}<p>
    `;
    const imageHTML = `<img src="${pokemon.image}" alt="Image of ${pokemon.name}">`;
    
    document.getElementById("pokemon-info").innerHTML = infoHTML;
    document.getElementById("pokemon-image").innerHTML = imageHTML;
}

document.getElementById("search-btn").addEventListener("click", findPokemon);