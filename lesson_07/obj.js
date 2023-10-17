const obj = {
    name: 'Dasha',
    surname: 'Petrova',
    age: 18,
    car: 'BMW'
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

obj.pets = 'dog'

let obj1 = {};

Object.defineProperty(obj1, 'name', {
    value: 'Masha'
})

Object.defineProperty(obj1, 'lastname', {
    value: 'Ivanova'
})

Object.defineProperty(obj1, 'age', {
    value: 18
})

// console.log(obj1.name);
// console.log(obj1.lastname);

obj.age = 21;
for(let k in obj) {
    console.log('1 -- ', obj[k])
}

Object.defineProperty(obj, 'age', {
    value: 18,
    enumerable: false
})

for(let k in obj) {
    console.log('2 --- ', obj[k])
}

Object.defineProperty(obj, 'age', {
    value: 21,
    enumerable: true,
    writable: false
})

obj.age = 99;
for(let k in obj) {
    console.log('3 --- ', obj[k])
}

Object.prototype.map = obj.map.f
