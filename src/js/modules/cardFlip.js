const cardFlip = (cardSelector, classToggle) => {

    const cards = document.querySelectorAll(cardSelector);

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle(classToggle);
        });
    });

};

export default cardFlip;