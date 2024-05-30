const container = document.querySelector("#container")
const url = "https://rickandmortyapi.com/api" 

fetch(url + "/character") 
    .then(response => response.json())
    .then(json => {
        const characters = json.results
        characters.forEach(character => {
            container.innerHTML += character.name
        })
    })