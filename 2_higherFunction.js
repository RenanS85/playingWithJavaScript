// write a function that receive two numbers of parameters and return the higher.

function higher_value (n1,n2) {
    let higher ;
    if (n1!==n2) {
        if (n1 > n2) {
            console.log('the higher is n1: ', n1)
            higher = n1}
        else {
            console.log('the higher is n2: ', n2)
            higher = n2}}
    else {console.log('The numbers are equals')} 
    return higher
}



