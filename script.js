/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const inputEl = document.querySelector('#input-converter');
const lengthEl = document.querySelector('#length-converter');
const volumeEl = document.querySelector('#volume-converter');
const massEl = document.querySelector('#mass-converter');
const btnEl = document.querySelector('#btn-converter');

function convertLength(input, length){
    const feet = 3.281
    let feetValue = input * feet
    let meterValue = input / feet
    length.textContent = `${input} meters = ${feetValue.toFixed(3)} feet | ${input} feet = ${meterValue.toFixed(3)} meters`
}

function convertVolume(input, volume){
    const gallon = 0.264
    let gallonValue = input * gallon
    let literValue = input / gallon
    volume.textContent = `${input} liters = ${gallonValue.toFixed(3)} gallon | ${input} gallon = ${literValue.toFixed(3)} liters`
}

function convertMass(input, mass){
    const pound = 2.204
    let poundValue = input * pound
    let kiloValue = input / pound
    mass.textContent = `${input} kilos = ${poundValue.toFixed(3)} pound | ${input} pound = ${kiloValue.toFixed(3)} kilos`
}

btnEl.addEventListener("click", () => {
    convertLength(inputEl.value, lengthEl)
    convertVolume(inputEl.value, volumeEl)
    convertMass(inputEl.value, massEl)
    inputEl.value = ""
})