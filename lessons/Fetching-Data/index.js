/* 
FETCH API

The Fetch is an asynchronous function

- We don't know how long it's going to take for the response to come back to us.
- So we must use await or we can utilize a .then()

- Wrap the fetch in a try - catch
- first variable called response
- next variable called: data or json (typically)
- use .json() after we get the response back
*/


async function fetchPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=200";

    try{
    // Basic Fetch
        let response = await fetch(url);
        let data = await response.json();
    // Doing work on the data
        
        let allPokemonCharacters = data.results;
        displayPokemon(allPokemonCharacters);
    } catch(error){
        console.error(error)
    }
}

// fetchPokemon();

/* 
The response that we get back from the API in this example is a JSON Object.

JSON = JavaScript Object Notation
*/

function displayPokemon(charactersToDisplay) {
    let pokemonDisplay = document.getElementById('display-pokemon');
    charactersToDisplay.forEach((character) => {
        let pTag = document.createElement('p');
        pTag.textContent = character.name;
        pokemonDisplay.appendChild(pTag);
    });

}


async function fetchPokemonImage() {
    let pokemon = "squirtle"
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        displayPokemonImage(data.sprites.front_default);
    } catch (error) {
        console.error(error);
    }
}

fetchPokemonImage();

function displayPokemonImage(imgURL) {
    let pokemonDisplay = document.getElementById('display-pokemon');
    let imgTag = document.createElement('img');
    imgTag.src = imgURL;
    pokemonDisplay.appendChild(imgTag);
}