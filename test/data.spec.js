import { searchByName, filterByType, sortByNameAZ, sortByNameZA, sortByNumDes, sortByNumAsc} from '../src/data.js';


const bulbasaur = {
  name: "bulbasaur",
  type: [
    "grass",
    "poison"
  ]
}

const charmander = {
  name: "charmander",
  type: [
    "fire"
  ]
}

const squirtle = {
  name: "squirtle",
  type: [
    "water"
  ]
}
const testPkm = [bulbasaur, charmander, squirtle]
const testPkm1 = [squirtle, charmander, bulbasaur]

describe('Search pokemon by name', () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe('function');
  });

  it('returns the pokemons whose name has one of the letters written', () => {
    const inputValue1 = "bulb"
    const inputValue2 = "squi"
    const inputValue3 = "charm"
    const inputValue4 = ""


    expect(searchByName(inputValue1, testPkm)).toEqual([bulbasaur]);
    expect(searchByName(inputValue2, testPkm)).toEqual([squirtle]);
    expect(searchByName(inputValue3, testPkm)).toEqual([charmander]);
    expect(searchByName(inputValue4, testPkm)).toEqual(testPkm);

  });
});

describe('Search pokemon by type', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('Returns the types of pokemon searched', () => {
    
    const inputType2 = "water"
    const inputType3 = "fire"
    const inputType4 = "grass"




    expect(filterByType(inputType2, testPkm)).toEqual([squirtle]);
    expect(filterByType(inputType3, testPkm)).toEqual([charmander]);
    expect(filterByType(inputType4, testPkm)).toEqual([bulbasaur]);
  });

});

describe('Search pokemon in alphabetical order A-Z', () => {
  it('is a function', () => {
    expect(typeof sortByNameAZ).toBe('function');
  });
  
  it('Sort the pokemon in alphabetical order', () => {
    const orderAZ = "a-z"
    

    expect(sortByNameAZ(orderAZ, testPkm)).toEqual([bulbasaur, charmander, squirtle]);
    
  });
});

describe('Search pokemon in alphabetical order Z-A', () => {
  it('is a function', () => {
    expect(typeof sortByNameZA).toBe('function');
  });
  
  it('Sort the pokemon in alphabetical order', () => {
    const orderZA = "z-a"

    expect(sortByNameZA(orderZA, testPkm)).toEqual([squirtle, charmander, bulbasaur]);
  });
});

describe('search pokemon by pokedex number ascending', () => {
  it('is a function', () => {
    expect(typeof sortByNumAsc).toBe('function');
  });
  
  it('sort pokemon according to pokedex number', () => {
    const orderAsc = "0-9"
    
    expect(sortByNumAsc(orderAsc, testPkm)).toEqual([bulbasaur, charmander, squirtle]);
    
  });
});


describe('search pokemon by pokedex number descending', () => {
  it('is a function', () => {
    expect(typeof sortByNumDes).toBe('function');
  });
  
  it('sort pokemon according to pokedex number', () => {
    const orderDes = "9-0"
    


    expect(sortByNumDes(orderDes, testPkm1)).toEqual([squirtle, charmander, bulbasaur]);
    
  });
});