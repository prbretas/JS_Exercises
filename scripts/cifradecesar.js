
function cipherText() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(text, shift);
    document.getElementById('output').innerText = result;
}

function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (alphabet.includes(char)) {
            const newIndex = (alphabet.indexOf(char) + shift) % 26;
            result += alphabet[newIndex];
        } else if (alphabetUpper.includes(char)) {
            const newIndex = (alphabetUpper.indexOf(char) + shift) % 26;
            result += alphabetUpper[newIndex];
        } else {
            result += char;
        }
    }

    return result;
}