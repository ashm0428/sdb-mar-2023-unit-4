console.log(`it works from chuck fetch`)

let jokes = [];

async function fetchJokes() {
    let url = "https://api.chucknorris.io/jokes/random";
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        console.log(data.value);
        jokes.push(data.value);
        
        clearDisplay();
        displayJoke();
    } catch (error) {
        console.error(error);
    }
}

fetchJokes();


function displayJoke() {
jokes.forEach((joke) => {
    let listItem = document.createElement("li");
    listItem.textContent = joke;
    let jokeList = document.getElementById("joke-list");
    jokeList.appendChild(listItem);
});
}

function clearDisplay() {
    let jokeList = document.getElementById("joke-list");
    while(jokeList.hasChildNodes()) {
        jokeList.removeChild(jokeList.firstChild);
    }
}

let jokeBtn = document.getElementById("joke-button");
jokeBtn.addEventListener("click", fetchJokes);