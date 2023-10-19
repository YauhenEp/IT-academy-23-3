class Person {
    static add() {
        console.log('I am here')
    }

    minus() {
        console.log('I am only in object!')
    }
}

Person.add();
// Person.minus()

const person = new Person();

person.minus();
// person.add();

class Girl extends Person {

}

Girl.add();

const girl = new Girl();
// girl.add();