// image
import getImg from "./imgs.mjs" 
// videos
import getVideo from "./videos.mjs"
// list | index of list
import {getList, allIndexs} from "./list.mjs"

// Go to the next figure
function next (type) {
    allIndexs[type]++;

    let index = allIndexs[type]

    if (index == getList[type].length) 
        index = allIndexs[type] = 0;
    
    let figure = getList[type][index]
    
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

export default next