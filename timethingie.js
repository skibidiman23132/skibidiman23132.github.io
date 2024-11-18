window.onload = function() {
  var savedTime = localStorage.getItem('savedTime') ? parseInt(localStorage.getItem('savedTime')) : 0;

  setInterval(function() {
    savedTime++;
    localStorage.setItem('savedTime', savedTime);
    document.getElementById('time-counter').textContent = formatTime(savedTime);
  }, 1000);
};
function resetTime() {
  localStorage.setItem('savedTime', 0);
  document.getElementById('time-counter').textContent = formatTime(0);
}

function formatTime(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  var hoursDisplay = hours > 0 ? hours + (hours === 1 ? ' hour ' : ' hours ') : '';
  var minutesDisplay = minutes > 0 ? minutes + (minutes === 1 ? ' minute ' : ' minutes ') : '';
  var secondsDisplay = seconds + (seconds === 1 ? ' second' : ' seconds');

  return hoursDisplay + minutesDisplay + secondsDisplay;
}
