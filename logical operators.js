// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const checks = 4 > 3 && 10 < 5         // true && false -> false
const checkz = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const checmk = 4 > 3 || 10 > 5         // true  || true -> true
const checnk = 4 > 3 || 10 < 5         // true  || false -> true
const checvk = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let checko = 4 > 3                     // true
let checku = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true


// Post increment Operator
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
// Post dcrement Operator
let counter = 0
console.log(count--) // 0
console.log(count)   // -1