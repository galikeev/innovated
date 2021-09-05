import calcScroll from "./calcScroll";
const hamburger = () => {

    const menu = document.querySelector('.menu'),
        menuLinks = document.querySelectorAll('.hamburger__links'),
        hamburger = document.querySelector('.hamburger'),
        scrollHide = calcScroll();


    menu.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
        if (hamburger.classList.contains('hamburger_active')) {
            document.querySelector('body').style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollHide}px`;
        } else {
            document.querySelector('body').style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            document.querySelector('body').style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    });
    

    hamburger.addEventListener('click', (e) => {
        if (e.target === hamburger) {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            document.querySelector('body').style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });

};

export default hamburger;