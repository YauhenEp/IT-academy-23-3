// function getFibonachi(number) {
//     return number <= 1 ? number : getFibonachi(number - 1) + getFibonachi(number - 2);
// };
//
// console.log(getFibonachi(9))

function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
}

Person.prototype.move = function () {
    console.log('Mooving')
}

Person.prototype.toString = function () {
    console.log('Mooving')
}
const dasha = new Person('Dasha', 'blue', 25)
console.log(dasha);


const Car = function (speed, color) {
    this.speed = speed;
    this.color = color;
}
function inherit(child, parent) {
    const F = function () {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}

const Ford = function (color) {
    Car.call(this, 150);
    this.color = 'red'
}

console.log(inherit(Ford, Car));
