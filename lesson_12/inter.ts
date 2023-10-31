import {Car} from "./ts";

interface Auto {
    brand: string,
    model: string,
    type: string,
    age: number,
    color: string,
    engine?: string,
    move?: (a: string, b: string) => string,
    list: Car,
}

const auto: Auto = {
    brand: 'BMW',
    model: '5 x-drive',
    type: 'sedan',
    age: 5,
    color: 'dark-blue',
    list: Car.Honda,
}

interface Person {
    name: string
}

type ABS = Person | Auto;

type Cars = {
    brand: string,
    model: string,
    type: string,
    age: number,
    color: string,
    engine?: string,
    move?: (a: string, b: string) => string,
    list: Car,
}
