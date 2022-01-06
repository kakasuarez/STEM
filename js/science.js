function animate() {
    var tl = anime.timeline({
        // easing: 'easeOutExpo',
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
}

animate();