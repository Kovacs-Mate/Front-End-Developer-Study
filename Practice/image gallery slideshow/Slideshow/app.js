let i = 1;
let intVal = 10000; /* Image Switch Interval */
let imageLoop = setInterval(imgLoop, intVal); /* Image Switch */
const t = 300; /* Time */

const imgElement = document.querySelector(".gallery-img");
const hideTop = document.querySelector(".gate-top");
const hideBottom = document.querySelector(".gate-bottom");
const gateBoth = document.querySelector(".gates");

/* image Loop Setup */
function imgLoop() {
    if (i <= 10) {
        i++;
    }
    if (i == 10) {
        i = 1;
    }
    imgElement.src = "./images/img_0" + i + ".jpg";
    gatesClose();
    setTimeout(gatesOpen, t);
}

function imgLoopClear() {
    clearInterval(imageLoop);
}

function imgLoopReturn() {
    imageLoop = setInterval(imgLoop, intVal);
}

/* Slideshow Effect (Gates) */

function gatesClose() {
    hideTop.style.transform = "translateY(0px)";
    hideBottom.style.transform = "translateY(0px)";
    hideTop.style.transition = "0s";
    hideBottom.style.transition = "0s";
    hideTop.style.opacity = "0.9";
    hideBottom.style.opacity = "0.9";
}

function gatesOpen() {
    hideTop.style.transform = "translateY(-600px)";
    hideBottom.style.transform = "translateY(600px)";
    hideTop.style.transition = "0.7s";
    hideBottom.style.transition = "0.7s";
    hideTop.style.opacity = "0";
    hideBottom.style.opacity = "0";
}

/* Buttons Actions */

function nextImg() {
    if (10 >= i) {
        i++;
    }
    if (i == 10) {
        i = 1;
    }
    imgElement.src = "./images/img_0" + i + ".jpg";
    gatesClose();
    setTimeout(gatesOpen, t);
}

function prevImg() {
    if (0 <= i) {
        i--;
    }
    if (i == 0) {
        i = 9;
    }
    imgElement.src = "./images/img_0" + i + ".jpg";
    gatesClose();
    setTimeout(gatesOpen, t);
}
