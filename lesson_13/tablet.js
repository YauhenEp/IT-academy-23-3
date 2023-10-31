const Product = require('./product')

class Tablet extends Product {
    constructor(productName, price, brand, model) {
        super(productName, price, brand);
        this.productName = 'tablet'
        this.model = model
    }
}

module.exports = Tablet;