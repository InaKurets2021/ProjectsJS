let minutes = document.querySelector('.min');
let seconds = document.querySelector('.sec');
let result = document.querySelector('.result');

let startBtn = document.querySelector('.timer__button_start');
let pauseBtn = document.querySelector('.timer__button_pause');
let stopBtn = document.querySelector('.timer__button_stop');


let long = document.querySelector('.timer__long ');
let short = document.querySelector('.timer__short');
let timerTimer = document.querySelector('.timer__timer')


let click = new Audio("bell-sound.mp3");
let timer;

const workTimer = () => {
  if (+seconds.value > 0) {
    +seconds.value--;
  } else {
    +minutes.value--;
    seconds.value = 59;
  }
  //отобразить таймер(возможно с нулями)
  setResult();

  //если время вышло, то вызвать функцию resetTimer и остановить его работу
  isFinished();
};

const startTimer = () => {
  if (+minutes.value <= 0 || +seconds.value <= 0) {
    alert("Неверные значения");
    minutes.value = null;
    seconds.value = null;
    result.innerHTML = "00 : 00";
    return;
  }
  timer = setInterval(workTimer, 1000);

  minutes.setAttribute("disabled", "disabled");
  seconds.setAttribute("disabled", "disabled");
  startBtn.setAttribute("disabled", "disabled");
  pauseBtn.removeAttribute("disabled");
};

const pauseTimer = () => {
  clearInterval(timer);
  startBtn.removeAttribute("disabled");
  pauseBtn.setAttribute("disabled", "disabled");
};

const resetTimer = () => {
  click.play();
  clearInterval(timer);
  minutes.value = null;
  seconds.value = null;
  result.innerHTML = "00 : 00";
  minutes.removeAttribute("disabled");
  seconds.removeAttribute("disabled");
  startBtn.removeAttribute("disabled");
  pauseBtn.removeAttribute("disabled");
};

const setResult = () => {
  if (+seconds.value < 10 && +minutes.value < 10) {
    result.innerHTML = `0${minutes.value} : 0${seconds.value}`;
  } else if (+seconds.value < 10) {
    result.innerHTML = `${minutes.value} : 0${seconds.value}`;
  } else if (+minutes.value < 10) {
    result.innerHTML = `0${minutes.value} : ${seconds.value}`;
  } else result.innerHTML = `${minutes.value} : ${seconds.value}`;
};

const isFinished = () => {
  if (+seconds.value === 0 && +minutes.value === 0) {
    resetTimer();
  }
};

// перерывы 
const longBreak = () => {

  result.innerHTML = "14 : 59";
  minutes.value = 14;
  seconds.value = 59;

  if (+minutes.value <= 0 || +seconds.value <= 0) {
    alert("Неверные значения");
    minutes.value = null;
    seconds.value = null;
    result.innerHTML = "00 : 00";
    click.play();
    return;
  }
  timer = setInterval(workTimer, 1000);
  minutes.setAttribute("disabled", "disabled");
  seconds.setAttribute("disabled", "disabled");
  startBtn.removeAttribute("disabled");
  pauseBtn.removeAttribute("disabled");
};

const shortBreak = () => {
  result.innerHTML = "04 : 59";
  minutes.value = 04;
  seconds.value = 59;

  if (+minutes.value <= 0 || +seconds.value <= 0) {
    alert("Неверные значения");
    minutes.value = null;
    seconds.value = null;
    result.innerHTML = "00 : 00";
    click.play();
    return;
  }
  timer = setInterval(workTimer, 1000);
  minutes.setAttribute("disabled", "disabled");
  seconds.setAttribute("disabled", "disabled");
  startBtn.removeAttribute("disabled");
  pauseBtn.removeAttribute("disabled");
};

const timerAuto = () => {
  result.innerHTML = "24 : 59";
  minutes.value = 24;
  seconds.value = 59;

  if (+minutes.value <= 0 || +seconds.value <= 0) {
    alert("Неверные значения");
    minutes.value = null;
    seconds.value = null;
    result.innerHTML = "00 : 00";
    click.play();
    return;
  }
  timer = setInterval(workTimer, 1000);
  minutes.setAttribute("disabled", "disabled");
  seconds.setAttribute("disabled", "disabled");
  startBtn.removeAttribute("disabled");
  pauseBtn.removeAttribute("disabled");
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", resetTimer);
long.addEventListener("click", longBreak);
short.addEventListener("click", shortBreak);
timerTimer.addEventListener("click", timerAuto);




