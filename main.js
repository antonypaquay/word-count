
const userInput = document.querySelector('#user-input');
userInput.oninput = e => {

    let targetValue = e.target.value,
        words = targetValue.split(' '),
        wordLength = 0,
        results = {};

    if (!e.targetValue) {
        results = {
            wordCount: 0,
            characterCount: 0,
            words: words,
            longestWord: {
                value: "-",
                characterCount: 0
            }
        }
    }

    for (let word in words) {
        if (words[word].length > wordLength && words.length > 0) {
            wordLength = words[word].length;
            results = {
                wordCount: words.length,
                characterCount: targetValue.length,
                words: words,
                longestWord: {
                    value: words[word],
                    characterCount: words[word].length
                }
            };
        }

    }

    displayResults(results);
};

function displayResults(results) {
    document.querySelector("#count-word").innerText = results.wordCount;
    document.querySelector("#count-character").innerText = results.characterCount;
    document.querySelector("#longest-word").innerText = results.longestWord.value;
}

