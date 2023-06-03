const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function digitalClock() {
  const actualTime = new Date();
  const actualDay = actualTime.getDay();
  const actualHour = actualTime.getHours();
  const actualMinutes = actualTime.getMinutes().toString().padStart(2, "0");
  const actualSeconds = actualTime.getSeconds().toString().padStart(2, "0");

  hours.innerText = actualHour;
  minutes.innerText = actualMinutes;
  seconds.innerText = actualSeconds;

  //   console.log(`
  //         ${actualHour} : ${actualMinutes} : ${actualSeconds}
  //     `);
}

setInterval(digitalClock, 1000);
