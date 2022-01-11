class Vehicle {
    honk(): void {
        console.log('beep');
    }


}


class Cart extends Vehicle {
    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(){
        this.drive();
    }
}

const car2 = new Cart();
car2.startDrivingProcess();
car2.honk();