import '../styles/regions.scss';

const kantoImg = require('../images/kanto.jpg');
const johtoImg = require('../images/johto.jpg');
const hoennImg = require('../images/hoenn.jpg');
const sinnohImg = require('../images/sinnoh.png');
const unovaImg = require('../images/unova.png');
const kalosImg = require('../images/kalos.jpg');
const alolaImg = require('../images/alola.jpg');
const galarImg = require('../images/galar.jpg');

function regionComponent(title: string, text: string, image: any): HTMLElement {
  const wrapper = document.createElement('div');
  const headline = document.createElement('h2');
  const content = document.createElement('div');
  const paragraph = document.createElement('p');
  const img = document.createElement('img');

  wrapper.classList.add('region-component');
  headline.classList.add('region-component-headline');
  content.classList.add('region-component-content');
  img.classList.add('region-component-img');
  headline.innerHTML = title;
  paragraph.innerHTML = text;
  img.src = image;
  img.alt = `Illustrated map of ${title}`;
  img.height = 900;
  img.width = 1600;

  content.append(img, paragraph);
  wrapper.append(headline, content);
  return wrapper;
}

export default function loadImages() {
  const regionsWrapper = document.getElementById('pokemon-regions');
  regionsWrapper.append(
    regionComponent('Kanto', 'Perhaps the most famous of the Pokemon regions is Kanto, the setting for the first generation of games. Players traverse Kanto in the original Japanese Red and Green titles, the American Red, Blue, and Yellow releases, FireRed and LeafGreen, and the Let’s Go, Pikachu! and Eevee! titles. It even appears in the Generation 2 games, connected in the east to Johto.', kantoImg),
    regionComponent('Johto', 'To the west of Kanto lies the Johto region, the setting for the second generation of Pokemon games, including Silver, Gold, Crystal, and their remakes HeartGold and SoulSilver. It is part of a landmass bordered by coastline at the south, and this region introduced 100 new Pokemon in addition to the previously discovered Gen 1 species.', johtoImg),
    regionComponent('Hoenn', 'The Hoenn region was separated from the Kanto/Johto landmass as the setting in Generation 3, spanning Ruby, Sapphire, Emerald, and the Omega Ruby and Alpha Sapphire remakes. Based on the island of Kyushu, the region features a great deal of water to balance the landmass, in keeping with the lore of primal Groudon and Kyogre being the titans of land and sea. Most of the towns in Hoenn are immersed in nature, some only being accessible by travel through and even beneath water.', hoennImg),
    regionComponent('Sinnoh', 'To the north of Hoenn, players were introduced to Sinnoh, an island region in Pokemon taking after Japan’s own northernmost territory, Hokkaido. This region is where the Generation 4 Pokemon games took place, including Diamond, Pearl, Platinum, and the upcoming Brilliant Diamond, Shining Pearl, and Legends: Arceus titles.', sinnohImg),
    regionComponent('Unova', 'Moving out of the Japanese-themed regions, Generation 5’s Unova region was actually inspired by New York City, reflected in the metropolitan regions, more specifically themed Pokemon (like the fan-favorites Garbodor, a garbage Pokemon, and Vanillite, an ice cream Pokemon), and more. Despite the overall layout being based on New York City, there are landmarks from throughout the state that make up the entire region.', unovaImg),
    regionComponent('Kalos', 'The Kalos region is the sixth region to be introduced, serving as the setting for Pokemon X and Y. Shaped like a 5-pointed star, the area is inspired by metropolitan France, with city names like Lumiose and Shalour reflecting this influence. Froakie, Chespin, and Fennekin are the starters featured here. Unlike many of the other regions in earlier games, Kalos is isolated from other regions- in fact, in the Pokemon anime series, it must be reached by airplane.', kalosImg),
    regionComponent('Alola', 'Alola is a unique region in the Pokemon world, split into four natural islands and one manmade island. Inspired by Hawaii, it is the backdrop for the Generation 7 Pokemon games Sun, Ultra Sun, Moon, and Ultra Moon. Within the game world, it is a popular tourist destination and all towns and cities are very integrated with nature.', alolaImg),
    regionComponent('Galar', 'The eighth region in the Pokemon series, Galar is one of the first to have more of its landmass added after the core title of the game, featured in the Crown Tundra and Isle of Armor expansions. Notably inspired by Great Britain (as if viewed upside-down), Galar incorporates cultural references from England, Wales, and Scotland into its topography and cities.', galarImg),
  );
  document.getElementById('region-count').innerHTML = `${regionsWrapper.children.length}`;
}
