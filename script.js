document.getElementById("monBouton").addEventListener("click", function () {

    // Changer le texte
    document.getElementById("texte").innerText = "Bravo 🎉 Tu viens d'utiliser JavaScript !";

    // Changer la couleur du fond
    document.body.style.backgroundColor = "#d1f7c4";

    // Changer le texte du bouton
    this.innerText = "Déjà cliqué";
});

