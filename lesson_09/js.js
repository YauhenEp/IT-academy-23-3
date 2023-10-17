const env = require("./env.json");

console.log(env.DEV.US)

const obj = {
    name: 'Ya',
}

const str = JSON.stringify(env)
console.log(typeof JSON.stringify(env))
console.log(typeof JSON.parse(str))