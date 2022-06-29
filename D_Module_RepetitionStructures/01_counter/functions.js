function fullDate() {
let d = new Date
let day = d.getDate().toString()
let m = d.getMonth() +1
let month = m < 10 ? '0'+ m.toString() : m.toString()
let year = d.getFullYear().toString()
let todayDay = `Today is: ${day}/${month}/${year}`
document.getElementById('todayDate').innerText = todayDay}

function count() {
let begin = parseInt(document.getElementById('begin').value)
let end =  parseInt(document.getElementById('end').value) + 1
let pace =  parseInt(document.getElementById('pace').value)

if(!begin || !end || !pace)
{alert('ERROR - Sorry but i need at least a BEGIN and an End')}

if (pace == 0){
    alert('If pace = o, pace = 1 will be considered')
    pace = 1
}
let count = document.getElementById('count')
let i = begin
if (end > begin){
for (i ; i < end ; i+=pace) {
    if (i<end - 1){
    count.innerHTML += ` ${i} <span>&#128073;</span> `}
 else {count.innerHTML += ` ${i} &#129323; `}
}}

if(begin > end){
    end -=1
    for (i ; i >= end ; i-=pace){
        if (i != end){
            count.innerHTML += ` ${i} <span>&#128073;</span> `}
         else {count.innerHTML += ` ${i} &#129323; `}
        }}  
    }



