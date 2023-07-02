const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", onInput);
function onInput(evt) {
    
    if (inputElement.value.length === Number(inputElement.dataset.length)) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
    } else {
        inputElement.classList.add("invalid");
        inputElement.classList.remove("valid");
    }
}
// console.log(inputElement.dataset.length);
// console.log(inputElement.dataset.length !== Number);
