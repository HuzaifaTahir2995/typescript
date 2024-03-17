function moveZeros(inputArray: (string | number)[]): (string | number)[] {
    const nonZeroes = inputArray.filter(element => element !== 0);
    const zeroes = inputArray.filter(element => element === 0);
    return [...nonZeroes, ...zeroes];
}

document.getElementById("moveZeroesBtn")?.addEventListener("click", function() {
    const inputArrayElement = document.getElementById("inputArray") as HTMLInputElement | null;
    const resultElement = document.getElementById("result");

    if (inputArrayElement && resultElement) {
        const inputArrayString = inputArrayElement.value;
        const inputArray = inputArrayString.split(",").map(element => {
            if (!isNaN(parseFloat(element))) {
                return parseFloat(element); 
            } else {
                return element.trim(); 
            }
        });
        const result = moveZeros(inputArray);
        resultElement.textContent = JSON.stringify(result);
    }
});