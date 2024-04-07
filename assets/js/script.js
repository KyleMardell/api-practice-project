
// Pokemon search
const findPokemon = () => { 
    
    const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // Use fetch to get information from pokeapi.co
    fetch(url)
        .then(response => {
            // Check pokemon exists, if not throw error
            if(!response.ok){
                throw new Error("Pokemon not found")
            } else {
                return response.json();
            }
    })
    // Create pokemon object and use data from api in json format
    .then(data => {
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            type: data.types.map(type => type.type.name).join(", "),
            weight: data.weight / 10,
            height: data.height / 10
        };
        // Call display function to show pokemon on html page
        displayPokemon(pokemon);
    })
    // Alert the user of the error and log to console
    .catch(error => {
        alert("Cannot find Pokemon by Name or ID");
        console.log(error);
    });
};

// Display pokemon
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    // Create info html
    const infoHTML = `
        <h3>Name: ${pokemon.name}</h3>
        <p>ID: ${pokemon.id}</p>
        <p>Weight: ${pokemon.weight} kg</p>
        <p>Height: ${pokemon.height} meters</p>
        <p>Types: ${pokemon.type}<p>
    `;
    // Create image html
    const imageHTML = `<img src="${pokemon.image}" alt="Image of ${pokemon.name}">`;
    
    // Set the html to the elements via the DOM
    document.getElementById("pokemon-info").innerHTML = infoHTML;
    document.getElementById("pokemon-image").innerHTML = imageHTML;
}

// Button event listener, calling findPokemon method
document.getElementById("search-btn").addEventListener("click", findPokemon);