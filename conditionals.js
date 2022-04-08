// // if else if else
// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }


// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:



let output = document.getElementById("Sometext");
let x = prompt("Enter your score");

if(x >=80){
output.innerHTML = "You have got an A"
} else if(x<=100){
   
    output.innerHTML = "You have got an A"
} else if (x>=69){
    output.innerHTML = "You have got a B"
} else{
    output.innerHTML = "You have got a z"
}