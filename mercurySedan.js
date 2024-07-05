//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numbOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passengers = num;
                return this.passengers;               
            } else {
                console.log(`${this.make} ${this.model} does not have enough space to take all passengers.`);
            }
        } else {
            console.log(`${this.make} ${this.model} is full.`);
        }
    }

    start() {
        if(this.fuel > 0) {
            return this.started = true;
        } else {
            return this.started = false;
        }
    }

    checkService() {
        if(this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }

}

let myCar = new Car("Honda", "Civic", "2019", "White", "56000");
console.log(myCar);
console.log(myCar.checkService());
console.log(myCar.loadPassenger(5));