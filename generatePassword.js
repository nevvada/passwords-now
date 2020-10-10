document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.querySelector('#generateButton');

    const generatePassword = () => {
        const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const SPECIAL_CHARACTERS = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

        const lengthDOM = document.querySelector('#lengthSelect');
        const length = lengthDOM.options[lengthDOM.selectedIndex].text;
        const specialCharsDOM = document.querySelector('#specialCharactersSelect');
        const hasSpecialChars = specialCharsDOM.options[specialCharsDOM.selectedIndex].text;

        const passwordChars = hasSpecialChars ? CHARACTERS + SPECIAL_CHARACTERS : CHARACTERS;
        let password = '';

        for (let i = 0; i < Number(length); i++) {
            const randomCharIndex = Math.round(Math.random() * passwordChars.length);
            const randomChar = passwordChars[randomCharIndex];

            password += randomChar;
        }

        return password;
    };

    generateButton.addEventListener('click', () => {
        const newPassword = generatePassword();

        console.log('new pass', newPassword);
    });
});
