/* 
Three things we have to do:
1. display pokemon's picture (id="pokemon-img")
2. display the abilities (class="ability")
3. display the weight (class="weight")
- input class="search-input"
- submit button class="submit-btn"
*/

let userInput = document.querySelector(".search-input");
let searchForm = document.getElementById("search-form-id")
searchForm.addEventListener("submit", formSubmit)
function formSubmit (event){
    event.preventDefault();
    let userInputValue = userInput.value.trim().toLowerCase();
    console.log(userInputValue);
    fetchPokemon(userInputValue);
}


async function fetchPokemon(userInputValue) {
    let pokemon = userInputValue
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        let abilityNames = data.abilities.map((item) =>{
            return item.ability.name})
        let weight = data.weight;
        displayPokemon(abilityNames)
        displayPokemonImage(data.sprites.front_default);
        displayPokemonWeight(weight);
    } catch (error) {
        console.error(error);
    }
}

function displayPokemonImage(imgURL) {
    let pokemonDisplay = document.getElementById('pokemon-img');
    pokemonDisplay.src = imgURL;
}


function displayPokemon(charactersToDisplay) {
    let pokemonDisplay = document.querySelector(".ability");
    pokemonDisplay.textContent = charactersToDisplay.join(`, `);
}

function displayPokemonWeight(weightToDisplay) {
    let pokemonDisplay = document.querySelector(".weight");
    pokemonDisplay.textContent = `${weightToDisplay} `;
}
