const str = 'string';

/**
 *
 * @param number -
 * @param str -
 * @param bool -
 * @returns {*}
 * @example 2
 *
 */
function add(number, str, bool, ...rest) {
  return number;
}

const obj = {
  car: 'Toyota',
  age: 4,
  numberOfWheel: 4,
};

const obj1 = {
  name: 'Anya',
  hasCar: true,
  car: {
    ...obj,
  },
};

console.log(obj1);

obj.car = 'Mazda';
console.log(obj1);
