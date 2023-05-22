// importamos el objeto `data`, que contiene las funciones `searchByName`, `filterByType`, `sortByNum` y `sortByName`

import { searchByName, filterByType, sortByNum, sortByName } from '../src/data.js';

const bulbasaur = {
  name: "bulbasaur",
  num: "001",
  type: [
    "grass",
    "poison"
  ]
}

const charmander = {
  name: "charmander",
  num: "004",
  type: [
    "fire"
  ]
}

const squirtle = {
  name: "squirtle",
  num: "007",
  type: [
    "water"
  ]
}
const caterpie = {
  name: "caterpie",
  num: "010",
  type: [
    "bug"
  ]
}

const nidorina = {
  name: "nidorina",
  num: "030",
  type: [
    "poison"
  ]
}

const jigglypuff = {
  name: "jigglypuff",
  num: "039",
  type: [
    "normal"
  ]
}

const pkm = [bulbasaur, charmander, squirtle, caterpie, nidorina, jigglypuff]


describe('Search pokemon by name'), () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe('function');
  });

  it('returns the pokemons whose name has one of the letters written', () => {
    const inputValue1 = "bul"
    const inputValue2 = "squi"
    const inputValue3 = "nido"
    const inputValue4 = ""


    expect(searchByName(pkm, inputValue1)).toBe([bulbasaur]);
    expect(searchByName(pkm, inputValue2)).toBe([squirtle]);
    expect(searchByName(pkm, inputValue3)).toBe([nidorina]);
    expect(searchByName(pkm, inputValue4)).toBe(pkm);

  });
};



describe('Search pokemon by type', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('Returns the types of pokemon searched', () => {
  const inputTyp1 = "normal"
  const inputType2 = "water"
  const inputType3 = "fire"
  const inputTyp4 = "poison"



  expect(filterByType(pkm, inputType1)).toBe([jigglypuff]);
  expect(filterByType(pkm, inputType2)).toBe([squirtle]);
  expect(filterByType(pkm, inputType3)).toBe([charmander]);
  expect(filterByType(pkm, inputType4)).toBe([nidorina]);
});

});



describe('Search pokemon in alphabetical order', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });
  
  it('Sort the pokemon in alphabetical order', () => {
    const orderAZ = "a-z"
    const orderZA = "z-a"

    expect(sortByAZ(orderAZ, pkm)).toBe([bulbasaur, caterpie, charmander, jigglypuff, nidorina, squirtle ]);
    expect(sortByAZ(orderZA, pkm)).toBe([squirtle, nidorina, jigglypuff, charmander, caterpie, bulbasaur]);
});
});


describe('search pokemon by pokedex number', () => {
  it('is a function', () => {
    expect(typeof sortByNum).toBe('function');
  });
  
  it('sort pokemon according to pokedex number', () => {
    const order09 = "0-9"
    const order90 = "9-0"

    expect(sortByNum(order09, pkm)).toBe([bulbasaur, charmander, squirtle, caterpie, nidorina, jigglypuff ]);
    expect(sortByAZ(orderZA, pkm)).toBe([jigglypuff, nidorina, caterpie, squirtle, charmander, bulbasaur]);
});
});