const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInput);
function onInput(evt) {
    if (nameInput.value !== "") {
        nameOutput.textContent = nameInput.value.trim();
    } else {
        nameOutput.textContent = "Anonymous";
    }
};
