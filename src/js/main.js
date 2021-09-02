import tabs from "./modules/tabs";
import changeColor from "./modules/changecolor";
import carousel from "./modules/carousel";
import playVideo from "./modules/playVideo";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    tabs();
    changeColor();
    carousel();
    playVideo('.promo__play', '.overlay');
});