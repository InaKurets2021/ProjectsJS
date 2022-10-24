const btns = document.querySelectorAll(".settings__btn");
const inputs = document.querySelectorAll(".timer-app__inputs");
let minutesInputTimer = document.querySelector(".inputs-timer__min");
let secondsInputTimer = document.querySelector(".inputs-timer__sec");
let minutesInputBreak = document.querySelector(".inputs-break__min");
let secondsInputBreak = document.querySelector(".inputs-break__sec");
let minutesInputLong = document.querySelector(".inputs-long__min");
let secondsInputLong = document.querySelector(".inputs-long__sec");
const startButton = document.querySelector(".timer-buttons__start");
const pauseButton = document.querySelector(".timer-buttons__pause");
const stopButton = document.querySelector(".timer-buttons__stop");
const resultMinutes = document.querySelector(".result__minutes");
const resultSeconds = document.querySelector(".result__seconds");

let minutes = +minutesInputTimer.value;
let seconds = +secondsInputTimer.value + 1;
let interval;
let shortMinutes = +minutesInputBreak.value;
let shortSeconds = +secondsInputBreak.value + 1;
let intervalBreak;
let longMinutes = +minutesInputLong.value;
let longSeconds = +secondsInputLong.value + 1;
let intervalLong;
let paused = "timer";

minutesInputTimer.addEventListener("input", () => {
  minutes = +minutesInputTimer.value;
});
secondsInputTimer.addEventListener("input", () => {
  seconds = +secondsInputTimer.value + 1;
});

minutesInputBreak.addEventListener("input", () => {
  shortMinutes = +minutesInputBreak.value;
});
secondsInputBreak.addEventListener("input", () => {
  shortSeconds = +secondsInputBreak.value + 1;
});

minutesInputLong.addEventListener("input", () => {
  longMinutes = +minutesInputLong.value;
});
secondsInputLong.addEventListener("input", () => {
  longSeconds = +secondsInputLong.value + 1;
});

function playAudio() {
  const audio = new Audio("./audio/sound.mp3");
  audio.play();
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    inputs.forEach((input, indexInput) => {
      input.classList.remove("active");
      if (index === indexInput) {
        input.classList.add("active");
      }
    });
  });
});

function startTimer() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[0].classList.add("active");

  inputs.forEach((input) => {
    input.classList.remove("active");
  });
  inputs[0].classList.add("active");
  if (!seconds && !minutes) {
    clearInterval(interval);
    playAudio();
    startShortBreak();
    return;
  }
  if (seconds != 0) {
    seconds--;
    if (minutes < 10) {
      resultMinutes.innerText = "0" + minutes;
    } else {
      resultMinutes.innerText = minutes;
    }
  }
  if (seconds < 10) {
    resultSeconds.innerText = "0" + seconds;
  } else {
    resultSeconds.innerText = seconds;
  }
  if (minutes >= 1 && seconds < 1) {
    seconds = 60;
    if (minutes < 10) {
      resultMinutes.innerText = "0" + minutes;
    } else {
      resultMinutes.innerText = minutes;
    }
    minutes--;
  }
}
function startShortBreak() {
  paused = "break";
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[1].classList.add("active");

  inputs.forEach((input) => {
    input.classList.remove("active");
  });
  inputs[1].classList.add("active");

  intervalBreak = setInterval(() => {
    if (!shortSeconds && !shortMinutes) {
      clearInterval(intervalBreak);
      startShortLong();
      playAudio();
      return;
    }
    if (shortSeconds != 0) {
      shortSeconds--;
      if (shortMinutes < 10) {
        resultMinutes.innerText = "0" + shortMinutes;
      } else {
        resultMinutes.innerText = shortMinutes;
      }
    }
    if (shortSeconds < 10) {
      resultSeconds.innerText = "0" + shortSeconds;
    } else {
      resultSeconds.innerText = shortSeconds;
    }

    if (shortMinutes >= 1 && shortSeconds < 1) {
      shortSeconds = 60;
      if (shortMinutes < 10) {
        resultMinutes.innerText = "0" + shortMinutes;
      } else {
        resultMinutes.innerText = shortMinutes;
      }
      shortMinutes--;
    }
  }, 1000);
}
function startShortLong() {
  paused = "long";
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[2].classList.add("active");

  inputs.forEach((input) => {
    input.classList.remove("active");
  });
  inputs[2].classList.add("active");

  intervalLong = setInterval(() => {
    if (!longSeconds && !longMinutes) {
      clearInterval(intervalLong);
      playAudio();
      stopTimers();
      return;
    }
    if (longSeconds != 0) {
      longSeconds--;
      if (longMinutes < 10) {
        resultMinutes.innerText = "0" + longMinutes;
      } else {
        resultMinutes.innerText = longMinutes;
      }
    }
    if (longSeconds < 10) {
      resultSeconds.innerText = "0" + longSeconds;
    } else {
      resultSeconds.innerText = longSeconds;
    }

    if (longMinutes >= 1 && longSeconds < 1) {
      longSeconds = 60;
      if (longMinutes < 10) {
        resultMinutes.innerText = "0" + longMinutes;
      } else {
        resultMinutes.innerText = longMinutes;
      }
      longMinutes--;
    }
  }, 1000);
}
startButton.addEventListener("click", () => {
  btns.forEach((btn) => (btn.disabled = true));
  if (paused == "timer") {
    interval = clearInterval();
    interval = setInterval(startTimer, 1000);
  } else if (paused == "break") {
    startShortBreak();
  } else {
    startShortLong();
  }
  // intervalBreak = clearInterval();
});
pauseButton.addEventListener("click", () => {
  clearInterval(interval);
  clearInterval(intervalBreak);
  clearInterval(intervalLong);
});
function stopTimers() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
    btn.disabled = false;
  });
  btns[0].classList.add("active");
  inputs.forEach((input) => {
    input.classList.remove("active");
  });
  inputs[0].classList.add("active");
  clearInterval(interval);
  clearInterval(intervalBreak);
  clearInterval(intervalLong);
  paused = "timer";
  minutes = 1;
  seconds = 1;
  shortMinutes = 2;
  shortSeconds = 2;
  longMinutes = 3;
  longSeconds = 3;
  minutesInputTimer.value = 1;
  secondsInputTimer.value = 1;
  minutesInputBreak.value = 2;
  secondsInputBreak.value = 2;
  minutesInputLong.value = 3;
  secondsInputLong.value = 3;
  resultMinutes.textContent = "00";
  resultSeconds.textContent = "00";
}
stopButton.addEventListener("click", stopTimers);
