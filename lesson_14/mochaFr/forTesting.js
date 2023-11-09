async function sayHi(name) {
     return `Hi ${name}!`;
}

async function sayHiWithTimeout(name) {
    return new Promise((res) => {
        return setTimeout(() => {
            res(`Hi ${name}!`)
        }, 3000)
    })
}

async function getObject(...rest) {
    return rest.map(str => {
        return {
            str: str
        }
    })
}

module.exports = { sayHi, getObject, sayHiWithTimeout }