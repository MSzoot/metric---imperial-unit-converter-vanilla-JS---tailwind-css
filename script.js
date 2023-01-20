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
    length.textContent = `${number.value} meters = ${parseFloat(number.value * 3.281).toFixed(1)} feet  ||   ${number.value} feet = ${parseFloat(number.value / 3.281).toFixed(1)} meters `
    volume.textContent = `${number.value} liters = ${parseFloat(number.value * 0.264).toFixed(1)} gallons  ||   ${number.value} gallon = ${parseFloat(number.value / 0.264).toFixed(1)} liters `
    mass.textContent = `${number.value} kilograms = ${parseFloat(number.value * 2.204).toFixed(1)} pounds   ||   ${number.value} pounds = ${parseFloat(number.value / 2.204).toFixed(1)} kilograms `

}




