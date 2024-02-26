function validateAndLeggTilBillett() {
    let film = document.getElementById("filmValg").value;
    let antall = document.getElementById("antallBilletter").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonr = document.getElementById("telefonr").value;
    let epost = document.getElementById("epost").value;

    var telefonRegex = /^(4[0-9]{7}|9[0-9]{7})$/;
    var epostRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (film !== "" && antall !== "" && fornavn !== "" && etternavn !== "") {
        if (telefonr === "" || !telefonRegex.test(telefonr)) {
            alert("Vennligst oppgi et gyldig telefonnummer med 8 siffer.");
        } else if (epost === "" || !epostRegex.test(epost)) {
            alert("Vennligst oppgi en gyldig epostadresse.");
        } else {
            leggTilBillett();
        }
    } else {
        alert("Vennligst fyll ut alle feltene.");
    }
}

function leggTilBillett() {
    let film = document.getElementById("filmValg").value;
    let antall = document.getElementById("antallBilletter").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonr = document.getElementById("telefonr").value;
    let epost = document.getElementById("epost").value

    let nyBillett = document.createElement("li");
    nyBillett.textContent = `${film} - ${antall} billetter, ${fornavn} ${etternavn}, ${telefonr}, ${epost}`;

    document.getElementById("billettListe").appendChild(nyBillett);

    document.getElementById("filmValg").value = "";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonr").value = "";
    document.getElementById("epost").value = "";
}
function slettAlleBilletter() {
    document.getElementById("billettListe").innerHTML = "";
}