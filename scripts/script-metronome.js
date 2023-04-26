const bpm = document.getElementById('bpm')
const h1 = document.querySelector('h1')
const play = document.getElementByld('play')
const audio = document.querySelector('audio')
let currentBpm = 40
let isPlaying = false
let timer = null
function tick(){
    audio.currentTime= 0
    audio.play()
}

bpm.addEventListener('change', function () {
  h1.innerHTML = this.value + ' bpm'
  currentBpm = parseInt(this.value)
  if (isPlaying) {
    clearInterval(timer)
    timer = setInterval(tick, (60 * 1000) / currentBpm)
  }
})

play.addEventListener('click', function () {
  if (isPlaying) {
    play.innerHTML = 'Play'
    clearInterval(timer)
  } else {
    tick()
    play.innerHTML = 'Stop'
    const timer = setInterval(tick, (60 * 1000) / currentBpm)
  }
  isPlaying = !isPlaying
})

