const carousel = () => {

    const width = window.getComputedStyle(document.querySelector('.carousel__inner')).width,
        slides = document.querySelectorAll('.carousel__content'),
        slidesField = document.querySelector('.carousel__slides'),
        dots = document.querySelectorAll('.carousel__indicators li');


        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0; /* переменная отвечает за смещение главного блока slidesField */
        let slideIndex = 0; /* активный слайд */


        // const sliderId = document.getAttribute('id');
        dots.forEach(item => {
            item.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndex = slideTo;
                offset = +width.replace(/\D/g, '') /* / 2 */ * slideTo;
    
                slidesField.style.transform = `translateX(-${offset}px)`;
                slidesField.style.transition = `0.5s all`;
    
                dots.forEach(dot => (dot).classList.remove('active-dots'));
                dots[slideIndex].classList.add('active-dots');
            });
        });

};


export default carousel;