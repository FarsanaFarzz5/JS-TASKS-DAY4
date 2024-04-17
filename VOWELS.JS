function countVowels(str) {
    const vowels = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "A",
        "E",
        "I",
        "O",
        "U",
    ];
    let count = 0;

    str.split("").forEach((char) => {
        if (vowels.includes(char)) {
            count++;
        }
    });

    return count;
}

const str = "HOW ARE YOU";
console.log(countVowels(str));
