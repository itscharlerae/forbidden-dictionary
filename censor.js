
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