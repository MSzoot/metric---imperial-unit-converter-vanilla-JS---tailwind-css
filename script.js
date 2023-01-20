/*      DATA
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// ID's to variables
const number  = document.getElementById("number");
const btn = document.getElementById("btn");
const length = document.getElementById("Length");
const volume = document.getElementById("Volume");
const mass = document.getElementById("Mass");


let convert = ()=> {
    length.textContent = `${number.value} meters = ${number.value * 3.281.toFixed(2)}   ||   ${number.value} feet = ${number.value / 3.281.toFixed(2)} `

}




