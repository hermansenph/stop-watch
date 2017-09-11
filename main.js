
var $seconds = document.querySelector('#seconds')
var $start = document.querySelector('#start')

function secondsPerSeconds() {
  setInterval(seconds, 1000)
}

function seconds() {
  $seconds.textContent++
}

$start.addEventListener('click', secondsPerSeconds)
