

// const playButton = document.getElementById('playButton');
//         const audio = document.getElementById('audio');
//         const icon = document.getElementById('icon');

//         playButton.addEventListener('click', () => {
//             if (audio.paused) {
//                 audio.play();
//                 icon.innerHTML = '⏸️'; // Muda para o ícone de pausa
//             } else {
//                 audio.pause();
//                 icon.innerHTML = '▶️'; // Muda para o ícone de play
//             }
//         });

//         document.getElementById("playButton").addEventListener("click", function() {
//             document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
//           });

const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const icon = document.getElementById("icon");

playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("bi-play-fill");
    icon.classList.add("bi-pause-fill");
  } else {
    audio.pause();
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  }
});

                  

// Verifica se existe uma data de início no localStorage
let startDate = localStorage.getItem("startDate");

if (!startDate) {
    // Se não existir, define a data de início (data quando começaram)
    startDate = new Date("2015-02-10"); // Mude para a data que vocês começaram
    localStorage.setItem("startDate", startDate); // Salva a data de início no localStorage
} else {
    // Caso a data já esteja no localStorage, converte para Date
    startDate = new Date(startDate);
}

const displayElement = document.getElementById("time-display");

function updateTime() {
    const currentDate = new Date();
    const diff = currentDate - startDate; // Diferença entre a data atual e a data de início

    // Cálculo de anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza o texto no display
    displayElement.textContent = `${years} Anos, ${months} Meses, ${days} Dias, ${hours} Horas, ${minutes} Minutos, ${seconds} Segundos`;
}

// Atualiza a cada segundo
setInterval(updateTime, 1000);

// Função para salvar a escrita do Post-it
document.getElementById("saveTextButton").addEventListener("click", () => {
  const text = document.getElementById("textPostIt").value;
  localStorage.setItem("savedText", text); // Salva a mensagem
  alert("Mensagem salva!");
});

// Carregar a mensagem salva
document.addEventListener("DOMContentLoaded", () => {
  const savedText = localStorage.getItem("savedText");
  if (savedText) {
    document.getElementById("textPostIt").value = savedText;
  }
});




