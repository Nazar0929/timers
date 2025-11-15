// Задача 1

// Создайте таймер, который начнет отсчет с 1 часа и каждую минуту сократит время. По достижении 30 минут таймер должен отправить экранное сообщение о том, что осталось менее половины времени.


const timerEl = document.getElementById("timers");

let seconds = 20; 

timerEl.textContent = `Залишилосьс: ${seconds} секунд`;
const countdown = setInterval(() => {
  seconds--;
  timerEl.textContent = `Залишилосьс: ${seconds} секунд`;

  if (seconds === 10) {
    alert("Залишилось менше половину часу");
  }
  if (seconds <= 0) {
    clearInterval(countdown);
    timerEl.textContent = "Час вийшов!";
  }
}, 1000); 



// Задача 2

// Создайте таймер, который начнет обратный отсчет с 30 секунд и сократит время каждую миллисекунду. При достижении 10 секунд таймер должен воспроизвести некоторую анимацию, а при достижении 0 секунд — выполнить определенное действие, например, заставить кнопку снова начать активную.



const startButton = document.getElementById("start");
const secondsDisplay = document.getElementById("seconds");

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  let timeMs = 30000; 

  const interval = setInterval(() => {
    timeMs -= 100;
    if (timeMs < 0) timeMs = 0;

    secondsDisplay.textContent = (timeMs / 1000).toFixed(3);


    if (timeMs <= 10000 && timeMs > 9900) {
      console.log("залишилось 10 секунд!");
    }

    if (timeMs <= 0) {
      clearInterval(interval);
      secondsDisplay.textContent = "0.000";
      startButton.disabled = false;
      alert("Час вийшов");
    }

  }, 100); 
});
