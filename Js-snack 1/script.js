console.log('JS OK!');

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// BONUS
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e
// dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto
// il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”


// EXERCISE

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchina = [
    {
        varietà: 'Zucchino romanesco',
        peso: 3,
        lunghezza: 25
    },
    {
        varietà: 'Zucchino ortolano di Faenza',
        peso: 2,
        lunghezza: 16
    },
    {
        varietà: 'Zucchina lunga fiorentina',
        peso: 4,
        lunghezza: 16
    },
    {
        varietà: 'Zucchino siciliano',
        peso: 7,
        lunghezza: 13
    },
    {
        varietà: 'Zucchina striata di Napoli',
        peso: 8,
        lunghezza: 22
    },
    {
        varietà: 'Zucchina bianca triestina',
        peso: 4,
        lunghezza: 23
    },
    {
        varietà: 'Zucchina rigata pugliese',
        peso: 2,
        lunghezza: 52
    },
    {
        varietà: 'Zucchino tondo di Piacenza',
        peso: 3,
        lunghezza: 8
    },
    {
        varietà: 'Zucchino tondo di Nizza',
        peso: 5,
        lunghezza: 16
    },
    {
        varietà: 'Zucchino tondo di Firenze',
        peso: 7,
        lunghezza: 17
    },
];

let pesoSum = 0;

for (let i = 0; i < zucchina.length; i++) {
    pesoSum += zucchina[i].peso;

    console.table(zucchina[[i]].varietà, zucchina[i].peso);
}


console.log('Tutte le zucchine pesano', pesoSum);