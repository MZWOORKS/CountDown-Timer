const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthDay = "16 Dec 2021";

function countdown() {
  const birthDate = new Date(birthDay);
  const currentDate = new Date();

  const totalSeconds = new Date(birthDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  dayEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  //   console.log(days, hours, minutes, seconds);
}

// show the 0 if less than 10 secs remaining
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//  Initial Call
countdown();

setInterval(countdown, 1000);
