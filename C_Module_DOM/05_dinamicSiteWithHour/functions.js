function day(){
    let d = new Date
    let dd = d.getDay()
    let el = document.getElementById('day')
    if (dd==0){el.innerText = 'Sunday'}
    if (dd==1){el.innerText = 'Monday'}
    if (dd==2){el.innerText = 'Tuesday'}
    if (dd==3){el.innerText = 'Wednesday' }
    if (dd==4){el.innerText = 'Thursday'}
    if (dd==5){el.innerText = 'Fryday'}
    if (dd==6){el.innerText = 'Saturday'}
    }   

function hour(){
    let h = new Date
    let hh = h.getHours()
    let min = h.getMinutes()
    document.getElementById('hour').innerText = `${hh}:${min}`
    let back = document.querySelector('body').style
    let wel = document.getElementById('welcome')
    let img = document.getElementById('img')
    if (hh >= 4){
        wel.innerText = 'Good Morning'
    }
    if (hh >= 12) {
        back.background = 'rgba(184, 104, 62, 0.883)' 
        wel.innerText = 'Good Afternoon'
        img.src = './_images/afternoon.jpg'
        }
    if (hh >=18 || hh < 4) {
        back.background = 'rgba(1, 1, 36, 0.985)'
        wel.innerText = 'Good Night'
        img.src = './_images/night.jpg'
        document.getElementById('header').style.color = 'white'}
    }




   
