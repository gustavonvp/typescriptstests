class Vehicle {
    drive(): void {console.log('chugga chugga');}

    honk(): void {
        console.log('beep');
    }


}


class Cart extends Vehicle {
    drive(): void {
        console.log('vroom');
    }
}