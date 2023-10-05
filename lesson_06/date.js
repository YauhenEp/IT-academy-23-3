// let date = new Date('2020-01-01');
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(a)
// let a = 10;

// try {
//     console.log(a)
//     let a = 10;
// } catch (err) {
//     console.log(err)
// }

console.log('We can continue');

try {
    let b = 10 / 2;
    if(b === Infinity) {
        throw new Error(`you can't divide by 0`)
    }
} catch (err) {
    console.log(err)
} finally {
    console.log(`I always here`)
}

console.log('We can continue');