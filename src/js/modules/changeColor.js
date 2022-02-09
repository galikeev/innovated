const changeColor = () => {
    const block = document.querySelectorAll('.services__block');

    let images = {
        web: 'assets/img/web_dev.jpg',
        product: 'assets/img/product_brand.jpg',
        website: 'assets/img/website_sol.jpg',
        clean: 'assets/img/clean_code.jpg',
        digital: 'assets/img/digital.jpg',
        support: 'assets/img/support.jpg'
    };
    
    block.forEach(item => {
        item.style.cssText = `background: rgba(0, 0, 0, 0.6)`;
    });


    function mouseOver() {
        block.forEach((item, i) => {
            item.addEventListener('mouseover', () => {
                switch (i) {
                    case 0:
                        item.style.cssText = `background-image: url(${images.web});
                        `;
                        break;
                    case 1:
                        item.style.cssText = `background-image: url(${images.product})`;
                        break;
                    case 2:
                        item.style.cssText = `background-image: url(${images.website})`;
                        break;
                    case 3:
                        item.style.cssText = `background-image: url(${images.clean})`;
                        break;
                    case 4:
                        item.style.cssText = `background-image: url(${images.digital})`;
                        break;
                    case 5:
                        item.style.cssText = `background-image: url(${images.support})`;
                        break;
                }
            });
        });
    }


    mouseOver();

    block.forEach(item => {
        item.addEventListener('mouseout', () => {
            item.style.cssText = `background: rgba(0, 0, 0, 0.6)`;
        });
    });
};

export default changeColor;