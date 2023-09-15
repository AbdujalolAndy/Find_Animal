const animals = ['fox','ant','bird','lion','deer','wolf','bear',
'frog','hen','mole','duck','goat','dog','cat','bat','cock','cow'];


function howManyAnimalsHave(text){
    return animals.filter((a) => canWeCreateWord(a,text))
}

function canWeCreateWord(animal,text){
    let index = 0;
    while(index<animal.length){
        if(!text.includes(animal[index])){
            return false
        }
        index++;
    }
    return true
}
const javob = howManyAnimalsHave('fdgwocalt');
console.log('javob:',javob);