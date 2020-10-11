const copyButton = document.querySelector('#copySection');
const copiedTooltip = document.querySelector('#copiedTooltip');

const copyToClipboard = (password) => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');
    document.body.removeChild(textarea);
};

const showCopiedTooltip = () => {
    copiedTooltip.style.display = 'block';

    setTimeout(() => {
        copiedTooltip.style.display = 'none';
    }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
    copyButton.addEventListener('click', () => {
        const password = passwordSpan.innerHTML;

        copyToClipboard(password);
        showCopiedTooltip();
    });
});
