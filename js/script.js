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
const btn1El = document.getElementById(`btn1`);
const answerEl = document.getElementById(`answer`)

btn1El.addEventListener(`click`, function () {
    isPalindrome(userTextEl.value);

});


function isPalindrome(userWord) {

    let wordCharacters = userWord.split(``);
    let wordCharactersRev = wordCharacters.reverse();
    let wordRev = wordCharactersRev.join(``);

    if (userWord == wordRev) {
        answerEl.innerHTML = `la parola è palindroma`;
        return true;
    } else {
        answerEl.innerHTML = `la parola non è palindroma`;
        return false;
    }
};

// _________________________________________________________________

const evenOrOddEl = document.getElementById(`even-or-odd`);
const userNumberEl = document.getElementById(`user-number`);
const btn2El = document.getElementById(`btn2`);


btn2El.addEventListener(`click`, function(){
    let prova = randomNumberGenerator(number);

    let userNumber = userNumberEl.value;

    index = 0;
    let addition = index + userNumber + prova;
});


function randomNumberGenerator(number){
    let randomNumber = number = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}