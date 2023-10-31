const Product = require('./product')

class Phone extends Product {
    constructor(price, brand, model) {
        super(price, brand);
        this.productName = 'phone'
        this.model = model
    }


}

module.exports = Phone;