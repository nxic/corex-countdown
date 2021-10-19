(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let launchDate = new Date(2021, 9, 22, 11, 00, 00);

  const formatNumber = (value) => {
    if(Number.parseInt(value, 10) > 9) return value;
    return `${value}`.padStart(2, '0');
  };
  
  const countDown = new Date(launchDate).getTime(),
      x = setInterval(() => {

        const now = new Date().getTime()
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = formatNumber(Math.floor((distance % (day)) / (hour))),
        document.getElementById("minutes").innerText = formatNumber(Math.floor((distance % (hour)) / (minute))),
        document.getElementById("seconds").innerText = formatNumber(Math.floor((distance % (minute)) / second));

        if (distance < 0) {
          window.location('https://www.corex.mn');
          clearInterval(x);
        }
      }, 0)
  }()
);
