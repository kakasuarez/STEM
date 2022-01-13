const gearContainer = document.querySelector(".gear-container");
const gearText = document.getElementById("gear-text");

const showGear = () => {
    gearContainer.style.visibility = "visible";
}

const showGearText = () => {
    gearText.style.display = "block";
}

setTimeout(showGear, 1000);
setTimeout(showGearText, 2000);