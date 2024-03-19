const pins = document.querySelectorAll('.pin1');

pins.forEach(pin => {
    pin.addEventListener('click', () => {

        pin.style.transform = 'scale(130%)';
        pin.style.cursor = 'pointer';
    });
    });






