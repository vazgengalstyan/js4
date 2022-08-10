let dvd = document.getElementById('dvd')
let section = document.getElementById('section')

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

let xPosition = 10;
let yPosition = 10;
let xSpeed = 10;
let ySpeed = 10;


function update() {
    dvd.style.left = xPosition + 'px';
    dvd.style.top = yPosition + 'px';
}

setInterval(() => {
    if (xPosition + dvd.clientWidth >= window.innerWidth || xPosition <= 0){
        xSpeed=-xSpeed
    } if (yPosition + dvd.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed=-ySpeed
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    update()
}, 100)