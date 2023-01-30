var cim = document.getElementById("cim");
var gomb = document.getElementById("gomb");
var x = "Jó reggelt, hogy aludtál?";
var szam1 = 5;
var szam2 = 10;

gomb.addEventListener("click",changeColor);
document.getElementById("szoveg1").innerHTML = x;
document.getElementById("szoveg2").innerHTML = x;

x.style.color = "red";

function changeColor(e){
    if (cim.style.backgroundColor == "green") cim.style.backgroundColor = "red";
    else cim.style.backgroundColor = "green";
}

function kiirat(){
    document.getElementById("szoveg3"),innerHTML = "A két változó értéke: " + szam1 + "és" + szam2;
}

function szoroz(){
    document.getElementById("szoveg3"),innerHTML = "A szorzatuk értéke: " + szam1*szam2;
}

function vizsgalat(){
}