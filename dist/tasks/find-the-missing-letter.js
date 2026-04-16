const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
export function findTheMissingLetter(arr) {
    const registerMethod = arr[0] === arr[0].toUpperCase() ? "toUpperCase" : "toLowerCase";
    let missingLetter = "";
    const firstLetterIndex = alphabet.findIndex((letter) => letter === arr[0].toUpperCase());
    const lastLetterIndex = alphabet.findIndex((letter) => letter === arr[arr.length - 1].toUpperCase());
    const updatedAlphabet = alphabet.slice(firstLetterIndex, lastLetterIndex + 1);
    updatedAlphabet.forEach((letter) => {
        if (arr.indexOf(letter[registerMethod]()) === -1) {
            missingLetter = letter[registerMethod]();
        }
    });
    return missingLetter;
}
