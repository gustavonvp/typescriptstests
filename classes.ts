class Vehicle {
    
    constructor(public color: string) {}
    
    protected honk(): void {
        console.log('beep');
    }


}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Cart extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(){
        this.drive();
        this.honk();
    }
}

const car2 = new Cart(4, 'red');
car2.startDrivingProcess();
