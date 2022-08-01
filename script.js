const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const date = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const icone = document.getElementById('icone')

const days = ['Segunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-Feira', 
'Sexta-feira', 'Sábado', 'Domingo'];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark Mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light Mode'
  }
})

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const year = time.getFullYear()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const amPm = hours >= 12 ? 'pm' : 'am'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeEl.innerHTML = `${hours}:${minutes < 10 ? minutes = `0${minutes}` : minutes} ${amPm}`
  date.innerHTML = `${days[day]}, ${day} de ${months[month]} de ${year}`
}


/*------------------*/
// Reference:
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/*------------------*/

setTime()

setInterval(setTime, 1000)