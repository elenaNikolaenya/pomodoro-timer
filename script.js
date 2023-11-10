const pomodoroOptions = document.querySelector('.pomodoro-options');
const pomodoroBtn = document.querySelector('#pomodoro');
const breakBtn = document.querySelector('#break');
const time = document.querySelector('#pomodoro-time');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

let markForStopBtn = '';
let markForResetBtn = '';
let secInit = 1500;
let secRest = secInit;

startBtn.addEventListener('click', clickOnStart);

function clickOnStart() {
  markForResetBtn = '';
  if (startBtn.textContent === 'start') {
  startBtn.textContent = 'stop';  
  runTimer(secRest);
  } else {
    startBtn.textContent = 'start';
    markForStopBtn = 'stop';
  }  
}

function runTimer(seconds) {      
  const timerId = setInterval(() => {
    seconds--;
    printTimeStr(seconds);

    if (seconds === 0) {
      clearInterval(timerId);
      secRest = secInit;
      printTimeStr(secInit);
      startBtn.textContent = 'start';
    }   

    if (markForStopBtn === 'stop') {
      markForStopBtn = '';
      secRest = seconds;
      clearInterval(timerId);
    }

    if (markForResetBtn === 'reset') {
      markForResetBtn = '';
      clearInterval(timerId);
      printTimeStr(secInit);
    }
  }, 10);  //1000 if we want to get a real timer
}

function printTimeStr(currentTime) {
  time.textContent = getTimeStr(currentTime);  
}

function getTimeStr(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;

  const getSubStr = (number) => {
    if (number >= 10) {
      return `${number}`;
    } else {
      return `0${number}`;
    }
  }

  return getSubStr(m) + ':' + getSubStr(s);
}

pomodoroOptions.addEventListener('click', (event) => {
  if (event.target.id === 'pomodoro' || event.target.id === 'break') {
    for (let btn of pomodoroOptions.querySelectorAll('.btn')) {
      btn.classList.remove('active');
    }
    event.target.classList.add('active');
  }

  resetTimer();  
});

function resetTimer() {
  if (pomodoroBtn.classList.contains('active')) {
    secInit = 1500;    
  } else {
    secInit = 300;    
  }
  printTimeStr(secInit);  
  secRest = secInit;  
  markForResetBtn = 'reset';
  startBtn.textContent = 'start';
}

resetBtn.addEventListener('click', resetTimer);