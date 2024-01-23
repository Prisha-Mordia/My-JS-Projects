
const outputElement = document.getElementById("output");
let sentence = localStorage.getItem("savedSentence") || "Sentence: ";
outputElement.textContent = sentence;
document.addEventListener("keydown", function (event) {
    if (event.key.match(/^[a-zA-Z0-9!@#$%^&?'";:|.,<>* ]$/) || event.key === "Backspace") {
        const pressedKey = event.key;

        if (event.key === "Backspace") {
            sentence = sentence.slice(0, -1);
        } else {
            sentence += pressedKey;
        }

        outputElement.textContent = sentence;

        localStorage.setItem("savedSentence", sentence);
    }
});




//////////////////////////////////////////////////////////////2st
// const outputElement = document.getElementById("output");

// let sentence = "Sentence: ";

// document.addEventListener("keydown", function (event) {
//     if (event.key.match(/^[a-zA-Z0-9!@#$%^&?'";:|.,<>* ]$/)) {
//         const pressedKey = event.key;

//         sentence += pressedKey;

//         outputElement.textContent = sentence;
//     }
// });





// const outputElement = document.getElementById("output");
// let sentence = "Sentence: ";

// document.addEventListener("keydown", function(event) {
//   const asciiValue = event.keyCode;
//   if (asciiValue >= 32 && asciiValue <= 126) {
//     const pressedKey = String.fromCharCode(asciiValue);
//     sentence += pressedKey;
//     outputElement.textContent = sentence;
//   }
// });




//////////////////////////////////////////////////////////////1st
// const outputElement = document.getElementById("output");

// let sentence = "Sentence: ";

// document.addEventListener("keydown", function (event) {
//         const pressedKey = event.key;

// if (/^[a-zA-Z]$/.test(pressedKey)) {
//     sentence += pressedKey;
// outputElement.textContent = sentence;
//         }
//     });
