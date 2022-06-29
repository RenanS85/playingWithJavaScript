function fullDate() {
let d = new Date
let day = d.getDate().toString()
let m = d.getMonth() +1
let month = m < 10 ? '0'+ m.toString() : m.toString()
let year = d.getFullYear().toString()
let todayDay = `Today is: ${day}/${month}/${year}`
document.getElementById('todayDate').innerText = todayDay}

function createList(numbersArray) {
let num = parseInt(document.getElementById('num').value)
let exist = numbersArray.indexOf(num)!=-1 ? alert('Number already add') : null
let valid = num > 100 || num < 1 ? alert('Just 1 to 100, please') : null
if (numbersArray.indexOf(num) == -1 && 1<=num && num<=100) {
    numbersArray.push(num)
    console.log(numbersArray)
    document.getElementById('list').innerHTML +=`<option>${num} add</option>`}
    
}

function anal(numbersArray) {
    let div = document.getElementById('analizes')
    let sum = 0
    for (n of numbersArray){
        sum+=n
    }
    let s = numbersArray.sort()
    div.innerHTML += `<p>Total: ${numbersArray.length} </p>`
    div.innerHTML += `<p>higher: ${s[numbersArray.length-1]} </p>`
    div.innerHTML += `<p>Lower: ${s[0]} </p>`
    div.innerHTML += `<p>Sum: ${sum} </p>`
}

numbers = []
