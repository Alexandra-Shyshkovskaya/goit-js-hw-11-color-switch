const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyDocument = document.querySelector('.body');
const buttonStart = document.querySelector();
    



/* для генерации случайных чисел*/
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* Алгоритм последовательных действий:
1. нажатие кнопки Старт 
1.1 кнопка старт после нажатия неактивна
1.2. 1сек - 1 цвет
1.3. 2сек - 2 цвет
....
2.нажатие кнопки Стоп
2.1 цвет фона остановился */