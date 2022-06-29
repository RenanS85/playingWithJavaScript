// Calculating the mean of a student's notes

function notesGenaration(numberOfnotes){
let notes = [];
let cont = 1;
do{
let num = (Math.random()*100).toFixed(2); cont <=numberOfnotes;
let n = parseFloat(num);
notes.push(n);
cont+=1;
}
while (cont <= numberOfnotes)
return notes
}

function notesMean(notesArray) {
    let cont = 0
    let sum = 0;
    for (n of notesArray){
        sum+=n
        cont+=1
    }
    let mean = sum/cont
    console.log(mean.toFixed(2))
    
   
}

studentNotes = notesGenaration(10)
notesMean(studentNotes)






