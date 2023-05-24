import data from "./data/pokemon/pokemon.js";


export const sortByNameAZ = (value, pokemones = data.pokemon) => {
  const sortedPokemonsByName = [...pokemones].sort((a, b) => { 
    const nameA = a.name.toLowerCase(); 
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {  
      return -1;
    }
    /*if (nameA > nameB) {
      return 1;
    }
    return 0;*/
  });

  return sortedPokemonsByName

}

export const sortByNameZA = (value, pokemones = data.pokemon) => {
  const sortedPokemonsByName = [...pokemones].sort((a, b) => { 
    const nameA = a.name.toLowerCase(); 
    const nameB = b.name.toLowerCase();

    if (nameA > nameB) {  
      return -1;
    }
    /*if (nameA < nameB) {
      return 1;
    }
    return 0;*/
  });

  return sortedPokemonsByName



}

export const sortByNumAsc = (value, pokemones = data.pokemon) => {
  const sortedPokemonsByNum = [...pokemones].sort((a, b) => { 
    const numA = a.num
    const numB = b.num

    if (numA < numB) {  
      return -1;
    }
    /*if (numA > numB) {
      return 1;
    }
    return 0;*/
  });

  return sortedPokemonsByNum

}

export const sortByNumDes = (value, pokemones = data.pokemon) => {
  const sortedPokemonsByNum = [...pokemones].sort((a, b) => { 
    const numA = a.num
    const numB = b.num

    if (numA > numB) { 
      return -1;
    }
    /*if (numA < numB) {
      return 1;
    }
    return 0;*/
  });

  return sortedPokemonsByNum

}



export const filterByType = (typeInput, pokemones = data.pokemon) => {
  const filteredPokemons = pokemones.filter((pokemon) => {
    return pokemon.type.includes(typeInput)
  })
  return filteredPokemons;
}



export const searchByName = (name, pokemones = data.pokemon) => {
  const filteredByName = pokemones.filter((pokemon) => {
    return pokemon.name.includes(name)

  })

  return filteredByName

}

