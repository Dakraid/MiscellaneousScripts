// ==UserScript==
// @name         Proxer.me Get Stream URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets the video source url from a proxer.me stream
// @author       Netrve
// @match        http*://stream.proxer.me/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.16/clipboard.min.js
// ==/UserScript==

(function() {
    'use strict';

    function getVideoSrc(){
        var vids = document.getElementsByTagName('video');
        var vidsrc = vids.item(0).src;
        var ref = document.getElementById('btn');
        new Clipboard('.btn');
        ref.setAttribute('data-clipboard-text',vidsrc);
    }

    function addButton() {
        $("body").append('<button type="button" id="btn" class="btn" data-clipboard-text="" >Get URL</button>');
    }

    $(window).load(function() {addButton();});
    $(window).load(function() {getVideoSrc();});
})();
