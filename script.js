


const modeBtn = document.getElementById('modeButton');
const html = document.documentElement;

modeBtn.addEventListener('click', () => {

    const currentTheme = html.getAttribute('data-theme');
    if (currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        modeBtn.textContent = "LIGHT MODE";
    } else {
        html.setAttribute('data-theme', 'light');
        modeBtn.textContent = "DARK MODE";
    }
});
let angle = 0;
const img = document.getElementById("myImage");

setInterval(() => {
    angle += .4;
    img.style.transform = `rotate(${angle}deg)`;
}, 16);


