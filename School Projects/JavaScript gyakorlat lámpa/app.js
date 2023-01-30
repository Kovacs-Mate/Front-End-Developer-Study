function bekapcs() {
    var lampa = document.querySelector("#lampa");
    lampa.src = "./img/lampa_on.jpg";
}
function kikapcs() {
    var lampa = document.querySelector("#lampa");
    lampa.src = "./img/lampa_ki.jpg";
}
function valtoz() {
    document.getElementById("valtozas").innerHTML = "Hello JavaScript";
}
function stilus() {
    document.getElementById("valtozas").style.fontSize = "x-large";
}
function hide() {
    document.getElementById("valtozas").style.display = "none";
}
function show() {
    document.getElementById("valtozas").style.display = "block";
}
function csere() {
    document.getElementById("valtozas").innerHTML = "Paragrafus kicserélve";
}

function nyomtat() {
    window.print();
}
