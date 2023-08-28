//contador

const timeLeft = document.getElementById('time-left');

const birthday = new Date('09/01/2023');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;

    if (timeSpan <= day) {
        timeLeft.innerHTML = "Feliz aniversário";
        clearInterval(timerId);
        return;
    } else if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday!!";
        clearInterval(timerId);
        return;
    }

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    // Formatação para manter sempre 2 dígitos nas horas, minutos e segundos
    const formattedTime = `${days} dias<br>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeLeft.innerHTML = formattedTime;
}

timerId = setInterval(countDown, second);


//botão clique aqui

const goToAnotherPageButton = document.getElementById('go-to-another-page');

goToAnotherPageButton.addEventListener('click', () => {
    // Substitua a URL abaixo pela URL da página para a qual você deseja redirecionar
    window.location.href = 'convite.html';
});

