// ==UserScript==
// @name         Ani-Stream.com Get Stream URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets the video source url from a Ani-Stream.com stream
// @author       Netrve
// @match        http*://*.ani-stream.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.16/clipboard.min.js
// ==/UserScript==

(function() {
    'use strict';

    function test() {
        var url, result = null;
        var ref = document.getElementById('btn');
        var scripts = document.getElementsByTagName('script');
        new Clipboard('.btn');
        for(var i = 0; i < scripts.length; ++i){
            if(scripts[i].innerHTML.indexOf('file:') != -1){
                var re = new RegExp('(http)+.+(video.mp4)');
                url = scripts[i].innerHTML.match(re);
                result = url[0];
                ref.setAttribute('data-clipboard-text',result);
            }
        }
    }

    function addButton() {
        $("body").append('<button type="button" id="btn" class="btn" data-clipboard-text="" >Get URL</button>');
    }

    $(window).load(function() {addButton();});
    $(window).load(function() {test();});
})();
