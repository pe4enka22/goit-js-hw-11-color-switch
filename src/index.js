const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let currentColor;

startButton.addEventListener('click', changeColor);
function changeColor() {
   currentColor = setInterval(() => {
        document.querySelector('body').style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
    }, 1000);
    startButton.disabled = true;
}


stopButton.addEventListener('click', stopColor);
function stopColor() {
  clearInterval(currentColor);
  startButton.disabled = false;
}
