import calcScroll from "./calcScroll";
const modal = () => {

    const scrollHide = calcScroll();
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                modal.classList.add('animate__animated', 'animate__fadeIn');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollHide}px`;
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }



    bindModal('.header__btn', '.modal', '.modal__block .close');
    bindModal('.tabs__btn', '.modal', '.modal__block .close');
    bindModal('.footer__btn', '.modal', '.modal__block .close');
};

export default modal;