
var $seconds = document.querySelector('#seconds')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $reset = document.querySelector('#reset')
var $timeLimit = document.querySelector('#timelimit')
var $timeLimitSet = document.querySelector('#settimelimit')
var $stopWatch = document.querySelector('#stopwatch')
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
  document.querySelector('body').classList.remove("alert")
}

function timeLimitCheck() {
  setInterval(timeLimit, 50)
}

function timeLimit() {
  var limit = document.querySelector('.limit')
  if  (!limit) {
    $stopWatch.appendChild(renderTimeLimit())
  }
  else {limit.textContent = '/' + $timeLimit.value}
  if (limit.textContent === '/' + $seconds.textContent) {
    clearInterval(timer)
    document.querySelector('body').classList.add("alert")
  }
}

function renderTimeLimit() {
  var createLimit = document.createElement('p')
  createLimit.textContent = '/' + $timeLimit.value
  createLimit.classList.add("limit")
  return createLimit
}

$start.addEventListener('click', secondsPerSeconds)
$stop.addEventListener('click', stop)
$reset.addEventListener('click', reset)
$timeLimitSet.addEventListener('click', timeLimitCheck)
