
let string = "";
const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            string = eval(string);
        } else if (buttonValue === 'C') {
            string = "";
        } else {
            string += buttonValue;
        }

        inputField.value = string;
    });
});