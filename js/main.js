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









