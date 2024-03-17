"use strict";
function isValidISBN10(isbn) {
    const cleanedISBN = isbn.replace(/[^0-9X]/gi, '');
    if (cleanedISBN.length !== 10) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        const digit = parseInt(cleanedISBN[i]);
        if (isNaN(digit)) {
            return false;
        }
        sum += digit * (i + 1);
    }
    const lastChar = cleanedISBN[9].toUpperCase();
    let lastDigit;
    if (lastChar === 'X') {
        lastDigit = 10;
    }
    else {
        lastDigit = parseInt(lastChar);
        if (isNaN(lastDigit)) {
            return false;
        }
    }
    sum += lastDigit * 10;
    return sum % 11 === 0;
}
const validateBtn = document.getElementById("validateBtn");
const isbnInput = document.getElementById("isbnInput");
const validationResultDiv = document.getElementById("validationResult");
if (validateBtn && isbnInput && validationResultDiv) {
    validateBtn.addEventListener("click", function () {
        const isbn = isbnInput.value;
        const isValid = isValidISBN10(isbn);
        validationResultDiv.textContent = isValid ? "Valid ISBN-10" : "Invalid ISBN-10";
    });
}
