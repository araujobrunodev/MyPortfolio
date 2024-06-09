const TicTacToe_button = document.getElementById("appendImg1")
const AirGirl_button = document.getElementById("appendImg2")
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

TicTacToe_button.onclick = () => ChangeImg("Tic tac toe")
AirGirl_button.onclick = () => ChangeImg("Air girl")

function ChangeImg (game) {
    switch (game) {
        case "Tic tac toe":
            if (!activeVideoTTT) {
                activeVideoTTT = true
                console.log("tira video")
                ttt_video.setAttribute("hidden", "")
                TicTacToe_img.setAttribute("src",TicTacToe_imgs[TicTacToeState])
                TicTacToe_img.removeAttribute("hidden")    
                return 
            } else {
                if (TicTacToeState == (TicTacToe_imgs.length - 1)) {
                    TicTacToeState = 0
                    console.log("volta video")
                    activeVideoTTT = false
                    ttt_video.removeAttribute("hidden")
                    TicTacToe_img.setAttribute("hidden", "")
                } else TicTacToeState++

                setTimeout(function () {
                    TicTacToe_img.setAttribute("src",TicTacToe_imgs[TicTacToeState])
                }, 300)
            }
            break;

        case "Air girl":
            if (!activeVideoAirGirl) {
                activeVideoAirGirl = true

                airGirl_video.setAttribute("hidden", "")
                AirGirl_img.removeAttribute("hidden")
                AirGirl_img.setAttribute("src",AirGirl_imgs[AirGirlState])

            } else {
                if (AirGirlState == (AirGirl_imgs.length - 1)) {
                    AirGirlState = 0
                    activeVideoAirGirl = false
                    airGirl_video.removeAttribute("hidden")
                    AirGirl_img.setAttribute("hidden", "")
                } else AirGirlState++

                setTimeout(function () {
                    AirGirl_img.setAttribute("src",AirGirl_imgs[AirGirlState])
                }, 300)
            }
            break;
    }
}