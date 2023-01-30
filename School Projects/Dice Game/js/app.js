var pontszamok, korPontszam, aktivJatekos, jatekFolyamatban, osszPontszam;

init();
//kocka = Math.floor(Math.random() * 6 ) + 1;

//document.querySelector('#current-0').textContent = kocka;
//document.querySelector('#current-' + aktivJatekos).innerHTML = '<b>'+kocka + '</b>';

// dobás gomb kezelője
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (jatekFolyamatban) {
        // kell egy véletlen szám
        var kocka1 = Math.floor(Math.random() * 6) + 1;
        var kocka2 = Math.floor(Math.random() * 6) + 1;

        // eredmény megjelenítése
        var kockaDOM1 = document.querySelector("#dice-1");
        kockaDOM1.style.display = "block";
        kockaDOM1.src = "img/dice-" + kocka1 + ".png";

        var kockaDOM2 = document.querySelector("#dice-2");
        kockaDOM2.style.display = "block";
        kockaDOM2.src = "img/dice-" + kocka2 + ".png";

        // körben elért pontszám frissitése, ha nem 1-et dobunk
        // 2 db hatos esetén nulláz
        if (kocka1 + kocka2 == 2) {
            // következő játékos
            kovetkezoJatekos();
        } else if (kocka1 + kocka2 == 12) {
            console.log("12", kocka1, kocka2, pontszamok);
            pontszamok[aktivJatekos] = 0;
            //külön kezeli a pontszámokat
            document.querySelector("#score-" + aktivJatekos).textContent = 0;
            kovetkezoJatekos();
        } else {
            // itt adjuk hozzá a számot az akt. ponthoz
            korPontszam += kocka1 += kocka2;
            document.querySelector("#current-" + aktivJatekos).textContent =
                korPontszam;
        }
    }
});

// megtartom gomb esemény kezelője
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (jatekFolyamatban) {
        // összes pontszám frissitése a kódban

        pontszamok[aktivJatekos] += korPontszam;

        // összes pontszám frissitése a felületen (UI)
        document.querySelector("#score-" + aktivJatekos).textContent =
            pontszamok[aktivJatekos];

        // nyert a játékos?
        if (pontszamok[aktivJatekos] >= osszPontszam) {
            document.querySelector("#name-" + aktivJatekos).textContent =
                "Győztes";
            document
                .querySelector(".player-" + aktivJatekos + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + aktivJatekos + "-panel")
                .classList.remove("active");
            jatekFolyamatban = false;
        } else {
            // következő játékos
            kovetkezoJatekos();
        }
    }
});
// új játék inditása
document.querySelector(".btn-new").addEventListener("click", init);

// következő játékos
function kovetkezoJatekos() {
    aktivJatekos === 0 ? (aktivJatekos = 1) : (aktivJatekos = 0);
    korPontszam = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //document.querySelector("#dice-1").style.display = "none";
    //document.querySelector("#dice-2").style.display = "none";
}

function init() {
    pontszamok = [0, 0];
    korPontszam = 0;
    aktivJatekos = 0;
    jatekFolyamatban = true;
    osszPontszam = prompt("Add meg a nyeréshez szükséges összpontszámot!");

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "Frodó";
    document.getElementById("name-1").textContent = "Samu";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}
