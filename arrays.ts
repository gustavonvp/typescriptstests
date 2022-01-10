const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];


const carsByMake: string[][] = [];

// Help with inference when extracting values

//prevent incompatible values
carMakers.push(); //can push string

//help with'map'
carMakers.map((car: string): string =>{
    return car.toUpperCase();
});