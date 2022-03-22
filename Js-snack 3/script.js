console.log('JS OK!');

// EXERCISE
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const insertWord = prompt('Insert word...').toLocaleLowerCase();


const finalWord = reverse(insertWord);

console.log(finalWord);


// funzione reverse parola
function reverse(word) {
    let reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {

        reverseWord += word[i];
    }
    return reverseWord;
}
