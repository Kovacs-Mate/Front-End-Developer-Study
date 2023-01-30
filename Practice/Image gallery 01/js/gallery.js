function toggleImg(imgs) {
    var element = document.querySelector(".img-fullscreen-container");
    var expandImg = document.querySelector(".img-fullscreen");
    if (!element.classList.contains("active")) {
        expandImg.src = imgs.src;
    } else {
        element.classList.toggle("active");
    }
}
