let bg = document.querySelector('#particles-js');

function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random() * letters.length)]
    }
    return color
}

function playMusic(key){
    let audio;
    switch(key){
        case "d":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "e":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "z":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "r":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "t":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "y":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "u":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "i":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "o":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "p":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "q":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "s":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "f":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "g":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "h":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "j":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "k":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "m":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "w":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "x":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "c":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "v":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "b":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "n":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
    }
}

document.addEventListener("keydown", (event) => {
    bg.style.backgroundColor = getRandomColor();
    let key = event.key;
    playMusic(key);
})

