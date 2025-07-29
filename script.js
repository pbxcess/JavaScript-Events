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