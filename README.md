# Домашнее задание к модулю "Продвинутая работа с функциями"

Слышала о таймере Pomodoro 🍅? А, может, даже пользовалась? Если нет, можешь почитать о нем [тут](https://lifehacker.ru/special/pomodoro/).

В качестве домашнего задания тебе предстоит разработать нечто подобное. Верстка уже готова, но если хочешь, можешь поменять дизайн на свой вкус.

Задание разделено на два уровня сложности. Первый обязателен для выполнения, второй — по желанию.

## Базовый уровень
Реализуй таймер обратного отсчета от 25 минут до нуля. Можешь сделать его ускоренным.

### Требования:
* при клике на кнопку **start** текст на ней меняется на **stop**
* при клике на **stop** таймер останавливается, но **не сбрасывается**, текст на кнопке снова меняется на **start**
* если снова кликнуть на кнопку, то отсчет возобновится со значения, на котором остановились
* когда таймер дойдет до нуля, он должен сброситься в начальное состояние: **25:00** и текст на кнопке снова **start**

# Homework for the module "Advanced work with functions"

Have you heard about the Pomodoro timer 🍅? Or maybe you've even used it? If not, you can read about it [here](https://lifehacker.ru/special/pomodoro/).

You will have to do something similar as your homework.  The layout is already ready, but if you want, you can change the design to your taste.

The task is divided into two levels of difficulty. The first is mandatory, the second is optional.

## Basic level
Implement a countdown timer from 25 minutes to zero. You can speed it up.

### Requirements:
* when you click on the **start** button the text on it changes to **stop**
* when you click on **stop** the timer stops, but **does not reset**, the text on the button changes again to **start**
* if you click on the button again, the countdown will resume with the values ​​at which it stopped
* when the timer reaches zero, it should go to the initial state: **25:00** and the text on the button again **start**
### Демо/Demo:
![Basic level](./assets/basic.gif)


## Продвинутый уровень
В дополнение к базовому уровню добавится режим отдыха **break** и кнопка сброса отсчета (рядом с кнопкой stop / start)

### Требования:
* при переключении между режимами меняется время: **25:00** для pomodoro и **05:00** для break
* при нажатии на кнопку сброса должно устанавливаться **начальное значение** таймера в зависимости от выбранного режима
* переключение между режимами и кнопка сброса **останавливают** таймер (то есть отсчет должен заморозиться), даже если действие выполнено во время работы таймера

## Advanced level
In addition to the basic level, a rest mode **break** and a reset button will be added (next to the stop / start button)

### Requirements:
* when switching between modes, the time changes: **25:00** for pomodoro and **05:00** for break
* when you press the reset button, the **initial value** of the timer should be set depending on the selected mode
* switching between modes and the reset button **stop** the timer (the countdown should freeze), even if the action is performed while the timer is running

### Демо/Demo:
![Advanced level](./assets/advanced.gif)