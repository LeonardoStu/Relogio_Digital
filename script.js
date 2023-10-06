// Função para fazer os dias e as horas funcionarem
function time(){
    // Pegando o dias, meses e anos
    let dayElement = document.querySelector('.day')
    let monthElement = document.querySelector('.month')
    let yearsElement = document.querySelector('.years')

    // Pegando a hora, minuto e segundo
    let hoursElement = document.querySelector('.hours')
    let minutesElement = document.querySelector('.minutes')
    let secondsElement = document.querySelector('.second')


    // Pegando a data de hoje
    let now = new Date()

    // Colocando as horas, minutos e segundos no seu devido lugar
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")

    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds

    // Colocando dia, mes e ano no seu devido lugar
    const day = (now.getDay() + 1).toString().padStart(2, "0")
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const years = now.getFullYear().toString().padStart(4, "0")

    dayElement.textContent = day
    monthElement.textContent = month
    yearsElement.textContent = years
    
}

// Função para ficar executando todo o tempo
setInterval(time, 1000)