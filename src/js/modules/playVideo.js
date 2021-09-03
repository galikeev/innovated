const playVideo = (triggers, overlaySelector) => {

    const btn = document.querySelector(triggers),
        overlay = document.querySelector(overlaySelector),
        close = document.querySelector('.close');
    let player;


    function bindTriggers() {
        btn.addEventListener('click', () => {
            if (document.querySelector('iframe#frame')) {
                overlay.style.display = 'flex';
                overlay.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                const path = btn.getAttribute('data-url');
                createPlayer(path);
            }
        });
    }

    function closeBtn() {
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            player.stopVideo();
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
                player.stopVideo();
            }
        });
    }

    function createPlayer(url) {
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });

        console.log(player);
        overlay.style.display = 'flex';
        overlay.classList.add('animate__animated', 'animate__fadeIn');
    }

    const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    bindTriggers();
    closeBtn();

};

export default playVideo;