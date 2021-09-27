import './styles/style.scss';
import axios from 'axios';

console.log('Hello npm project!');

const pokemonCount = 20;
const pokemonOffset = 0;
interface Pokemon {
    name: string,
    url: string, // for more detail infos
}

function loadPokemon(limit, offset) {
  // https://pokeapi.co
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(response => {
    document.getElementById('pokemon-from-to').innerHTML = `${offset}-${offset + limit}`;
    const pokemon: Array<Pokemon> = response.data.results;
    let pokemonList = '';
    pokemon.forEach(p => {
      pokemonList += `<li>${p.name}</li>`;
    });
    document.getElementById('pokemon-list').innerHTML = pokemonList;
  });
}
loadPokemon(pokemonCount, pokemonOffset);
