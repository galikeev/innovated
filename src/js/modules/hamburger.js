const hamburger = () => {

    const menu = document.querySelector('.menu'),
        menuLinks = document.querySelectorAll('.hamburger__links'),
        hamburger = document.querySelector('.hamburger'),
        hamburgerHeader = document.querySelector('.hamburger__wrapper');


    menu.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
        hamburgerHeader.classList.remove('animate__animated', 'animate__fadeOutRight');
        hamburgerHeader.classList.add('animate__animated', 'animate__fadeInRight');
        setTimeout(() => {
            hamburgerHeader.classList.remove('animate__animated', 'animate__fadeInRight');
        }, 1000);
    });

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            hamburgerHeader.classList.remove('animate__animated', 'animate__fadeInRight');
        });
    });
    

    hamburger.addEventListener('click', (e) => {
        if (e.target === hamburger) {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            hamburgerHeader.classList.remove('animate__animated', 'animate__fadeInRight');
        }
    });

};

export default hamburger;