// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("input-text");
    const generateButton = document.getElementById("generate-button");
    const colorDisplay = document.getElementById("color-display");

    generateButton.addEventListener("click", function () {
        const input = inputText.value;
        const hash = hashCode(input);
        const color = `#${hash.substr(0, 6)}`;

        colorDisplay.style.backgroundColor = color;
    });

    // Hash function to convert input text to a hexadecimal color
    function hashCode(input) {
        let hash = 0;
        for (let i = 0; i < input.length; i++) {
            hash = input.charCodeAt(i) + ((hash << 5) - hash);
        }
        return (hash & 0x00FFFFFF).toString(16).toUpperCase();
    }
});
