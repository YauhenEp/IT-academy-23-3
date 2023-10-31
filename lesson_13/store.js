const Phone = require('./phone')
const Tablet = require('./tablet')
const Accesories = require('./accessories')

class Store {
    constructor() {
        this.products = {};
    }

    add(product) {
        if(Object.keys(this.products).includes(`${product.brand} ${product.model}`)) {
            this.products[`${product.brand} ${product.model}`].amount++;
        } else {
            this.products[`${product.brand} ${product.model}`] = product;
            this.products[`${product.brand} ${product.model}`].amount = 1;
        }
    }

    setPrice(product, price) {
        this.products[`${product.brand} ${product.model}`].price = price;
    }

    getPrice() {
        return this.products[`${product.brand} ${product.model}`].price;
    }

    getAmountInStore() {
        let amount = 0;
        for(let product in this.products) {
            amount += this.products[product].amount;
        }
        return amount;
    }

    getAllSumInStore() {
        let sum = 0;
        for(let product in this.products) {
            sum += this.products[product].price * this.products[product].amount;
        }
        return sum;
    }
}

const newStore = new Store();
const iphone10 = new Phone(1000, 'iPhone', '10');
newStore.add(iphone10)
console.log(newStore)
newStore.add(iphone10)
console.log(newStore)
const samsungGalaxy10 = new Phone(1400, 'Samsung', 'Galaxy 10');
newStore.add(samsungGalaxy10)
console.log(newStore)

console.log(newStore.getAmountInStore())
console.log(newStore.getAllSumInStore())