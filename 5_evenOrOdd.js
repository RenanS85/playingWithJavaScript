//Function that receive a range and show the even and odds in interval

function evenOdd(limit,pace=false) {

if (!pace) {
    pace = 1
}
for (let i = 1; i <= limit; i+=pace)

    if (i%2 == 0) {
        console.log(i+' is even')
    }
    else {console.log(i+' is odd')}
}


