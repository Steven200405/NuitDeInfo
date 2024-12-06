// Classe Vignette
class Vignette {
    constructor(titre, texte, texteAccessible, image, descriptionImage, lien) {
        this.titre = titre;
        this.texte = texte;
        this.texteAccessible = texteAccessible;
        this.image = image;
        this.descriptionImage = descriptionImage;
        this.lien = lien;
    }
}

// Création d'une instance de Vignette
const vignette1 =  {
    "Estomac": new Vignette(
        "Estomac",
        "Test",
        "Texte plus simple",
        null,
        "Description de l'estomac",
        null
    ),
    "Poumon": new Vignette(
        "Poumon",
        "Texte du poumon",
        "Texte accessible poumon",
        null,
        "Description du poumon",
        null
    ),
    "Rein": new Vignette(
        "Rein gauche",
        "Texte du rein gauche",
        "Texte accessible rein gauche",
        null,
        "Description du rein gauche",
        null
    ),
};

// Stockage de l'instance dans l'objet global
window.Vignette1 = vignette1;

// Fonction pour afficher le titre
function afficherTout(titre) {
        document.getElementById('titre').textContent = window.vignette.titre;
        document.getElementById('texte').textContent = window.vignette.texte;
}
