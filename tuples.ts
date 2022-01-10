const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi = ['brown', true, 40];

// passing type
const pepsiTyped: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//Tuples elements are acepted with this type
// pepsi[0]= 40;
// pepsi[2] = true;

const carSpecs: [number,number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354,
}
