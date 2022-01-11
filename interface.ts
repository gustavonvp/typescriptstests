interface Reportable {
    summary(): string;
}

interface Vehicle {
   name: string;
   year: Date;
   broken: boolean;
   summary(): string;
}

const oldCivic = {
name: 'civic',
year: new Date(),
broken: true,
summary(): string {
        return 'Name: ${this.name}';
}
};

const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printVehicle = (vehicle:Vehicle ): void => {
        console.log(`Name: ${vehicle.name}`);
        console.log(`Year: ${vehicle.year}`);
        console.log(`Broken? ${vehicle.broken}`);
        
       
}

const printVehicleSumary = (vehicle: Reportable): void => {
    console.log(vehicle.summary);
}

const printSumarry = (item: Reportable): void => {
    console.log(item.summary);
}

printVehicleSumary(oldCivic)
printSumarry(drinks);


