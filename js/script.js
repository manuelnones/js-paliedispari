// chiedere all' utente di inserire una parola
// creare una funzione per capire se la parola inserita è palindroma

/*
    - creare una variabile dell input html
    - creare una variabile del button html
    - creare una variabile per estrarre i caratteri dalla stringa
    - creare la funzione per la verifica della parola palindroma
   SE la parola è palindroma
    o dire all' utente che la parola è palindroma
ALTRIMENTI
    o dire all utente che la parola non è palindroma
*/

const userTextEl = document.getElementById(`user-text`);
const btnEl = document.getElementById(`btn`);
const answerEl = document.getElementById(`answer`)

btnEl.addEventListener(`click`, function () {
    let userWord = userTextEl.value;
    let reverseWord = wordReverse(userWord);

    if (userWord == reverseWord) {
        answerEl.innerHTML =`la parola è palindroma`;
    } else {
        answerEl.innerHTML = `la parola non è palindroma`;
    }
});


function wordReverse(userWord) {
    let wordCharacters = userWord.split(``);
    let wordCharactersRev = wordCharacters.reverse();
    let wordRev = wordCharactersRev.join(``);

    return wordRev;
};

// _________________________________________________________________

