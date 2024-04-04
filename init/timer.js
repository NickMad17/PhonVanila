import {context} from "../conntext/context.js";
import {render} from "./render.js";

let intervalId;

// Функция для форматирования времени
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

// Функция для запуска таймера
export function startTimer() {
  let totalSeconds = 0;
  intervalId = setInterval(function() {
    totalSeconds++;
    context.callUser.time = formatTime(totalSeconds)
    render({context})
  }, 1000);
}

// Функция для остановки таймера
export function stopTimer() {
  clearInterval(intervalId);
}