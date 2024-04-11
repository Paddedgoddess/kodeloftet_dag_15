


const submitValue = document.querySelector("#submitValue");
console.log(submitValue);

submitValue.addEventListener("click", () => {
    const inputValue = document.querySelector("#inputValue").value;
console.log(inputValue);

const displayValue = document.querySelector("#displayValue");
console.log(displayValue);

displayValue.textContent = inputValue;

const fromValue = document.querySelector("#fromValue").value;
console.log(fromValue)

const toValue = document.querySelector("#toValue").value;
console.log(toValue)

let result;


if (fromValue === "CM" & toValue === "M") {
result = inputValue / 100;
}
else if (fromValue === "CM" & toValue === "KM") {
    result = inputValue / 100000;
}
else if (fromValue === "M" & toValue === "CM") {
    result = inputValue * 100;
}
else if (fromValue === "M" & toValue === "KM") {
    result = inputValue / 1000;
}

else if (fromValue === "KM" & toValue === "CM") {
    result = inputValue * 100000;
}
else if (fromValue === "KM" & toValue === "M") {
   result = inputValue * 1000 
}
else {
    console.log("Please choose two different options.");
}

displayValue.textContent = result;
});

