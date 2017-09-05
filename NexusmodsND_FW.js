// ==UserScript==
// @name         Nexusmods New Design Full Width
// @namespace    http://netrve.net/
// @version      0.1
// @description  Changes the new Nexusmods design to use the full window width
// @author       Netrve
// @match        http://nexusmods.com/*
// @match        https://nexusmods.com/*
// @match        http://*.nexusmods.com/*
// @match        https://*.nexusmods.com/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    var styles = [
        '.wrapper {max-width: fit-content; padding: 0;} figure.image_figure .fore_div_mods img {width: auto; height: 100%} .home-trending ul.tiles li.image-tile:nth-of-type(1), .home-trending ul.tiles li.image-tile:nth-of-type(2) {width: 20%;}',
    ].join(' ');

    function addGlobalStyle(css) {
        var head, style, handle;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'custom-styles';
        style.innerHTML = css;
        head.appendChild(style);
    }

    $(window).ready(function() {
        addGlobalStyle(styles);
    });
})();
