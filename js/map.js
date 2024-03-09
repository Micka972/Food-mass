
const pins = document.querySelectorAll('.Pin');

pins.forEach(pin => {
    pin.addEventListener('click', () => {
        if (pin.style.display !== 'none') {
            pin.style.display = 'none';
        } else {
            pin.style.display = 'block';
        }
    });
});

/*
const pinBacks = document.querySelectorAll('.Pin');

pinBacks.forEach(pin => {
    pin.classList.add('pin');
    setInterval(() => {
        const isVisible = pin.style.display !== 'none';
        const randomTime = Math.random() * 500 + 100;
        setTimeout(() => {
            pin.style.display = isVisible ? 'none' : 'block';
        }, randomTime);
    }, 500);
});

*/



