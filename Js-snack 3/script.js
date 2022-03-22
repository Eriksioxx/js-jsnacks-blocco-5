console.log('JS OK!');

// EXERCISE
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const insertWord = prompt('Insert word...').toLocaleLowerCase();



reverse(insertWord);

function reverse(word) {
    let reverseWord = '';

    (let i = word.length - 1; i >= 0; i--) {

        reverseWord += word;
    }
    return reverseWord;
}
