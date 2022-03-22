console.log('JS OK!');

// EXERCISE
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi 
// da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = [];

const finalArray = array(numbers, letters);

console.log(finalArray)


function array(numb, lett) {
    for (let i = 0; i < numb.length; i++) {

        result.push(numb[i]);
        result.push(lett[i]);
    }
    return result;
}
