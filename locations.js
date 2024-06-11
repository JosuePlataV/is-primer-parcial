const locationsContainer = document.querySelector("#locationsContainer")
const url = "https://rickandmortyapi.com/api" 

fetch(url + "/location") 
    .then(response => response.json())
    .then(json => {
        const locations = json.results
        locations.forEach(locationz => {
            const locationsTemplatez = `
        <div class="locations">
            <a href="location.html?id=${locationz.id}">
                <div class="detailz">
                <h1>${locationz.name}</h1>
                <h3>Type:</h3>
                <p>${locationz.type}</p>
                <h3>Dimension:</h3>
                <p>${locationz.dimension}</p>
                <h3>URL:</h3>
                <p>${locationz.url}</p>
            </div>
            </a>
        </div>`
            locationsContainer.innerHTML += locationsTemplatez
        })
    })