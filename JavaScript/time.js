const wrapper = document.querySelector(".wrapper");

function time() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  wrapper.innerHTML = `
    <div class="clock">${hours}:${minutes}:${seconds}</div>
  `;
}

setInterval(time, 1000);
