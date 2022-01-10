const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];


const carsByMake: string[][] = [];

//help with'map'
carMakers.map((car: string): string =>{
    return car.toUpperCase();
});

//Flexible types
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());

// Help with inference when extracting values
//prevent incompatible values
carMakers.push(); //can push string
importantDates.push(); //can push string or date