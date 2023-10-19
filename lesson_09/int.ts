interface Person {
    name: string,
    surname: string,
    age: number,
    family: Family,
    car: string
}

interface Family {
    mother: string,
    father: string,
    isBrother: boolean,
    brother?: string,
    isSister: boolean,
    sister?: string
}

const person: Person = {
    name: 'Dasha',
    surname: 'Peatrova',
    age: 18,
    car: 'BMW',
    family: {
        mother: 'Galya',
        father: 'Petya',
        isBrother: true,
        brother: 'Vasya',
        isSister: false,
    }
}