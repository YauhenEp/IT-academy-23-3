interface Auto {
    brand: string,
    model: string,
    type: string,
    age: number,
    color: string,
    engine?: string,
    move?: (a: string, b: string) => string
}

const auto: Auto = {
    brand: 'BMW',
    model: '5 x-drive',
    type: 'sedan',
    age: 5,
    color: 'dark-blue'
}