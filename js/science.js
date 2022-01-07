const control = document.querySelector('.control');

const im = document.createElement("img");
im.classList.add("control-im");
control.appendChild(im);


const tl = anime.timeline({
    duration: 4000,
    loop: true
});
tl.add({
    targets: '.extremeleft',
    keyframes: [
        {translateY: -40, translateX: -75},
        {translateX: 0, translateY: 0},
    ],
    duration: 1000,
    easing: 'linear',
    loop: true
})
.add({
    targets: '.extremeright',
    keyframes: [
        {translateY: -40, translateX: 75},
        {translateX: 0, translateY: 0},
    ],
    duration: 1000,
    easing: 'linear',
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
