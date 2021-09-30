import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { Pokemon } from './pokemon';

const pokemonCount = 20;
const teamSize = 6;
let pokemonOffset = 0;
let myPokemonTeam = [];

function setInnerHTML(id: string, value: string = '') {
  document.getElementById(id).innerHTML = value;
}

export function createPokemonListItem(pokemon: Pokemon, idPrefix: string): string {
  return `<li id="${idPrefix}-${pokemon.name}" class="my-hover">${pokemon.name}</li>`;
}

export function updateTeamSizeInfo() {
  document.getElementById('pokemon-team-count').innerHTML = `${myPokemonTeam.length}/${teamSize}`;
}

export function removePokemon(pokemon: Pokemon) {
  setInnerHTML('pokemon-team-warning');
  myPokemonTeam = myPokemonTeam.filter(p => p !== pokemon);
  const prefix = 'team';
  document.getElementById('pokemon-team-list').innerHTML = myPokemonTeam.map(p => createPokemonListItem(p, prefix)).join('');
  myPokemonTeam.forEach(p => document.getElementById(`${prefix}-${p.name}`).addEventListener('click', () => removePokemon(p)));
  updateTeamSizeInfo();
}

export function selectPokemon(pokemon: Pokemon) {
  setInnerHTML('pokemon-team-warning');
  if (myPokemonTeam.length >= teamSize) {
    setInnerHTML('pokemon-team-warning', `Team is full. A team has at max ${teamSize} Pokemon`);
    return;
  }
  if (myPokemonTeam.includes(pokemon)) {
    setInnerHTML('pokemon-team-warning', 'Pokemon already added');
    return;
  }
  myPokemonTeam = [...myPokemonTeam, pokemon];
  const prefix = 'team';
  document.getElementById('pokemon-team-list').innerHTML = myPokemonTeam.map(p => createPokemonListItem(p, prefix)).join('');
  myPokemonTeam.forEach(p => document.getElementById(`${prefix}-${p.name}`).addEventListener('click', () => removePokemon(p)));
  updateTeamSizeInfo();
}

export async function loadPokemon() {
  const limit = pokemonCount;
  const offset = pokemonOffset;
  // https://pokeapi.co
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(response => {
    document.getElementById('pokemon-from-to').innerHTML = `${offset}-${offset + limit}`;
    const pokemon: Array<Pokemon> = response.data.results;
    let pokemonList = '';
    const prefix = 'all';
    pokemon.forEach(p => {
      pokemonList += createPokemonListItem(p, prefix);
    });
    document.getElementById('pokemon-list').innerHTML = pokemonList;
    pokemon.forEach(p => document.getElementById(`${prefix}-${p.name}`).addEventListener('click', () => selectPokemon(p)));
  });
}

export function loadNextPokemon() {
  pokemonOffset += pokemonCount;
  loadPokemon();
}

export function loadPreviousPokemon() {
  if (pokemonOffset === 0) { return; }
  pokemonOffset -= pokemonCount;
  loadPokemon();
}
