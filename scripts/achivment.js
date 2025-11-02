const showMoreBtn = document.getElementById('show-more-btn');
const hiddenCards = document.querySelectorAll('.certificate-card.hidden');
let showing = false;

showMoreBtn.addEventListener('click', () => {
    showing = !showing;
    hiddenCards.forEach(card => {
        card.style.display = showing ? 'block' : 'none';
    });
    showMoreBtn.textContent = showing ? 'Show Less' : 'Show More';
});

