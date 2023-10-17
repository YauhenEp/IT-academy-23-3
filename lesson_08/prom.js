const statusCode = 200;

// new Promise((res, rej) => {
//     if(statusCode === 200) {
//         return res(`Success ${statusCode}`)
//     }
//     return rej(`Error backend return ${statusCode}`)
// })
// .then(data => {
//     console.log(data)
//     if(data.includes('200')) {
//         return {
//             name: 'sasdfas',
//             price: '200'
//         }
//     }
// })
// .then(data => {
//     // console.log(a);
//     // let a;
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err);
//     console.log('Sorry you catch us. We will fix this error. Please try another page')
// })
// .finally(() => {
//     console.log(`I'm always here`)
// })
//
// async function add() {
//     const arr = await (10 + 20 + 40);
//     return arr
// };
//
// const a = add()
// console.log(a);

function resPromise(value) {
    return Promise.resolve(value);
}

function rejPromise(error) {
    return Promise.reject(error);
}

function getPromise(state, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(state === 'resolve') {
                res(timeout)
            }
            rej(timeout)
        }, timeout)
    })
}

// Promise.all([resPromise(10), resPromise(20), resPromise(30), resPromise(40), rejPromise('Error')])
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })

// Promise.race([getPromise('resolve', 1000), getPromise('resolve', 2000), getPromise('reject', 500)])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error - ' + err)
//     })

// Promise.any([getPromise('resolve', 1000), getPromise('resolve', 2000), getPromise('reject', 500)])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error - ' + err)
//     })


Promise.allSettled([resPromise(10), resPromise(20), resPromise(30), resPromise(40), rejPromise('Error')])
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})