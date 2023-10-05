console.log(add(5, 5))
function add(n1, n2) {
    return n1 + n2;
}

console.log(add(5, 5))

// console.log(minus(10, 5))
const minus = function (n1, n2) {
    return n1 - n2;
}

console.log(minus(10, 5))

console.log(minus.call(null, 34, 18))
console.log(minus.apply(null, [452, 17]))

const bnd = minus.bind(null, 45, 17)
console.log(bnd());

const obj = {
    name: 'Petya',
    getName: function () {
        console.log(`Hello, ${this.name}!`)
    }
}
obj.getName();
const obj1 = {
    name: 'Dasha',
    // getName: obj.getName.bind()
}

const bnd2 = obj.getName.bind(obj1);

bnd2()

const minus1 = function (n1, n2) {
    console.log('I am running')
    n1 - n2;
}

console.log(minus1(20, 10));

// function add1(n1, n2) {
//     console.log(arguments);
//     let sum = n1 + n2;
//     if(arguments.length > 1) {
//         for(let i = 2; i < arguments.length; i++) {
//             sum += arguments[i];
//         }
//     }
//     return sum;
// }
// console.log(add1(2, 3, 10, 17, 20, 30 , 50, 51));
// console.log(add1(2, 3, 10, 17, 20, 30 , 50, 51, 2378, 3434));

function add2(n1, n2, ...rest) {
    console.log(rest);
    let sum = n1 + n2;
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

console.log(add2(2, 3, 10, 17, 20, 30 , 50, 51));
console.log(add2(2, 3, 10, 17, 20, 30 , 50, 51, 2378, 3434));