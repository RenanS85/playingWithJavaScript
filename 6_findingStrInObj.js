// Function that finds a str into a object values and return the srt and type

function findStr(enter_obj) 
{
for (k in enter_obj){
let value = enter_obj[k]
if (typeof value == 'string')
{console.log(value+'is a string')}
}
}
