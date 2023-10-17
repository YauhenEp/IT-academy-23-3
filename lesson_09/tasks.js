// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после
// которой промис должен зарезолвится (то есть выполнится успешно).

// new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Success')
//     }, 3000)
// })
//     .then(data => {
//         console.log(data)
//     })

//Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис
// должен зареджектится (то есть выполнится с ошибкой).
// new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('Error')
//     }, 3000)
// })
//     .catch(err => {
//         console.log(err)
//     })
// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы
// сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6
// до 10.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}
// new Promise((res, rej) => {
//     const result = getRandom(1, 10);
//     setTimeout(() => {
//         if(result <= 5) {
//             res(`Success ${result}`)
//         } else {
//             rej(`Error ${result}`)
//         }
//
//     }, result * 1000)
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })


// Сделайте промис, который через 5 секунд случайным образом выполнится или с успехом,
// или с ошибкой. Примените изученный метод catch для отлавливания ошибок.


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// промиса. После окончания манипуляций выведите число консоль лог на экран.

function getPromise(number, timeout = 3000) {
    return new Promise((res) => {
        setTimeout(() => {
            res(number * number);
        }, timeout)
    })
}

// new Promise((res, rej) => {
//     const num = getRandom(1, 10);
//     console.log(num)
//     res(num);
// })
//     .then((number) => {
//         return getPromise(number);
//     })
//     .then((number) => {
//         return getPromise(number);
//     })
//     .then((number) => {
//         return getPromise(number);
//     })
//     .then((number) => {
//         console.log(number)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getPromiseWithRandom() {
    return new Promise((res) => {
        const timeout = getRandom(1, 5);
        setTimeout(() => {
            res(timeout)
        }, timeout * 1000)
    })
}

const prom1 = getPromiseWithRandom();
const prom3 = getPromiseWithRandom();
const prom2 = getPromiseWithRandom();

Promise.all([prom1, prom2, prom3])
.then(data => console.log(data))