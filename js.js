function count() {
  let a = 0;
  return function() {
    return a++
  }
}

const c = count();
console.log(c())
console.log(c())