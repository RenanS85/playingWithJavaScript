// Create a function 'radar' that calculate the points in a driver´s license if the driver 
// is higher than the limit
// limit = 70km/h
// for each 5km/h above the limit you get 1 point in the license


function radar(speed) {
    let limit = 70
    if (speed <= limit) {
        console.log('ok, in limit')
    }
    else {
       let spd_above = speed - limit
       let points = Math.floor(spd_above/5)
       console.log('ponts = '+ points+' speed = '+spd_above)  
      }}

let spd = Math.floor(Math.random() * 100)
r = radar(spd)
console.log(r)






