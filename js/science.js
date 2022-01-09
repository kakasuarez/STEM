const control = document.querySelector('.control');
const container = document.querySelector('.container');
const cursor = document.querySelector("#top-heading");


const im = document.createElement("img");
im.classList.add("control-im");
control.appendChild(im);


const tl = anime.timeline({
    duration: 1600,
    loop: true
});
tl.add({
    targets: '.extremefirst',
    keyframes: [
        {rotate: 35},
        {rotate: 0},
    ],
    duration: 400,
    easing: 'easeInOutSine',
    loop: true
})
.add({
    targets: '.extremelast',
    keyframes: [
        {rotate: -35},
        {rotate: 0},
    ],
    duration: 400,
    easing: 'easeInOutSine',
    loop: true
})


function play() {
    tl.play();
    control.onclick = pause;
    im.src = "../images/pause.png";
}

function pause() {
    tl.pause();
    control.onclick = play;
    im.src = "../images/play.png";
}

im.src = "../images/pause.png";
control.onclick = pause;

container.addEventListener("mouseover", () => {
    control.classList.add("hovered");
})

cursor.addEventListener("animationend", () => {
    cursor.classList.add("none");
})
