document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.projeto-item');
    const inactiveLink = document.querySelector('.inactive-link');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
    
    if(inactiveLink) {
        inactiveLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            alert('Este projeto está em desenvolvimento e será lançado em breve!');
        });
    }
});