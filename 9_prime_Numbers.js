// Prime number in a interval
// issues: for some reason, some numbers even satisfying the 
// " if (n[x]%n[y]===0 && n[x]!==n[y] && n[y]!==1)" condition, are staying im the array.

function primeNumbers(interval){
    interval+=1
    let n = [];
for (let i = 1; i <= interval; i++){
    n.push(i)}
let x=0;
let y=0;
while (x <= interval-1)
{ 
    if (n[x]%n[y]===0 && n[x]!==n[y] && n[y]!==1) {
    n.splice(x,1)}
if (y == interval - 1)
{x+=1;
y=0;}
if (x == interval - 1){
    break;}
y+=1}
console.log(n)
}

