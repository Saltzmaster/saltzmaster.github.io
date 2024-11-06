const placeInput = document.getElementById('place');
const placeSuggestions = document.getElementById('placeSuggestions');

placeInput.addEventListener('input', async function () {
    const query = placeInput.value;
    // Only fetch after 3 characters have been entered
    if (query.length < 3) return;

    const response = await fetch(`https://api.inaturalist.org/v1/places/autocomplete?q=${query}`);
    const data = await response.json();

    data.results.forEach(place => {
        const option = document.createElement('option');
        option.value = place.display_name;
        option.setAttribute('data-id', place.id);
        placeSuggestions.appendChild(option);
    });
});

document.getElementById('placeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const selectedPlaceName = placeInput.value;
    const selectedPlace = Array.from(placeSuggestions.options).find(
        option => option.value === selectedPlaceName
    );

    const placeId = selectedPlace.getAttribute('data-id');
    fetchIdentifications(placeId);
});

async function fetchIdentifications(placeId) {
    const response = await fetch(`https://api.inaturalist.org/v1/identifications?current=true&place_id=${placeId}&order=desc&order_by=created_at`);
    const data = await response.json();
    displayResults(data.results);
}

function displayResults(results) {
    const container = document.getElementById('resultsContainer');

    results.forEach(identification => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const name = document.createElement('h3');
        name.textContent = identification.observation?.taxon?.preferred_common_name
    
        const img = document.createElement('img');
        img.src = identification.observation?.photos?.[0]?.url;
        img.alt = name.textContent;
    
        card.appendChild(name);
        card.appendChild(img);
        container.appendChild(card);
    });
}    