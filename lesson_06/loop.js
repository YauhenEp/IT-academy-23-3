// let a = 10;
// while(a < 10) {
//     console.log(a);
//     a++;
// }
//
// do {
//     console.log(a);
// } while (a < 10);

let str = 'new string';

// for(let i = 0; i < str.length; i++) {
//     console.log(`Letter: ${str[i]}`)
// };

// for(let letter of str) {
//     console.log(`Letter: ${letter}`)
// }

let obj = {
    name: 'd',
    surname: 'asd',
    age: 19,
    car: 'car'
}


// for(let i = 0; i < obj.length; i++) {
//     console.log(`Letter: ${obj[i]}`)
// }
// for(let property of obj) {
//     console.log(`Letter: ${property}`)
// }

// for(let attr in obj) {
//     console.log(`Property ${attr}: ${obj[attr]}`)
// }

// for(let i = 0; i < str.length; i++) {
//     if(str[i] === ' ') {
//         break
//     }
//     console.log(`Letter: ${str[i]}`)
// }

// for(let i = 0; i < str.length; i++) {
//     if(str[i] === ' ') {
//         continue
//     }
//     console.log(`Letter: ${str[i]}`)
// }

let arr = [1, 2, 3, 5, 10];
//
// let newArr = arr.map(n => n + 10);
//
// console.log(newArr)
// let newArr1 = [];
//
//  arr.forEach(n => {
//      newArr1.push(n + 10)
//  })
// console.log(newArr1)
//
// let newArr2 = arr.filter(n => n > 5)
// console.log(newArr2)

let newArr3 = arr.reduce((pred, curr) => pred + curr, 10)
console.log(newArr3);