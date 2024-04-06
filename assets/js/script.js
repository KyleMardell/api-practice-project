// Pokemon search

const findPokemon = () => { 
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
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
        };
    
        console.log(pokemon);
    })
    .catch((error) => console.log(error));
};

findPokemon();