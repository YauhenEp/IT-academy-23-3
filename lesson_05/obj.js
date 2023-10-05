const obj = {};
const obj1 = {};
console.log(obj === obj1);

const obj2 = obj;
console.log(obj === obj2);

obj.name = 'YYY'

console.log(obj2);
console.log(obj);

obj2.surname = 'HHHH'
obj1.car = 'T'
console.log(obj2);
console.log(obj);
console.log(obj1);

// obj = []

obj['number of wheel'] = 4;
console.log(obj);

for(let key in obj) {
    console.log(obj[key])
}

const obj4 = {
    name: 'TRE',
    getName: function () {
        console.log(`Hello! ${this.name}!`)
    }
}

obj4.getName();

let arr = [12, 'string', [], {}, null, undefined];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let arr1 = new Array(4);
console.log(arr1);
let str = 'string string';
let arr2 = str.split('')
console.log(arr2)
console.log(arr2.join('-'));

let arr4 = [121, 1, 89, 90, 4, 5, 7, 78, 102, 15];

console.log(arr4.sort((a, b) => a - b));
console.log(arr4.sort((a, b) => b - a));

console.log(arr4.push(95));
console.log(arr4);
console.log(arr4.pop());
console.log(arr4);

console.log(arr4.unshift(95));
console.log(arr4);
console.log(arr4.shift());
console.log(arr4);