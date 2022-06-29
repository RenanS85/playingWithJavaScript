function fullDate() {
let d = new Date
let day = d.getDate().toString()
let m = d.getMonth() +1
let month = m < 10 ? '0'+ m.toString() : m.toString()
let year = d.getFullYear().toString()
let todayDay = `Today is: ${day}/${month}/${year}`
document.getElementById('todayDate').innerText = todayDay}

function mult() {
    let num = parseInt(document.getElementById('num').value)
    if (!num){
        alert('OPS, type a number')
    }
    let list = document.getElementById('list')
    for (let i = 1; i < 11; i++) {
        list.innerHTML += ` <option>${num} X ${i} = ${num*i}</option>`

    }
}