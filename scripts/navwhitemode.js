(function () {
    const header = document.querySelector('.header');
    const whiteSection = document.querySelector('#work'); // the white section you showed

    if (!header || !whiteSection) return;

    function fallbackCheck() {
        const rect = whiteSection.getBoundingClientRect();

        const headerHeight = header.offsetHeight || 70;

        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            header.classList.add('light');
        } else {
            header.classList.remove('light');
        }
    }

    let io;
    function createObserver() {
        if (io) io.disconnect();
        const headerHeight = header.offsetHeight || 70;
        io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting && entry.intersectionRatio > 0.12) {
                    header.classList.add('light');
                } else {
                    header.classList.remove('light');
                }
            });
        }, {
            root: null,
            threshold: [0, 0.12, 0.5],

            rootMargin: `-${headerHeight}px 0px 0px 0px`
        });
        io.observe(whiteSection);
    }

    createObserver();
    fallbackCheck();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            createObserver();
            fallbackCheck();
        }, 120);
    });

    window.addEventListener('scroll', fallbackCheck, { passive: true });

})();
