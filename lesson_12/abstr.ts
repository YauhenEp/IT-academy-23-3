abstract class Car {
    static obj = {
        name: 'Yauhen'
    }

    abstract method();
}

class Truck extends Car {
    constructor() {
        super();
    }

    method() {

    }
}

const truck = new Truck();

console.log(Car.obj)