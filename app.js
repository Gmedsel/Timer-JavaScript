alert("Welcome 2023 🎉🎆");
var countdown = 10;

function startTimer() {
  setInterval(function() {
    countdown--;
    document.getElementById("countdown").innerHTML = countdown;

    if (countdown == 0) {
      clearInterval();
      document.getElementById("timer").style.display = "none";
      document.getElementById("image-container").style.display = "block";
    }
  }, 1000);
}

startTimer();



