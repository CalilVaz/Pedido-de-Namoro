let buttonYes = document.querySelector('#buttonYes')
const buttonNo = document.getElementById('buttonNo')
const box = document.getElementById('box')

let number = 0

function setNumber() {
    number = (Math.random() * 24).toFixed(0)
}

function onButtonNo() {
    setNumber()
    if (number == 11) {
        setNumber()
    }
    buttonNo.style.gridArea = `columns_${number}`
}

function generaterHeart() {
    const heart = document.createElement('div')
    heart.innerHTML = "❤️"
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.animationDuration = Math.random() * 3 + 4 + 's'
    heart.classList.add('heart')
    document.body.appendChild(heart)
}

    function playMusic() {
        let x = document.getElementById("music")
        x.play();
    }

function onButtonYes() {
    box.innerHTML = `
    <img src="img-1.jpg" alt="Imagem de coração">
    <audio loop id="music">
                <source src="./Música romantica meme.mpeg" type="audio/mpeg">
            </audio>
    `
    setInterval(generaterHeart, 100)
    playMusic()
}
