const scrolling = () => {

    const upElem = document.querySelector('.pageup'); /* получаем кнопку вверх */

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) { /* если прокрученное расстояние больше 1650 пикселей */
            upElem.classList.add('animate__animated', 'animate__fadeIn'); /* то показываем кнопку вверх с анимацией */
            upElem.classList.remove('animate__fadeOut');
        } else {
            upElem.classList.add('animate__fadeOut'); /* скрываем кнопку вверх с анимацией */
            upElem.classList.remove('animate__fadeIn'); 
        }
    });

    let links = document.querySelectorAll('[href^="#"]'), /* получаем все ссылки, которые начинаются с # (хэш) */
        speed = 0.2; /* переменная отвечает за скорость */
    
    links.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            let heightTop = document.documentElement.scrollTop, /* прокрученное расстояние */
                hash = this.hash, /* текущий хэш (#) */
                toBlock = document.querySelector(hash).getBoundingClientRect().top, /* верхняя граница  */
                start = null; /* стартовая позиция */

            requestAnimationFrame(step);

            function step(time) { /* аргумент будет передаваться автоматически */
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : Math.min(heightTop + progress/speed, heightTop + toBlock)); /* отвечает за количество пикселей, которые необходимо пролистать в течение анимации */
                document.documentElement.scrollTo(0, r);

                if (r != heightTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

};

export default scrolling;