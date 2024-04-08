const getAllCharacters = () => {
    const url = `https://api.disneyapi.dev/character?pageSize=7438`;

    // Use fetch to get all characters from the api
    fetch(url)
        .then(response => {
            // Check fetch was sent correctly
            if (!response.ok) {
                throw new Error("Not found")
            } else {
                return response.json();
            }
        })
        // Create disney data
        .then(data => {
            console.log(data);
            displayCharacterList(data);
        })
        // Alert the user of the error and log to console
        .catch(error => {
            alert("An error has occurred!");
            console.log(error);
        });
};

/**
 * Creates a list of all characters in html 
 */
const displayCharacterList = (data) => {
    const characterList = document.getElementById("character-list");
    let characterHTML = "";

    for (let i = 0; i < 7438; i++) {
        characterHTML += `
            <li>
                ${data.data[i].name}
            </li>
        `
    }
    characterList.innerHTML = characterHTML;
};

getAllCharacters();