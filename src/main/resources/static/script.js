document.getElementById("kjopBillett").addEventListener("click", validateAndLeggTilBillett);
document.getElementById("slettAlleBilletter").addEventListener("click", slettAlleBilletter);

function validateAndLeggTilBillett() {
    const film = document.getElementById("filmValg").value;
    const antall = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonr = document.getElementById("telefonr").value;
    const epost = document.getElementById("epost").value;

    var telefonRegex = /^((0047)?|\+47|47)?\d{8}$/;
    var epostRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (film !== "" && antall !== "" && fornavn !== "" && etternavn !== "" && telefonr !== "" && epost !== "") {
        leggTilBillett();
    } else if (film === "" && antall === "" && fornavn === "" && etternavn === "" && telefonr === "" && epost === ""){
        alert("Vennligst fyll ut alle feltene.");
    } else if (!telefonRegex.test(telefonr)) {
        alert("Vennligst oppgi et gyldig telefonnummer med 8 siffer.");
    } else if (!epostRegex.test(epost)){
        alert("Vennligst oppgi et gyldig epost med @.");
    }
}
function leggTilBillett() {
    const film = document.getElementById("filmValg").value;
    const antall = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonr = document.getElementById("telefonr").value;
    const epost = document.getElementById("epost").value;

    const nyBillett = document.createElement("li");
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