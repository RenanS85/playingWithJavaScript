// Create a function fizzBuzz that return Fizz if the number parameter is divisible
// by 3 or Buzz if it is divisible by 5.

function fizzBuzz (number)
{   if (typeof number !== 'number') {
    return 'Não é um numero'}
    if (num%3 === 0 && numr%5 === 0) {
            return 'FizzBuzz'}
    if (num%3 === 0 && num%5 !== 0) {
            return 'Fizz'}
    if (num%3 !== 0 && num%5 === 0) {
            return 'Buzz'}
}

