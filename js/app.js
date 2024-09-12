window.onload = function () {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const message = document.getElementById('message');
    const memesContainer = document.getElementById('memes-container');

    let clickCount = 0;

    // Lista de URLs de memes
    const memes = [
        'https://media1.tenor.com/m/jndM4lYBm2cAAAAC/haha-jajaja.gif',
        'https://media1.tenor.com/m/3h9DR-6FqzEAAAAC/ashtonthwaites-ashtonstutter.gif',
        'https://media1.tenor.com/m/GbCHmIpNAToAAAAd/ashtonthwaites-ashtonstutter.gif',
        'https://media1.tenor.com/m/hZ2bO2_rntMAAAAd/monkey-ape.gif'
    ];

    // Cuando el mouse se acerca al botón "No"
    noBtn.addEventListener('mouseover', function () {
        clickCount++;
        moveButton(noBtn, clickCount);
    });

    // Cuando el usuario acepta recibir más bugs
    yesBtn.addEventListener('click', function () {
        message.textContent = "¡Gracias! Te enviaremos más trabajo pronto 😉";
        showRandomMeme();
    });

    // Función para mover el botón "No, gracias"
    function moveButton(button, count) {
        if (count % 4 === 0) {
            button.classList.add('move-right');
            button.classList.remove('move-left', 'move-up', 'move-down');
        } else if (count % 4 === 1) {
            button.classList.add('move-left');
            button.classList.remove('move-right', 'move-up', 'move-down');
        } else if (count % 4 === 2) {
            button.classList.add('move-up');
            button.classList.remove('move-right', 'move-left', 'move-down');
        } else {
            button.classList.add('move-down');
            button.classList.remove('move-right', 'move-left', 'move-up');
        }
    }

    // Función para mostrar memes aleatorios
    function showRandomMeme() {
        const meme = document.createElement('img');
        meme.src = memes[Math.floor(Math.random() * memes.length)];
        meme.classList.add('meme');

        // Posición aleatoria
        meme.style.top = Math.random() * window.innerHeight + 'px';
        meme.style.left = Math.random() * window.innerWidth + 'px';

        memesContainer.appendChild(meme);

        // Eliminar meme después de 1 segundos
        setTimeout(() => {
            memesContainer.removeChild(meme);
        }, 1000);
    }
};
