// objektum létrehozása

// var odon = {
//     nev: "Ödön",
//     szuletesiEv: 1978,
//     foglalkozas: "grafikus",
// };

/*
var Szemely = function (nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
};

Szemely.prototype.korSzamitas = function () {
    console.log(2023 - this.szuletesiEv);
};

Szemely.prototype.teszt = "teszt";

var odon = new Szemely("Ödön", 1978, "grafikus");
odon.korSzamitas();

var erzsi = new Szemely("Erzsi", 1964, "bolti eladó");
erzsi.korSzamitas();

console.log(Szemely);
console.log(erzsi);
console.log(erzsi.teszt);
*/

var szemelyProto = {
    korSzamitas: function () {
        console.log(2023 - this.szuletesiEv);
    },
};

var odon = Object.create(szemelyProto);
odon.nev = "Ödön";
odon.szuletesiEv = "1960";
odon.foglalkozas = "pék";

var kati = Object.create(szemelyProto, {
    nev: { value: "Kati" },
    szuletesiEv: { value: "1955" },
    foglalkozas: { value: "kozmetikus" },
});
