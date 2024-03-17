"use strict";
var _a;
function moveZeros(inputArray) {
    const nonZeroes = inputArray.filter(element => element !== 0);
    const zeroes = inputArray.filter(element => element === 0);
    return [...nonZeroes, ...zeroes];
}
(_a = document.getElementById("moveZeroesBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const inputArrayElement = document.getElementById("inputArray");
    const resultElement = document.getElementById("result");
    if (inputArrayElement && resultElement) {
        const inputArrayString = inputArrayElement.value;
        const inputArray = inputArrayString.split(",").map(element => {
            if (!isNaN(parseFloat(element))) {
                return parseFloat(element);
            }
            else {
                return element.trim();
            }
        });
        const result = moveZeros(inputArray);
        resultElement.textContent = JSON.stringify(result);
    }
});
