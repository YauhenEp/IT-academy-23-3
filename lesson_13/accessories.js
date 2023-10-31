const Product = require('./product')

class Accessories extends Product {
    constructor(price, brand) {
        super(productName, price, brand);
        this.productName = 'accessories';
    }
}

module.exports = Accessories;