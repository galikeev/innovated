const tabs = () => {
    const header = document.querySelector('.tabs'),
        tabs = document.querySelectorAll('li'),
        content = document.querySelectorAll('.tabs__wrapper');

        content[0].classList.add('animate__animated', 'animate__fadeIn');
        content[1].classList.add('animate__animated', 'animate__fadeIn');

    header.addEventListener('click', (e) => {
        let target = e.target; /* тот элемент на котором происходит событие (клик) */
        if (target && target.tagName === 'LI') { /* Если тот элемент на который кликнули существует и это тэг li */
            tabs.forEach((btn) => btn.classList.remove('active')); /* Убираем класс активности со всех элементов в меню */
            target.classList.add('active'); /* А элементу на котором происходит событие (клик) добавляем класс активности */
            content.forEach(item => item.classList.toggle('flex'));
        }


        
    });
};

export default tabs;