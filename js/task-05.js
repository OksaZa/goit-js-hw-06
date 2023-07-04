const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInput);
function onInput(evt) {
    nameOutput.textContent = nameInput.value === "" ? "Anonymous" : nameInput.value.trim();
};
