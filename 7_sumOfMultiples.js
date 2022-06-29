// Sum of multiples of two numbers choosed by user

function sumMultiplesOf(interval,n1,n2){
    let numbers = []
for (let i = 1; i <= interval; i++){
        numbers.push(i)}
let sum = 0
for (n of numbers) {
        if (n%n1==0 && n%n2==0)
            sum+=n}
console.log(sum)
    }






