// let és const
// es5

var nev5 = "Teszt Eleke";
var kor5 = 40;

nev5 = "Dr. Teszt Elek";

console.log(nev5);

function nyelvvizsga5(siker) {
    if (siker) {
        var keresztnev = "Ödön";
        var szulEv = 1970;
    }
    console.log(
        keresztnev + "(születési év:" + szulEv + ") sikeres nyelvvizsgát tett."
    );
}
nyelvvizsga5(true);

// let és const
//ES6 -2015
const nev6 = "teszt Elek";
let kor6 = 40;

function nyelvvizsga6(siker) {
    let keresztnev = "Ödön";
    const szulEv = 1970;
    if (siker) {
        console.log(
            keresztnev +
                "(születési év:" +
                szulEv +
                ") sikeres nyelvvizsgát tett."
        );
    }
}
nyelvvizsga6(true);

//let i = 9;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

var i = 9;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

// blokkok és azonnal végrehajtandó fügvények IIFE
{
    const a = 1;
    let b = 2;
}
//console.log(a + b);

//ES5

(function () {
    c = 3;
    console.log(c);
})();

// Sztringek ES6-ban

let vezeteknev1 = "Teszt";
let keresztnev1 = "Elek";
const szuletesiEv = 1970;

function korszamitas(ev) {
    return 2023 - ev;
}

console.log(
    vezeteknev1 +
        " " +
        keresztnev1 +
        ", született " +
        szuletesiEv +
        "-ben. Most " +
        korszamitas(szuletesiEv) +
        " éves."
);

// ES6 AltGr 7 backtick ` és AltGr é $ használatával.

console.log(
    `${vezeteknev1} ${keresztnev1}, született ${szuletesiEv}-ben. Most ${korszamitas(
        szuletesiEv
    )} éves.`
);

const nev1 = `${vezeteknev1} ${keresztnev1}`;
console.log(nev1.startsWith("T"));
console.log(nev1.endsWith("k"));
console.log(nev1.includes("szt E"));
console.log(nev1.repeat(3));
console.log(`${vezeteknev1} `.repeat(3));

// nyíl fügvények

/*const evek = [1978, 1975, 1954, 2010, 1981];

//ES5

var korokES5 = evek.map(function (elem) {
    return 2023 - elem;
});

console.log(korokES5);

//ES6

let korokES6 = evek.map((elem) => 2023 - elem);

console.log(korokES6);

korokES6 = evek.map((elem, index) => `kor ${index}: ${2023 - elem}.`);

console.log(korokES6);

korokES6 = evek.map((elem, index) => {
    const aktivEvek = new Date().getFullYear();
    const kor = aktivEvek - elem;
    return `kor ${index}: ${kor}.`;
});

console.log(korokES6); */

// Myíl fügvények 2
// ES5
/*
var dobozES5 = {
    szin: "zöld",
    pozicio: 1,
    kattintsRam: function () {
        var objektum = this;
        document.querySelector(".zold").addEventListener("click", function () {
            var szoveg =
                "Én vagyok az " +
                objektum.pozicio +
                ". doboz, és a színem: " +
                objektum.szin +
                ".";
            alert(szoveg);
        });
    },
};

dobozES5.kattintsRam();

//ES6

var dobozES6 = {
    szin: "zöld",
    pozicio: 1,
    kattintsRam: function () {
        document.querySelector(".zold").addEventListener("click", () => {
            var szoveg =
                "Én vagyok az " +
                this.pozicio +
                ". doboz, és a színem: " +
                this.szin +
                ".";
            alert(szoveg);
        });
    },
};

dobozES6.kattintsRam();
*/

function szemely(nev) {
    this.nev = nev;
}

szemely.prototype.barataimES5 = function (haverok) {
    var tomb = haverok.map(function (elem) {
        return this.nev + " barátja: " + elem + ".";
    });
};

console.log(tomb);

var haverok = ["jóska", "Pista", "Aladár", "Fecó"];
new szemely("Géza").barataimES5(haverok);
