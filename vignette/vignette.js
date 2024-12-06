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
const vignette1 = new Vignette(
    "Titre 1",
    "Texte blabla",
    "Texte plus simple",
    null,
    "Description",
    null
);

// Stockage de l'instance dans l'objet global
window.Vignette1 = vignette1;

// Fonction pour afficher le titre
function afficherTout() {
        document.getElementById('titre').textContent = window.Vignette1.titre;
        document.getElementById('texte').textContent = window.Vignette1.texte;
}
