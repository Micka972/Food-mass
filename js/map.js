
// ici c'est l'interaction avec les points (pin) sur le plan


// ci-dessous, la pin1 disparait en cliquant dessus, ainsi nous pourrons remplacer le clic par les appels de logique de tris de restaurants.
const pins = document.querySelectorAll('.Pin1');

pins.forEach(pin => {
    pin.addEventListener('click', () => {// on clique dessus, (à remplacer par l'évenement correspondant au tri des restaurants
        if (pin.style.display !== 'none') {
            pin.style.display = 'none';// et elle disparait en display none.
        } else {
            pin.style.display = 'block';
        }
    });// il n'y a pas de possibilité de le faire réaparaître sauf en rechargant la page.
});// cette logique doit être adaptée à l'ensembles des pints de restaurants répertoriés.



// ci-dessous, c'est une expérimetation de clignotement de ceratains points.. à voir si c'est pertinant.
const pin = document.querySelectorAll('.Pin2, .Pin4');// les pin2 et 4 ont été choisies pour cette expérience

pin.forEach(pin => {
    pin.classList.add('pin'); // les pins déclarée en variable ci-dessus, clignotent indépendament
    setInterval(() => {
        const isVisible = pin.style.display !== 'none';
        const randomTime = Math.random() * 500 + 300; // ici le clignotement est aléatoire dans son rythme et sa régularité. Cela permet un clignotement asynchrone
        setTimeout(() => {
            pin.style.display = isVisible ? 'none' : 'block';
        }, randomTime);
    }, 500);// ici la durée de clignotement 500ms
});





