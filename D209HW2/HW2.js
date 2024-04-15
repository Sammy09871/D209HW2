let words = [];

function displayWords() {
    const wordList = document.getElementById("myList");
    wordList.innerHTML = "<ul>" + words.map(word => `<li>${word}</li>`).join("") + "</ul>";
}

function toCaps() {
    const capsArray = words.map(word => word.toUpperCase());
    words = capsArray;
    displayWords();
}

function colorRed() {
    const listItems = document.querySelectorAll("#myList li");
    listItems.forEach(item => {
        item.style.color = "red";
    });
}

function swapLetters() {
    const swappedArray = words.map(word => {
        if (word.length <= 1) return word; 
        return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
    });
    words = swappedArray;
    displayWords();
}

for (let i = 0; i < 3; i++) {
    const word = prompt("Enter a word:");
    words.push(word);
}

displayWords();


const capsButton = document.createElement("button");
capsButton.textContent = "CAPS";
capsButton.addEventListener("click", toCaps);
document.body.appendChild(capsButton);


const redButton = document.createElement("button");
redButton.textContent = "RED";
redButton.addEventListener("click", colorRed);
document.body.appendChild(redButton);


const swapButton = document.createElement("button");
swapButton.textContent = "SWAP";
swapButton.addEventListener("click", swapLetters);
document.body.appendChild(swapButton);
