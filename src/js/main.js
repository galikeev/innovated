import tabs from "./modules/tabs";
import changeColor from "./modules/changecolor";
import carousel from "./modules/carousel";
import playVideo from "./modules/playVideo";
import modal from "./modules/modal";
import scrolling from "./modules/scrolling";
import hamburger from "./modules/hamburger";
import cardFlip from "./modules/cardFlip";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    tabs();
    changeColor();
    carousel();
    playVideo('.promo__play', '.overlay');
    modal();
    scrolling();
    hamburger();
    cardFlip('.card', 'y-flipped');
    cardFlip('.services__content', 'x-flipped');
});