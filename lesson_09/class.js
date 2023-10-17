class Person {
    constructor(name, gender) {
        this.gender = gender;
        this.name = name
    }

    static attribute = 'name';

    static getAttribute() {
        return this.attribute;
    }
}

console.log(Person)
console.log(Person.getAttribute());
console.log(Person.attribute);

const obj = {}

const person = new Person('female', 'Dasha');
const person1 = new Person('female', 'Masha');
const person2 = new Person('male', 'Petya');

console.log(person)
console.log(person1)
console.log(person2)
// person.getAttribute()
console.log(person instanceof Person)
console.log(obj instanceof Person)

class Female extends Person {
    constructor(name) {
        super(name);
        this.gender = 'female';
    }
}

console.log(Female)
console.log(Female.getAttribute());

class Girl extends Female {
    constructor(name, eyeColor) {
        super(name);
        this.age = 18;
        this.eyeColor = eyeColor
    }
}

const fem = new Female('Masha')
const girl = new Girl('Valya', 'green')
console.log(girl)
console.log(fem)
// fem.getAttribute();

class Male extends Person {
    constructor(name) {
        super(name);
        this.gender = 'male';
        this.name = name
    }
}