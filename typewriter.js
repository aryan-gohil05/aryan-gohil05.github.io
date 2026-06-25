document.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.querySelector('.header-name');
    const locationEl = document.querySelector('.header-location');
    if (!nameEl || !locationEl) return;

    const nameText = nameEl.textContent;
    const locationText = locationEl.textContent;

    nameEl.textContent = '';
    locationEl.textContent = '';

    function type(el, text, speed, done) {
        el.classList.add('typing');
        let i = 0;
        const tick = setInterval(() => {
            el.textContent += text[i++];
            if (i === text.length) {
                clearInterval(tick);
                el.classList.remove('typing');
                if (done) done();
            }
        }, speed);
    }

    type(nameEl, nameText, 100, () => {
        setTimeout(() => type(locationEl, locationText, 80), 200);
    });
});
