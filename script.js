var ecran = document.getElementById("ecran");

function ajouter(valeur) {
    ecran.value = ecran.value + valeur;
}

function effacer() {
    ecran.value = "";
}

function calculer() {
    try {
        ecran.value = eval(ecran.value);
    } catch (erreur) {
        ecran.value = "Erreur";
    }
}