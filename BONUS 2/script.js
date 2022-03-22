console.log('JS OK!');

// EXERCISE
// Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno
// la posizione compresa tra “a” e “b”

// Compresa tra “a” e “b” intende che se a=2 e b=5 prende le posizioni 2,3,4,5 o soltanto 3 e 4?

const arrayStart = ['z', 'B', 'O', 'O', 'L', 'E', 'A', 'N', 'z']

const firstElement = 1;
const secondElement = 9;

const finalResult = exercise(arrayStart, firstElement, secondElement);

console.log(finalResult);



// funzione richiesta

function exercise(array, a, b) {

    const arrayFinal = [];

    for (let i = a; i < b - 1; i++) {

        arrayFinal.push(array[i])
    }

    return arrayFinal;
}