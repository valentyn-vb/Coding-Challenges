export function sortString(value) {
    if (!value.length) {
        return "";
    }
    const words = value.split(" ");
    const sortedWords = [...words];
    words.forEach((word) => {
        const letters = word.split("");
        const index = letters.find((letter) => Number.isInteger(Number(letter)));
        if (!index) {
            return;
        }
        sortedWords.splice(Number(index) - 1, 1, word);
    });
    return sortedWords.join(" ");
}
