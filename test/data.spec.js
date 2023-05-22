
import { searchByName, filterByType} from '../src/data.js';


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

