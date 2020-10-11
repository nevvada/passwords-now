const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const SPECIAL_CHARS = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

const generatePassword = () => {
    const lengthSelect = document.querySelector('#lengthSelect');
    const length = lengthSelect.options[lengthSelect.selectedIndex].text;
    const specialCharsSelect = document.querySelector('#specialCharsSelect');
    const hasSpecialChars = specialCharsSelect.options[specialCharsSelect.selectedIndex].text;

    const passwordChars = hasSpecialChars === 'yes'
        ? CHARS + SPECIAL_CHARS
        : CHARS;
    let password = '';

    for (let i = 0; i < Number(length); i++) {
        const randomCharIndex = Math.floor(Math.random() * passwordChars.length);
        const randomChar = passwordChars[randomCharIndex];

        password += randomChar;
    }

    return password.replace(/</g, '&lt;');
};

const generateButton = document.querySelector('#generateButton');
const passwordSpan = document.querySelector('#password');

document.addEventListener('DOMContentLoaded', () => {
    generateButton.addEventListener('click', () => {
        const password = generatePassword();

        passwordSpan.innerHTML = password;
    });
});
