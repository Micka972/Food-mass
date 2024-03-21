
function getRandomColor() {

    const lettres = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += lettres[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateRootColors() {
    document.documentElement.style.setProperty('--couleur1', getRandomColor());
    document.documentElement.style.setProperty('--couleur2', getRandomColor());
    document.documentElement.style.setProperty('--couleur3', getRandomColor());
    document.documentElement.style.setProperty('--couleur4', '#000000');

    document.documentElement.style.setProperty('--couleur5', getRandomColor());
}

window.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('logo');
    image.addEventListener('click', updateRootColors);
});


const reloadLinks = document.querySelectorAll('.reload-link');

reloadLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Recharge la page après un court délai
        setTimeout(() => {
            location.reload();
        }, 100);
    });
});



