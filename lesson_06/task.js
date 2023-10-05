console.log(12 % 3);

let a = 130
console.log(++a)
console.log(a)

console.log(--a)
console.log(a)

console.log(true && 0 && 1);
console.log(0 || 0 || '');

// const ENV = process.env.ENV || argv.ENV || 'dev';
// console.log(process);

// console.log(global);

if(a < 10) {
    console.log('Cartoons')
} else if (a >= 10 && a <18) {
    console.log('Child movies')
} else if (a >= 18 && a < 21) {
    console.log('Movies')
} else {
    console.log('21+')
}
let m = 13;
switch (m) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    default:
        console.log('Not a month')
}
let name = 'global scope'
const obj = {
    name: 'object scope',
    gerName: function () {
        console.log(this.name);
    },
    gerName1: function () {
        console.log(name);
    }
}
obj.gerName()
obj.gerName1()



