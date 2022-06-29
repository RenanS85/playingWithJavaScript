function fullDate() {
let d = new Date
let day = d.getDate().toString()
let m = d.getMonth() +1
let month = m < 10 ? '0'+ m.toString() : m.toString()
let year = d.getFullYear().toString()
let todayDay = `Today is: ${day}/${month}/${year}`
document.getElementById('todayDate').innerText = todayDay}

function age(){
let ageStr = document.getElementById('birthday').value
let ageArray = ageStr.split('-')
let birthYear = parseInt(ageArray[0])
let birthMonth = parseInt(ageArray[1])
let birthDay = parseInt(ageArray[2])
let d = new Date
let year = d.getFullYear()
let month = d.getMonth() + 1
let day = d.getDate()
if (birthMonth == month && birthDay == day){
    document.getElementById('message').innerText = `It's your birthday! 
    now you have ${year-birthYear} years old`
}
if (birthMonth == month && day < birthDay){
    document.getElementById('message').innerText = `This mouth is your birthday! 
    ${birthDay-day} day left for it!
    you will have ${year-birthYear} years old`
}
if (birthMonth > month){
    document.getElementById('message').innerText = `You have ${year-birthYear-1} years old`
}
if (birthMonth < month || day > birthDay)
 {document.getElementById('message').innerText = `You have ${year-birthYear} years old`}
}

function sex() {
    let male = document.getElementById('M')
    let female = document.getElementById('F')
    if (male.checked){
        document.getElementById('sexImg').src = './_images/male.png'
    }
    else if (female.checked){
        document.getElementById('sexImg').src = './_images/female.png'
    }
}

