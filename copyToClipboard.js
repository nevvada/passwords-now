const copyButton = document.querySelector('#copyButton');

const copyToClipboard = (password) => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');
	document.body.removeChild(textarea);
};

document.addEventListener('DOMContentLoaded', () => {
    copyButton.addEventListener('click', () => {
        const password = passwordSpan.innerHTML;

		copyToClipboard(password);
    });
});
