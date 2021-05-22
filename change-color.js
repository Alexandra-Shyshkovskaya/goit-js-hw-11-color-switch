const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

/* для генерации случайных чисел*/
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStopClick);

let intervalColorChange = undefined;

function onButtonStartClick(evt) {
  buttonStart.setAttribute("disabled", "disabled");
   intervalColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBodyColor(colors[randomNumber]);
  }, 1000);
  
};

function onButtonStopClick(evt) {
  buttonStart.removeAttribute("disabled");
  clearInterval(intervalColorChange);
}

function changeBodyColor(color) {
bodyColor.style.backgroundColor = color;
}




/* Алгоритм последовательных действий:
1. нажатие кнопки Старт V
1.1 кнопка старт после нажатия неактивнаV
1.2. 1сек - 1 цвет
1.3. 2сек - 2 цвет
....
2.нажатие кнопки Стоп
2.1 цвет фона остановился */