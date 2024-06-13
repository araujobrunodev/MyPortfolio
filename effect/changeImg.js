const AG_buttonLeft = document.getElementById("AG_arrow_left")
const AG_buttonRight = document.getElementById("AG_arrow_right")
const TTT_buttonLeft = document.getElementById("ttt_arrow_left")
const TTT_buttonRight = document.getElementById("ttt_arrow_right")
const TicTacToe_img = document.getElementById("TicTacToeImg")
const AirGirl_img = document.getElementById("AirGirlImg")
const airGirl_video = document.getElementById("videoAirGirl")
const ttt_video = document.getElementById("videoTTT")

let TicTacToe_imgs = ["./images/jogo_da_velha1.png","./images/jogo_da_velha2.png","./images/jogo_da_velha3.png","./images/jogo_da_velha4.png","./images/jogo_da_velha5.png","./images/jogo_da_velha6.png","./images/jogo_da_velha7.png"]
let AirGirl_imgs = ["./images/airGirl1.png","./images/airGirl2.png","./images/airGirl3.png"]
let AirGirlState = 0
let TicTacToeState = 0
let activeVideoTTT = false
let activeVideoAirGirl = false

AG_buttonLeft.onclick = () => ChangeImg("Air girl", "left")
AG_buttonRight.onclick = () => ChangeImg("Air girl", "right")

TTT_buttonLeft.onclick = () => ChangeImg("Tic tac toe", "left")
TTT_buttonRight.onclick = () => ChangeImg("Tic tac toe", "right")

function ChangeImg (game, type) {
    let apply = 0

    switch (type) {
        case "left":
            apply = false
            break;

        case "right":
            apply = true
            break;
    } 

    switch (game) {
        case "Tic tac toe":
            switch (TicTacToeState) {
                case 0:
                    activeVideoTTT = false
                    if (!apply) {
                        TicTacToeState = TicTacToe_imgs.length
                        activeVideoTTT = true
                    } else {
                        TicTacToeState++
                    } 
                    break;

                case TicTacToe_imgs.length:
                    activeVideoTTT = false
                    if (apply) {
                        TicTacToeState = 0
                    } else {
                        TicTacToeState -= 1
                    }
                    break;

                case TicTacToe_imgs.length - 1:
                    if (apply) {
                        TicTacToeState++
                        activeVideoTTT = true
                    } else {
                        TicTacToeState--
                    }
                    break;

                default:
                    if (apply) {
                        TicTacToeState++
                    } else {
                        TicTacToeState--
                    }
                    break;
            }
        break;

        case "Air girl":
            switch (AirGirlState) {
                case 0:
                    activeVideoAirGirl = false
                    if (!apply) {
                        AirGirlState = AirGirl_imgs.length
                        activeVideoAirGirl = true
                    } else {
                        AirGirlState++
                    } 
                    break;
                case AirGirl_imgs.length:
                    activeVideoAirGirl = false
                    if (apply) {
                        AirGirlState = 0
                    } else {
                        AirGirlState -= 1
                    }
                    break;
    
                case AirGirl_imgs.length - 1:
                    if (apply) {
                        AirGirlState++
                        activeVideoAirGirl = true
                    } else {
                        AirGirlState--
                    }
                    break;
                default:
                    if (apply) {
                        AirGirlState++
                    } else {
                        AirGirlState--
                    }
                    break;
            }
        break
    }

    switch (activeVideoTTT) {
        case false:
            TicTacToe_img.removeAttribute("hidden")
            ttt_video.setAttribute("hidden", "true")
            break;

        case true:
            ttt_video.removeAttribute("hidden")
            TicTacToe_img.setAttribute("hidden", "true")
            break;
    }

    switch (activeVideoAirGirl) {
        case false:
            AirGirl_img.removeAttribute("hidden")
            airGirl_video.setAttribute("hidden", "true")
            break;

        case true:
            airGirl_video.removeAttribute("hidden")
            AirGirl_img.setAttribute("hidden", "true")
            break;
    }

    if (TicTacToe_imgs[TicTacToeState] != undefined) TicTacToe_img.setAttribute("src", TicTacToe_imgs[TicTacToeState])
    if (AirGirl_imgs[AirGirlState] != undefined) AirGirl_img.setAttribute("src", AirGirl_imgs[AirGirlState])
}