import {
  searchByName,
  filterByType,
  sortByName,
  sortByNum,
} from "../src/data.js";

const bulbasaur = {
  num: "001",
  name: "bulbasaur",
  type: ["grass", "poison"],
};

const charmander = {
  num: "004",
  name: "charmander",
  type: ["fire"],
};

const squirtle = {
  num: "007",
  name: "squirtle",
  type: ["water"],
};

const testPkm = [charmander, squirtle, bulbasaur, squirtle];

describe("Search pokemon by name", () => {
  it("is a function", () => {
    expect(typeof searchByName).toBe("function");
  });

  it("returns the pokemons whose name has one of the letters written", () => {
    const inputValue1 = "bulb";
    const inputValue2 = "squi";
    const inputValue3 = "charm";
    const inputValue4 = "";

    expect(searchByName(inputValue1, testPkm)).toEqual([bulbasaur]);
    expect(searchByName(inputValue2, testPkm)).toEqual([squirtle, squirtle]);
    expect(searchByName(inputValue3, testPkm)).toEqual([charmander]);
    expect(searchByName(inputValue4, testPkm)).toEqual(testPkm);
  });
});

describe("Search pokemon by type", () => {
  it("is a function", () => {
    expect(typeof filterByType).toBe("function");
  });

  it("Returns the types of pokemon searched", () => {
    const inputType2 = "water";
    const inputType3 = "fire";
    const inputType4 = "grass";

    expect(filterByType(inputType2, testPkm)).toEqual([squirtle, squirtle]);
    expect(filterByType(inputType3, testPkm)).toEqual([charmander]);
    expect(filterByType(inputType4, testPkm)).toEqual([bulbasaur]);
  });
});

describe("Sort pokemon by name", () => {
  it("is a function", () => {
    expect(typeof sortByName).toBe("function");
  });

  it("Sorts the pokemon in alphabetical order A-Z", () => {
    const orderAZ = "a-z";
    const pokemones = testPkm;
    expect(sortByName(orderAZ, pokemones)).toEqual([
      bulbasaur,
      charmander,
      squirtle,
      squirtle,
    ]);
  });

  it("Sorts the pokemon in alphabetical order Z-A", () => {
    const orderZA = "z-a";
    const pokemones = testPkm;
    expect(sortByName(orderZA, pokemones)).toEqual([
      squirtle,
      squirtle,
      charmander,
      bulbasaur,
    ]);
  });

  it('returns the original pokemon list when order value is invalid', () => {
    const orderInvalid = 'invalid';
    const pokemones = testPkm;
    expect(sortByName( orderInvalid, pokemones)).toEqual(testPkm);
  });
});

describe("search pokemon by pokedex number ascending", () => {
  it("is a function", () => {
    expect(typeof sortByNum).toBe("function");
  });

  it("sorts pokemon according to pokedex number in ascending order", () => {
    const orderAsc = "asc";
    const pokemones = testPkm;

    expect(sortByNum(orderAsc, pokemones)).toEqual([
      bulbasaur,
      charmander,
      squirtle,
      squirtle,
    ]);
  });

  it('returns the original pokemon list when order value is invalid', () => {
    const orderInvalid = 'invalid';
    const pokemones = testPkm;
    expect(sortByNum(orderInvalid, pokemones)).toEqual(testPkm);
  });
});

describe("search pokemon by pokedex number descending", () => {
  it("is a function", () => {
    expect(typeof sortByNum).toBe("function");
  });

  it("sorts pokemon according to pokedex number in descending order", () => {
    const orderDes = "desc";
    const pokemones = testPkm;

    expect(sortByNum(orderDes, pokemones)).toEqual([
      squirtle,
      squirtle,
      charmander,
      bulbasaur,
    ]);
  });
  it('returns the original pokemon list when order value is invalid', () => {
    const orderInvalid = 'invalid';
    const pokemones = testPkm;
    expect(sortByNum(orderInvalid, pokemones)).toEqual(testPkm);
  });
});
