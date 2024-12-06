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
const vignettes = {
    "Estomac": new Vignette(
        "Le Microbiome de l’océan : Essentiel à notre Santé et à l'Équilibre de la Planète",
        "Nos estomacs abrite des milliers de bonnes bactéries, champignons, virus et parasites non pathogènes. C’est ce que l’on appelle le microbiote. Il joue un rôle essentiel dans la digestion, la protection contre les infections, le maintien de l'équilibre du système immunitaire et même l'influence sur l'humeur et la santé mentale.L’océan est le microbiote de notre monde, il contient un très grand nombre de bactéries, de microbes, de virus, de champignons et de micro-algues. On l'appelle le microbiome, cette environnement permet à énormément d'espèce de se développer et à maintenire l’équilibre du monde animal. ",
        "Texte plus simple",
        "./Images/microbiome.jpg",
        "Description",
        "https://fondationtaraocean.org/mission-microbiomes/microbiome-marin-majorite-invisible-locean/"
    ),
    "Poumon": new Vignette(
        "Poumons et Océan : La Biodiversité, Gardienne  de la santé",
        "Les poumons abritent une flore microbienne spécifique qui aide à la protection et à la santé respiratoire. L'océan, avec ses récifs coralliens et sa biodiversité marine, abrite une vie complexe qui soutient les cycles naturels, et permet à l’océan de capturer le CO2 et à distribuer l’oxygène. La biodiversité permet, tout comme la flore microbienne des poumons, de protéger les d'océan d'espèce invasive qui nuisent au bon équilibre mondiale.",
        "Texte plus simple",
        "./Images/coraux_diversité_poumons.jpg",
        "Description",
        null
    ),
    "Rein": new Vignette(
        "Les Courants Océaniques et les Reins : Deux Forces de Redistribution et d'Élimination",
        "Les courants de profondeur effectuent l’élimination et redistribution : ils transportent les eaux riches en nutriments et éliminent les déchets organiques des couches superficielles, tout comme les reins qui éliminent les déchets du sang tout en distribuant des substances essentielles.",
        "Texte plus simple",
        null,
        "Description",
        "Les Courants Océaniques : Différents Types, Causes, Effets Et Importance | Durable"
    ),
    "Peau": new Vignette(
        "La Peau et l'Océan : Deux Barrières Essentielles à l'Équilibre",
        "Le plus grand organisme du corps humain : il agit comme une barrière protectrice tout en régulant la température corporelle. Comme la surface de l’océan! La surface de l’océan est un interface entre l’atmosphère et les profondeurs, elle régule l’échange de chaleur, d’humidité et de gaz, tout en protégeant les écosystèmes sous-jacents..La peau protège le corps des agressions externes (UV, microbes, substances toxiques) et la surface de l’océan sert de barrière entre l'atmosphère et les profondeurs marines, protégeant les écosystèmes marins des variations climatiques extrêmes et des polluants extérieurs.La peau participe aux échanges minimes de gaz (CO₂ et O₂) à travers la sueur et les pores.La surface de l’océan joue un rôle clé dans les échanges de gaz avec l’atmosphère, en absorbant le dioxyde de carbone (CO₂) et en libérant de l’oxygène produit par le phytoplancton.",
        "Texte plus simple",
        "./Images/Surface_de_leau.jpg",
        "Description",
        null
    ),
    "Coeur": new Vignette(
        "L’océan :  Notre source d'Oxygène ",
        "Le cœur permet de réoxygéner tout notre système sanguin à chaque battement tout comme les phytoplanctons (micro-organismes marins) , contenue dans l’océan, qui rejettent entre 50% à 80% d'oxygène dans notre atmosphère. De plus, l'océan absorbe un quart du CO2 rejeté par l’homme. ",
        "Texte plus simple",
        "./Images/coeurOcean.jpg",
        "Description",
        null
    ),
    "Sang": new Vignette(
        "Océan et Sang : La Circulation des Fluides au Service de la Température Planétaire",
        "L’océan permet de de stocker la chaleur, régulant la température mondiale. Cela s'explique par les courants océaniques qui distribuent l’excès de chaleur reçu aux tropiques vers les plus hautes latitudes. D’une manière générale, les gaz sont plus solubles dans les eaux froides que chaudes. Par conséquent, les eaux de surfaces des hautes latitudes sont plus riches en gaz que celles des basses latitudes. Le renouvellement des eaux de surface par la circulation océanique jouent par conséquent un rôle très important dans le cycle du gaz carbonique et du carbone, en entraînant les eaux enrichies des hautes latitudes vers l’océan profond.",
        "Texte plus simple",
        "./Images/courant_océanique_températue.webp",
        "Description",
        "https://ocean-climate.org/presentation-des-fiches-scientifiques-ocean-et-climat/locean-reservoir-de-chaleur/"
    )
};

// Stockage de l'instance dans l'objet global
window.vignettes = vignettes;

// Fonction pour afficher le titre
function afficherTout(event, titre) {
    event.preventDefault();
    const vignette = window.vignettes[titre];
    console.log(vignette);
    if (vignette) {
        document.getElementById('titre').textContent = vignette.titre;
        const texte = document.getElementById('texte').textContent = vignette.texte;
        const button = document.createElement('button');
        button.id = 'toogleTexteAccessible';
        button.textContent = 'Afficher texte accessible';
        button.addEventListener('click', function () {
            const texteAccessible = document.getElementById('texteAccessible').textContent = vignette.texte;
            if (texteAccessible.style.display === 'none') {
                texteAccessible.style.display = 'block';
                texte.style.display = 'none';
            }
            else {
                texteAccessible.style.display = 'none';
                texte.style.display = 'block';
            }
        })
        const img = document.getElementById('image');
        if (vignette.image) {
            img.src = vignette.image;
            img.alt = vignette.descriptionImage;
            img.style.display = 'block';
        }
        else {
            img.style.display = 'none';
        }

        const lien = document.getElementById('lien');
        if (vignette.lien) {
            lien.href = vignette.lien;
            lien.style.display = 'inline';
        }
        else {
            lien.style.display = 'none';
        }

    }
}
