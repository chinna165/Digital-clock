const hourEL = document.getElementById("hour");
const minEL = document.getElementById("min");
const secEL = document.getElementById("sec");
const appmEL = document.getElementById("ap");

function Clock() {
  let hur = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM"

  if (hur > 12) {
    hur = hur - 12;
    ampm = "PM";
  } else if (hur === 0) {
    hur = 12;
  }

  hourEL.innerText = hur.toString().padStart(2, '0');
  minEL.innerText = min.toString().padStart(2, '0');
  secEL.innerText = sec.toString().padStart(2, '0');
  appmEL.innerText = ampm;
  setTimeout(() => {
    Clock()
  }, 1000)
}

Clock()