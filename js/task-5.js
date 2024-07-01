const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');

function hendleButton(){
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
};

changeColorButton.addEventListener('click', hendleButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
