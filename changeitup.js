"use strict";
function transformString(input) {
    return input.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            let nextCharCode = char.charCodeAt(0) + 1;
            if (char === 'z')
                nextCharCode = 'a'.charCodeAt(0);
            if (char === 'Z')
                nextCharCode = 'A'.charCodeAt(0);
            let nextChar = String.fromCharCode(nextCharCode);
            if ('aeiouAEIOU'.includes(nextChar)) {
                return nextChar.toUpperCase();
            }
            else {
                return nextChar.toLowerCase();
            }
        }
        else {
            return char;
        }
    }).join('');
}
const transformButton = document.getElementById("transformButton");
if (transformButton) {
    transformButton.addEventListener("click", function () {
        const inputElement = document.getElementById("inputString");
        const resultDiv = document.getElementById("result");
        if (inputElement && resultDiv) {
            const inputString = inputElement.value;
            const transformedString = transformString(inputString);
            resultDiv.textContent = transformedString;
        }
    });
}
