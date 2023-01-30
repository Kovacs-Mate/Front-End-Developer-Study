function kalkulal() {
    //Űrlapadatok
    const szelesseg = getElementById("szelesseg").value;
    const magassag = getElementById("magassag").value;
    const papir = document.getElementById("papirtipus").value;
    //Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);
    let koltseg = terulet * papir;
    //Megjelenítés
    document.getElementById("valasz").style.visibility = "visible";
}
