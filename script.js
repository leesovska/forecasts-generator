/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const button = document.querySelector('.forecast-btn');
button.addEventListener('click', function () {
  const predictionNumber = getRandom(1, 5);
  let predictionText = '';
  const percent = getRandom(0, 100);

  if (predictionNumber === 1) {
    predictionText = 'Сегодня хороший день для путешествий!';
  } else if (predictionNumber === 2) {
    predictionText = 'Вас ждет приятная встреча!';
  } else if (predictionNumber === 3) {
    predictionText = 'Сделайте паузу и начните сначала!'
  } else if (predictionNumber === 4) {
    predictionText = 'Хороший день для покупок!';
  } else {
    predictionText = 'Не стоит останавливаться на достигнутом!';
  }

  const currentForecastHeader = document.querySelector('.current-forecast h1');
  currentForecastHeader.textContent = predictionText;

  const currentPercent = document.querySelector('.current-forecast p');
  currentPercent.textContent = `${percent}%`;

  const template = document.querySelector('#forecast-item');
  const myPredictions = template.content.cloneNode(true);

  myPredictions.querySelector('h3').textContent = predictionText;
  myPredictions.querySelector('p').textContent = `${percent}%`;

  const forecastList = document.querySelector('.forecasts')
  forecastList.prepend(myPredictions);
});