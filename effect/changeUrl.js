const semicircle = document.getElementById("semicircle")
const topLines = document.getElementById("topLines")
const background = document.getElementById("section2_5")
const lines = document.querySelector(".line-down")

if (window.screen.width <= 500) {
    semicircle.setAttribute("src","./images/semicircle2.svg")
    topLines.setAttribute("src","./images/topLines2.svg")
    background.style.backgroundImage = "url(./images/background4.svg)"
    lines.setAttribute("src", "./images/lines in mobile.svg")   
}