const url = window.location.search
const urlParamz = new URLSearchParams(url)
const id = urlParamz.get('id')
const urlAPIS = "https://rickandmortyapi.com/api" 

fetch(urlAPIS + "/location/" + id)  
    .then(response => response.json())
    .then(location => {
    const locationTemplate = `
        <div id="location">
            <div class="details">
                <h2>${location.status} - ${location.species}</h2>
                <p>Last known location:</p>
                <p>${location.origin.name}</p>
                <p>First seen in:</p>
                <p>${location.location.name}</p>
            </div>
        </div>`
    locationContainer.innerHTML += locationTemplate
    }) 