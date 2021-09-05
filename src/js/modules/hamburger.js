const hamburger = () => {

    const menu = document.querySelector('.menu'),
        menuLinks = document.querySelectorAll('.hamburger__links'),
        hamburger = document.querySelector('.hamburger'),
        bodyScroll = document.querySelector('body');


    menu.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
        bodyScroll.classList.add('menu_scroll');
    });

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            bodyScroll.classList.remove('menu_scroll');
        });
    });

    hamburger.addEventListener('click', (e) => {
        if (e.target === hamburger) {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            bodyScroll.classList.remove('menu_scroll');
        }
    });

};

export default hamburger;