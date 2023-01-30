function btnShow() {
    const x = document.querySelector(".show");
    if (x.style.height === "10px") {
        x.style.display = "flex";
        /* setTimeout(animOut, 100); */
        x.style.height = "500px";
        x.style.borderRadius = "0px";
        x.style.backgroundColor = "black";
        x.style.opacity = "0.2";
        x.style.transition = "3s";
    } else {
        x.style.display = "Flex";
        x.style.height = "10px";
        x.style.backgroundColor = "greenyellow";
        x.style.borderRadius = "20px";
        x.style.opacity = "1";
        x.style.transition = "3s";
    }
}
