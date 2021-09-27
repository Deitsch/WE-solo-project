import './styles/style.scss';
import axios from 'axios';
// TODO: ask leon why this doesnt work!!
// eslint-disable-next-line import/no-unresolved
import { Pokemon } from './pokemon';

console.log('Hello npm project!');

const pokemonCount = 20;
let pokemonOffset = 0;

function loadPokemon(limit: number, offset: number) {
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

function loadNextPokemon() {
  pokemonOffset += pokemonCount;
  loadPokemon(pokemonCount, pokemonOffset);
}

function loadPreviousPokemon() {
  if (pokemonOffset === 0) { return; }
  pokemonOffset -= pokemonCount;
  loadPokemon(pokemonCount, pokemonOffset);
}

// eslint-disable-next-line no-unused-vars
function selectPokemon(pokemon: Pokemon) {
  console.log(pokemon);
}

loadPokemon(pokemonCount, pokemonOffset);
document.getElementById('pokemon-load-next').addEventListener('click', loadNextPokemon);
document.getElementById('pokemon-load-previous').addEventListener('click', loadPreviousPokemon);
