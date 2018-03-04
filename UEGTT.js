// ==UserScript==
// @name         Unreal Engine Jump to Top
// @namespace    http://unrealengine.com/
// @version      0.3
// @description  Displays a button to jump to top
// @author       Dakraid
// @include      http*://forums.unrealengine.com/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
(function() {
    'use strict';

var GTT = false;
var oldUrlPath = document.URL;
var styles = [
    ':root .goTop {display: block !important; position: fixed; right: 0.9%; bottom: 2.5%;}',
    ':root .goTopLink {display: block !important; content: url(images/misc/black_downward_arrow.png); transform: rotate(180deg)}',
].join(' ');

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'custom-styles';
    style.innerHTML = css;
    head.appendChild(style);
}

function addButton() {
    $("body").append('<div class="goTop"><a id="goToTop" class="goTopLink" href="javascript:void(0)"></a></div>');
}

$(window).load(function() {GTT=true;addGlobalStyle(styles);addButton();});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 200 && !GTT) {
        GTT = true;
        addGlobalStyle(styles);
        addButton();
    }
});
$('body').on('click', '#goToTop', function() {
    console.log(oldUrlPath);
    if (/#post/.test(oldUrlPath)){
    oldUrlPath = oldUrlPath.replace(/#post.*$/,"");
    }
    if (! /#top/.test(oldUrlPath) ) {
        var newURL = oldUrlPath + "#top";
        /*-- replace() puts the good page in the history instead of the bad page.*/
        window.location.replace (newURL);
    }
});

})();
