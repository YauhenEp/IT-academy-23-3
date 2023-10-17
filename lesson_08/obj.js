const person = {
    name: 'Dacha',
    surname: 'Icanova',
    age: 25,
    family: {
        mother: {
            name: 'Masha'
        },
        father: {
            name: 'Petya'
        },
    }
}

const car = {
    numberOfWheel: 4,
    model: 'X5',
    color: 'green'
}

const dasha = {
    ...person,
    car: {
        ...car
    }
}

console.log(dasha)

person.name = 'Dasha';
console.log(dasha)
console.log(person)

const {name, surname, age} = person;

console.log(name);
console.log(surname);
console.log(age);

let arr = [10, 20, 30, 40, 50, 60];
const [n1, n2, n3, ...numbers] = arr;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(numbers);