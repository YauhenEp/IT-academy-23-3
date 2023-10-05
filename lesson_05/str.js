let str = "Hello IT!"
let str1 = 'Hello IT!'
let str2 = `Hello IT!`

console.log(str === str1)
console.log(str === str2)

function greet(name, surname, greet = 'Hi') {
    console.log(greet + '! ' + name + ' ' + surname + '! How are you?')
}
greet('Dasha', 'Petrova')

function greet1(name, surname, greet = 'Hi') {
    console.log(`${greet}! ${name} ${surname}! How are you?`)
}
greet1('Dasha', 'Petrova');

let str3 = 'string string'
console.log(str3.charAt(0));
console.log(str3[0]);

console.log(str3.indexOf('rin'))
console.log(str3.lastIndexOf('rin'))

console.log(str3.replace('rin', '34'))
console.log(str3.replace(/rin/g, '34'))

console.log(str3.slice(3, 5))

console.log(str3.split(' ', 2))

console.log(str3.valueOf())

let obj = {
    name: 'Y'
}
let obj1 = new Object();

console.log(obj1.valueOf());
