let currentMessage = 1;

// Lista de imagens de fundo (substitua com as suas URLs ou caminhos locais)
const backgroundImages = [
    'imagens/scooby.jpg',
    'imagens/gogh.jpg',
    'imagens/burrito.jpg',
    'imagens/bolo.jpg'
];

document.getElementById("reveal-button").addEventListener("click", function() {
    let message = document.getElementById(`message-${currentMessage}`);
    let envelope = document.querySelector('.envelope'); // Seleciona o envelope

    if (message) {
        message.classList.remove("hidden");
        message.classList.add("visible");

        // Mudar a imagem de fundo a cada clique
        document.body.style.backgroundImage = `url(${backgroundImages[currentMessage - 1]})`;

        // Controlar o movimento do envelope
        if (currentMessage === 2) {
            envelope.classList.add('move-right'); // Mover para a direita na 2ª imagem
        } else if (currentMessage === 3) {
            envelope.classList.remove('move-right'); // Remover a classe de movimento para a direita
            envelope.classList.add('move-center'); // Voltar ao centro na 3ª imagem
        }

        currentMessage++;
    } else {
        this.innerHTML = "Carta completa! 🎉";

        // Mudar para a última imagem junto com os confetes
        document.body.style.backgroundImage = `url(${backgroundImages[backgroundImages.length - 1]})`;

        // Toca o som de confete
        let confettiSound = document.getElementById("confetti-audio");
        confettiSound.play();

        // Efeito de confete
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Confetes disparam toda vez que o botão é clicado após a carta estar completa
    if (currentMessage > backgroundImages.length) {
        let confettiSound = document.getElementById("confetti-audio");
        confettiSound.play();

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});
