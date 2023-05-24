const newArray = []
function writeCards(array, string){
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

function countDown(integer){
    let countDown = 0;
    while (integer >= 0){
    console.log(integer--)
    }
}