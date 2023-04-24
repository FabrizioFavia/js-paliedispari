/**
 * isPalindromo(word): funzione che che controlla se la parola è palindroma.
 * word: argomento della funzione di tipo string.
 * return: booleano (true se è palindromo, false se non lo è)
 **/

function isPalindromo(word) {

    for (let i = 0; i < word.length; i++) {

        /** 
         * word[i]: iesimo carattere da controllare
         * word.split('').reverse()[i]: iesimo elemento di word ribaltato.
         * condizione: se l'iesimo carattere è diverso dall'iesimo carattere della parola ribaltata, ritorna false.
         **/

        if (word[i] != word.split('').reverse()[i]) {
            return false;
        }
    }
    return true;
}



function palindromo() {

    let palindromeWord = prompt("Inserisci una parola da controllare")

    /* controlla se la parola è palindroma richiamando la funzione isPalindromo(word). */

    if (isPalindromo(palindromeWord)) {
        alert(`${palindromeWord} è una parola palindroma`);
    } else {
        alert(`${palindromeWord} non è una parola palindroma`);
    }
}


/** FINE PRIMA FUNZIONE */

function oddOrEvenGame() {
    let userChoise = null;
    let userNumber = null;
    let evenChoice = false;
    let min = 1;
    let max = 5;
    let computerNumber = numberGenerator(min, max);
    let evenSumResult = null;
    do {
        userNumber = Number(prompt(`"Scegli un numero tra ${min} e ${max}"`));

    } while (userNumber < min || userNumber > max);


    do {
        userChoise = prompt("Scegli tra pari e dispari")

    } while (userChoise !== "pari" && userChoise !== "dispari");


    if (userChoise === "pari") {
        evenChoice = true;
    }



    /* TERNARIA */
    /*   evenChoice = userChoise === "pari" ? true : false; */


    evenSumResult = evenSum(userNumber, computerNumber);
    let message = `"Tu hai scelto ${userNumber}, il computer ${computerNumber}."`;

    if (evenSumResult == evenChoice) {
        alert("HAI VINTO!!: " + message);
    } else {
        alert("HAI PERSO!! " + message);
    }

}

function numberGenerator(min, max) {

    return Math.floor((Math.random() * max) + min);

}

function evenSum(a, b) {
    let sum = a + b;

    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

















