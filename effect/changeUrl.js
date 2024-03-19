const semicircle = document.getElementById("semicircle")
const topLines = document.getElementById("topLines")
const background = document.getElementById("section2_5")

if (window.screen.width >= 412) {
    semicircle.setAttribute("src","./images/semicircle2.svg")
    topLines.setAttribute("src","./images/topLines2.svg")
    background.style.backgroundImage = "url(./images/background4.svg)"
}