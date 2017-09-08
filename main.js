
var $seconds = document.querySelector('#seconds')
var $start = document.querySelector('#start')

function secondsperseconds() {
  setInterval(seconds, 1000)
}

function seconds() {
  console.log($seconds.textContent)
  $seconds.textContent++
}

$start.addEventListener('click', secondsperseconds)
