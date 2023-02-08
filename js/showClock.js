function showClock() {
    const currentDate = new Date();
    const spanClock = document.getElementsByClassName("status-bar__column__clock")[0];
    const h = String(currentDate.getHours()).padStart(2, "0");
    const m = String(currentDate.getMinutes()).padStart(2, "0");
    spanClock.innerHTML = h + ":" + m;
  }

  function init() {
    setInterval(showClock, 1000);
  }

  showClock();
  init();