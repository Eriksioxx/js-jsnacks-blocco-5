console.log('JS OK!');

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
        lunghezza: 12
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
        lunghezza: 11
    },
    {
        varietà: 'Zucchina rigata pugliese',
        peso: 2,
        lunghezza: 14
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
        lunghezza: 13
    },
];

let pesoSum = 0;

for (let i = 0; i < zucchina.length; i++) {
    pesoSum += zucchina[i].peso;

    console.table(zucchina[i].varietà, zucchina[i].peso);
}


console.log('Tutte le zucchine pesano', pesoSum);