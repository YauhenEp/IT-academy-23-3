function Parent (name = 'Adam') {
    this.name = name;
}

Parent.prototype.say = function () {
    console.log(this.name)
}

function Child(name) {}

function inherit (parent, child) {
    child.prototype = new parent(this);
}

inherit(Parent, Child);

let child = new Child('Martin');
console.log(child)

child.say()

// function Child() {
//     Parent.apply(this, arguments);
// }
//
// Child.prototype = new Parent();
//
// const child = new Child();
// child.say();


// function inherit (parent, child) {
//     console.log('parent --- ', parent)
//     console.log('child --- ', child)
//     const Constructor = function () {};
//     console.log(Constructor)
//     Constructor.prototype = parent.prototype;
//     console.log(Constructor)
//     child.prototype = new Constructor();
//     console.log(child.prototype)
//     child.uber = parent.prototype;
//     console.log('parent.prototype --- ', parent.prototype)
//     console.log('child --- ', child)
//     child.prototype.constructor = child;
//     console.log('child.prototype --- ', child.prototype)
// }
//
// inherit(Parent, Child);
// const child = new Child('Adam');
// child.say()
// console.log(child.name)