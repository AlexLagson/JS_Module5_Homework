let randomArray = [1, 1, 1, 1, 2]; //6
let allTheSame = true;
for (let i=0 ; i < randomArray.length ; i++) {
    if (i > 0) { 
    if (randomArray[i]!= randomArray[ i - 1 ]) {
        allTheSame = false;}
               }
            }
console.log(allTheSame);