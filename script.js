// Función principal para consumir el endpoint y mostrar los datos en el front
async function fetchAndDisplayPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        const pokemonList = data.results.slice(0, 20);

        pokemonList.forEach(async (pokemon) => {
            const card = document.createElement('div');
            const name = document.createElement('h2');
            const image = document.createElement('img');

            name.textContent = pokemon.name;
            const pokemonData = await fetch(pokemon.url);
            const pokemonDetails = await pokemonData.json();
            image.src = pokemonDetails.sprites.front_default;

            card.appendChild(image);
            card.appendChild(name);

            card.style.border = '1px solid #ccc';
            card.style.flex = '1';
            card.style.borderRadius = '2%';
            card.style.padding = '2%';
            card.style.margin = '2%';
            card.style.backgroundColor = '#f7f7f7';
            card.style.width = '150px';
            card.style.height = '150px';

            card.style.display = 'flex';
            card.style.flexWrap = 'wrap';
            card.style.justifyContent = 'center';

            name.style.fontWeight = 'bold';
            name.style.fontSize = '12px';
            name.style.textTransform = 'capitalize';

            image.style.width = '80%';

            document.getElementById('pokemon-container').appendChild(card);
        });
    } catch (error) {
        console.error('Error al consumir el endpoint:', error);
    }
}

fetchAndDisplayPokemon();