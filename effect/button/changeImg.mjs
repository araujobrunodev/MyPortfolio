// buttos
const AG_buttonLeft = document.getElementById("ag-arrow-left")
const AG_buttonRight = document.getElementById("ag-arrow-right")
const TTT_buttonLeft = document.getElementById("ttt-arrow-left")
const TTT_buttonRight = document.getElementById("ttt-arrow-right")
const p_buttonLeft = document.getElementById("p-arrow-left")
const p_buttonRight = document.getElementById("p-arrow-right")

import next from "./next.mjs"
import previous from "./previous.mjs"

TTT_buttonLeft.onclick = () => previous("tic tac toe")
AG_buttonLeft.onclick = () => previous("air girl")
p_buttonLeft.onclick = () => previous("pliw")

TTT_buttonRight.onclick = () => next("tic tac toe")
AG_buttonRight.onclick = () => next("air girl")
p_buttonRight.onclick = () => next("pliw") 