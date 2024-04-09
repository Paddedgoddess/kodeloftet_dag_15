


const inputValue = document.querySelector("#inputValue").value;
console.log(inputValue);

const submitValue = document.querySelector("#submitValue");
console.log(submitValue);

submitValue.addEventListener("click", () => {
    const inputValue = document.querySelector("#inputValue").value;
console.log(inputValue);

const displayValue = document.querySelector("#displayValue");
console.log(displayValue);

displayValue.textContent = inputValue;
})

