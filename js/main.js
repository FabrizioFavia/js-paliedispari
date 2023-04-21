function palindrome() {


    let word = prompt("inserisci una parola");
    let reverseArray = [];
    let reverseWord;

    for (let i = word.length - 1; i >= 0; i--) {
        const letter = word[i];

        reverseArray.push(letter);
        reverseWord = reverseArray.join("");
    }

    if (reverseWord == word) {
        alert(`${reverseWord} è una parola palindroma`)

    } else {
        alert(`${word} non è una parola palindroma`)
    }

    return reverseWord;

}



