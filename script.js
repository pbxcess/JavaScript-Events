//Mouse Events

const hoverBtn = document.getElementById('hoverBtn');
const hoverMsg = document.getElementById('hoverMsg');

hoverBtn.addEventListener('mouseenter', () => {
    hoverMsg.textContent = "You're hovering over the button. WOW!";
});

hoverBtn.addEventListener('mouseleave', () => {
    hoverMsg.textContent = "Oh no! You have left the button! awh :(";
});

//Keyboard Events!

const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', (e) => {
    keyMsg.textContent = `You pressed: ${e.key}`;
});

//Form

const form = document.getElementById('simpleForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = "Form submitted successfully!";
});

//Focus and Blurring Events

const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.addEventListener('focus', () => {
    focusMsg.textContent = "Input is in focus";
});

focusInput.addEventListener('blur', () => {
    focusMsg.textContent = "Input is blurred";
});

//Delegation

const container = document.getElementById('buttonContainer');
const delegationMsg = document.getElementById('delegationMsg');

container.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        delegationMsg.textContent =  `You clicked: ${e.target.textContent}`;
    }
});