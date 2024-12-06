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
const Estomac = new Vignette(
    "Le Microbiome de l’océan : Essentiel à notre Santé et à l'Équilibre de la Planète",
    "Nos estomacs abrite des milliers de bonnes bactéries, champignons, virus et parasites non pathogènes. C’est ce que l’on appelle le microbiote. Il joue un rôle essentiel dans la digestion, la protection contre les infections, le maintien de l'équilibre du système immunitaire et même l'influence sur l'humeur et la santé mentale.L’océan est le microbiote de notre monde, il contient un très grand nombre de bactéries, de microbes, de virus, de champignons et de micro-algues. On l'appelle le microbiome, cette environnement permet à énormément d'espèce de se développer et à maintenire l’équilibre du monde animal. ",
    "Texte plus simple",
    Images/microbiome.jpg,
    "Description",
    "https://fondationtaraocean.org/mission-microbiomes/microbiome-marin-majorite-invisible-locean/"
);
const Peau = new Vignette(
    "La Peau et l'Océan : Deux Barrières Essentielles à l'Équilibre",
    "Le plus grand organisme du corps humain : il agit comme une barrière protectrice tout en régulant la température corporelle. Comme la surface de l’océan! La surface de l’océan est un interface entre l’atmosphère et les profondeurs, elle régule l’échange de chaleur, d’humidité et de gaz, tout en protégeant les écosystèmes sous-jacents..La peau protège le corps des agressions externes (UV, microbes, substances toxiques) et la surface de l’océan sert de barrière entre l'atmosphère et les profondeurs marines, protégeant les écosystèmes marins des variations climatiques extrêmes et des polluants extérieurs.La peau participe aux échanges minimes de gaz (CO₂ et O₂) à travers la sueur et les pores.La surface de l’océan joue un rôle clé dans les échanges de gaz avec l’atmosphère, en absorbant le dioxyde de carbone (CO₂) et en libérant de l’oxygène produit par le phytoplancton.",
    "Texte plus simple",
    Images/Surface_de_leau.jpg,
    "Description",
    null
);


// Stockage de l'instance dans l'objet global
window.Estomac = Estomac;
window.Peau=Peau;

// Fonction pour afficher le titre
function afficherTout() {
        document.getElementById('titre').textContent = window.Estomac.titre;
        document.getElementById('texte').textContent = window.Estomac.texte;
}
