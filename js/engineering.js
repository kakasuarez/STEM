const gear = document.querySelector(".gear");
const gearButton = document.querySelector(".gear button");
const gearContainer = document.querySelector(".gear-container");
const gearText = document.getElementById("gear-text");

gear.addEventListener("click", () => {
    gearText.style.display = "block";
    gearButton.style.display = "none";
})

const showGear = () => {
    gearContainer.style.visibility = "visible";
}

const showGearButton = () => {
    gearButton.style.display = "block";
}

setTimeout(showGear, 1000);
setTimeout(showGearButton, 2000);