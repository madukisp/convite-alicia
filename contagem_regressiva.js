// Define a data de destino da contagem regressiva (01 de setembro de 2023 às 21 horas)
const targetDate = new Date("2023-09-01T21:00:00").getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("days").innerHTML = days + " dias";
    document.getElementById("hours").innerHTML = hours + " horas";

    if (timeRemaining < 0) {
        document.getElementById("time-left").innerHTML = "A contagem regressiva terminou!";
    }
}

// Chama a função de atualização inicial e configura intervalo de atualização
updateCountdown();
setInterval(updateCountdown, 1000 * 60); // Atualiza a cada minuto
