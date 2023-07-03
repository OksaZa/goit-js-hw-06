const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputElement.addEventListener("input", onInput);
function onInput() {
    const fontSize = inputElement.value + "px";
    textElement.style.fontSize = fontSize;
};

onInput();