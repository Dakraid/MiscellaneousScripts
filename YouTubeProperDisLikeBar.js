// ==UserScript==
// @name         YouTube Proper Dis-/Like Bar
// @namespace    http://netrve.net/
// @version      0.1
// @description  Changes the color of the YT Dis-/Like Bar
// @author       Netrve
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @match        http://youtube.com/*
// @match        https://youtube.com/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    var styles = [
        '#like-bar.ytd-sentiment-bar-renderer{background: green !important;} #sentiment.ytd-video-primary-info-renderer{width: 100% !important;} #container.ytd-sentiment-bar-renderer{background-color: red !important;} ',
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
