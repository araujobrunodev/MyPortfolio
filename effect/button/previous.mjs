// images
import getImg from "./imgs.mjs" 
// videos
import getVideo from "./videos.mjs"
// list | index of list
import {getList, allIndexs} from "./list.mjs"

// Return to a previous figure
function previous (type) {
    allIndexs[type]--;

    let index = allIndexs[type]

    if (index <= -1)
        index = allIndexs[type] = getList[type].length - 1;
    
    const figure = getList[type][index]
    
    if (figure.search(/videos/) > -1) {
        getVideo[type].style.display = "block";
        getImg[type].style.display = "none"
    }
    else if (figure.search(/images/) > -1) {
        getVideo[type].style.display = "none";
        getImg[type].style.display = "block"
        getImg[type].setAttribute("src", figure)
    }
}

export default previous