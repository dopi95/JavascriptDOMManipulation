let startStopBtn = document.getElementById("startStopBtn");
let restBtn = document.querySelector("#restBtn");
let seconds = 0;
let minutes = 0;
let hours = 0;

// Leading zero variables
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timeStatus = "stopped";

// Stopwatch function
function stopWatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
  leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
  leadingHours = hours < 10 ? "0" + hours : hours;

  document.getElementById("timer").textContent =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Start/Stop toggle
startStopBtn.addEventListener("click", function () {
  if (timeStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timeStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timeStatus = "stopped";
  }
});

// Reset button
restBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").textContent = "00:00:00";
  startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timeStatus = "stopped";
});
