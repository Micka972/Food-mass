// pour m'amuser, et amuser Lucas qui aime cliquer pour generer des conneries, j'ai fait une petite intervention
//de randomisation des couleurs du root css en cliquant sur le logo:

function getRandomColor() {

    const lettres = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {// on peut me féliciter de l'utilisation d'une boucle for !!
        color += lettres[Math.floor(Math.random() * 16)];// j'aime bien le random car il donne l'impression à l'utilisteur que la machine fait des choix
    }
    return color;
}

function updateRootColors() {
    document.documentElement.style.setProperty('--couleur1', getRandomColor());
    document.documentElement.style.setProperty('--couleur2', getRandomColor());
    document.documentElement.style.setProperty('--couleur3', getRandomColor());
    document.documentElement.style.setProperty('--couleur4', '#000000');// la couleur 4 est fixée au noir ca c'est celle du texte
    document.documentElement.style.setProperty('--couleur5', getRandomColor());
}

//donc on clique sur quoi ? sur le logo..
window.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('logo');
    image.addEventListener('click', updateRootColors);
});






