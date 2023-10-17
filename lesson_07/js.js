// function greet(name, surname, greet = 'Hi') {
//     console.log(`${greet}! ${name} ${surname}, how are you?`)
// }
// greet('Masha', 'Petrova');
// greet('Masha', 'Petrova', 'Hello');
//
// const newVar = 'Hello';
//
// function add() {
//     console.log(newVar);
//     const hello = 'Hi';
//     console.log(hello);
// }
// add()
//
// // console.log(hello)
//
// function count() {
//     let counter = 0;
//     return function () {
//         return counter++;
//     }
// }

// const c = count();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
//
// const c1 = count();
// console.log(c1());
// console.log(c1());


// function getTestResult() {
//     let result = [];
//     return function(obj) {
//         result.push(obj);
//         return result;
//     }
// }
// const testResult = {testStatus: 'failed', error: '', caseNumber: 11}
// const testResult1 = {testStatus: 'passed', caseNumber: 12}
// let result = getTestResult();
// console.log(result(testResult))
// console.log(result(testResult1))
//
// let arr = [1, 3, 5, 7]
// let newArr = arr.map((n) => {
//     console.log('arguments --- ', arguments)
//     return n * 2
// })
//
// let newArr1 = arr.map(n => n * 2);
// let newArr2 = arr.map(function (n) {
//     return n * 2
// });
// console.log(newArr);
// console.log(newArr1);
// console.log(newArr2);

// const obj = {
//     name: 'Dasha',
//     getName: () => {
//         console.log(`Hello, ${this.name}!`)
//     },
//     getName1: function () {
//         console.log(`Hello, ${this.name}!`)
//     }
// }
//
// obj.getName1()
// obj.getName()

// (function () {
//     console.log('Hello self invoked function')
// })();

const result = (function fn(fn) {
    return fn();
})(function () {
    return 2;
});
console.log(result);

const obj1 = {
    arr: [1, 2, 3, 5, 6],
    // map: function() {
    //     console.log('Mapping')
    // }
}

obj1.prototype.map = function (arr) {
    console.log(`filtering array ${arr}`)
}
obj1.map();