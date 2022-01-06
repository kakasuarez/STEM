const earlierHTML = document.documentElement.innerHTML;
document.documentElement.innerHTML = "";
const styleEl = document.createElement("link");
styleEl.rel = "stylesheet";
styleEl.href = "../css/technology.css";
document.head.appendChild(styleEl);
document.body.classList.add("bg-img");
setTimeout(() => {
    document.documentElement.innerHTML = earlierHTML;
}, 4500);