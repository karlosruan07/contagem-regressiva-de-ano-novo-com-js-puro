
const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')

const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1 //pega o ano atual e soma mais 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const updatecountDown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60/ 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    
    daysContainer.textContent = days < 10 ? "0" + days : days
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds
}

setTimeout(() =>  {  //chama uma função no tempo especificado 1000 == 1s
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}, 1000)

setInterval(updatecountDown, 1000)


