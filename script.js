//Mouse Events

const hoverBtn = document.getElementById('hoverBtn');
const hoverMsg = document.getElementById('hoverMsg');

hoverBtn.addEventListener('mouseenter', () => {
    hoverMsg.textContent = "You're hovering over me!";
});

hoverBtn.addEventListener('mouseleave', () => {
    hoverMsg.textContent = "You have left the button!";
});

//Keyboard Events!

const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', (e) => {
    keyMsg.textContent = `You press: ${e.key}`;
});

//Form

const form = document.getElementById('simpleForm');
const form = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = "Form submitted successfully!";
});

//Focus and Blurring Events

const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.addEventListener('focus', () => {
    focusMsg.textContent = "Input is focused";
});

focusInput.addEventListener('blur', () => {
    focusMsg.textContent = "Input is blurred";
});