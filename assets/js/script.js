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
    
        console.log(pokemon);
    })
    .catch((error) => console.log(error));
};

document.getElementById("search-btn").addEventListener("click", findPokemon);