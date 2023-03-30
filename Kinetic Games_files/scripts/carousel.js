const prev = 1;
const next = 2;

let imgCount = 1;

function carousel(move) {
    const element = document.querySelector(".carousel-image");
    let oldImgCount = imgCount;
    if (move === prev) {
        if (imgCount == 1) {
            imgCount = 8;
        } else {
            imgCount -= 1;
        }
    } else if (move === next) {
        if (imgCount == 8) {
            imgCount = 1;
        } else {
            imgCount += 1;
        }
    } else {
        console.log("error")
    }
    element.classList.add(`image-${imgCount}`)
    element.classList.remove(`image-${oldImgCount}`)
    return imgCount;
}
