class Person {

    readonly num = 10;
    constructor() {
    }

    private add(): void {
        console.log('Hello')
    }

    public getAdd(): void {
        this.add()
    }

    protected multiply(): void {
        console.log('Bye')
    }
}

class Child extends Person {
    constructor() {
        super();
    }

    public getMultiply() {
        this.multiply()
    }
}

const person = new Person();
const child = new Child();
// person.add();
// child.add();

child.getAdd();
person.getAdd();


child.getMultiply();
