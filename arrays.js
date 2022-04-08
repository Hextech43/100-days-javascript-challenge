// Concating array using concat
const ade = [10,4,6,1,0,7]
const ayo = [45,34]

const join = ade.concat(ayo)

console.log(join)


// getting the index of elements by their value
const num = [10,4,6,1,0,7]
console.log(num.indexOf(7))
// This returns -1 since the valie does not exist
console.log(num.indexOf(9))


// Checking if an element exists in an array
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}


// // we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if a avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
