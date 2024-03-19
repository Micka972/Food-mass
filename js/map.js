const pins = document.querySelectorAll('.pin1');

pins.forEach(pin => {
    pin.addEventListener('click', () => {
        if (pin.style.display !== 'none') {
            pin.style.display = 'none';
        } else {
            pin.style.display = 'block';
        }
    });
});

const pin = document.querySelectorAll('.pin9, .pin10');

pin.forEach(pin => {
    pin.classList.add('pin');
    setInterval(() => {
        const isVisible = pin.style.display !== 'none';
        const randomTime = Math.random() * 500 + 300;
        setTimeout(() => {
            pin.style.display = isVisible ? 'none' : 'block';
        }, randomTime);
    }, 500);
});




