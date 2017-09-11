
var $seconds = document.querySelector('#seconds')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $reset = document.querySelector('#reset')
var timer = 0

function secondsPerSeconds() {
  timer = setInterval(seconds, 1000)
}

function seconds() {
  $seconds.textContent++
}

function stop() {
  clearInterval(timer)
}

function reset() {
  $seconds.textContent = 0
}

$start.addEventListener('click', secondsPerSeconds)
$stop.addEventListener('click', stop)
$reset.addEventListener('click', reset)
