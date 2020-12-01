
function starVowels(word) {
    const vowels = "aeiou";
    let starWord = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if(vowels.includes(char)) {
            starWord += "*";
        } else starWord += char;
    } return starWord;
}

function censorSentence(sentence, array) {
    let newSentence = [];
    sentence.split(' ');

    for (i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if(array.includes(word)) {
            newSentence.push(starVowels(word));
        } else newSentence.push(word);
    } return newSentence;
}