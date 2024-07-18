export const getPokemons = async (offset) => {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`;
  const response = await fetch(url);
  return await response.json();
};

export const getPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("getPokemonsData error: ", error);
  }
};

export const getHabilityDescription = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("getHabilityDescription error: ", error);
  }
};