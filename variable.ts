let apples = 5;
let speed = 'fast';
let hasName =  true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();


//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,true,true];

//Classes

class Car {

}
let car: Car = new Car();

// Object Literal

let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

//Function
const logNumber: (i: number) => void = (i:number) => {
    console.log(i);
};

//When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y:number } = JSON.parse(json);
console.log(coordinates); // {X:10 y:20};
