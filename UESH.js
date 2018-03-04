// ==UserScript==
// @name         Unreal Engine Small Header
// @namespace    http://unrealengine.com/
// @version      0.6.3
// @description  This script resizes the header when scrolling the page
// @author       Mheetu, Dakraid
// @include      http*://*unrealengine.com/*
// @exclude      http*://accounts.unrealengine.com/login/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
(function() {
    'use strict';

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

var smallNav = false;
var styles = [
    '#toplinks {top: -30px !important}',
    '#epicGamesNav *  {transition: all .5s !important}',
    '#epicGamesNav {margin-top: 4.5em !important}',
    '#epicGamesNav {height: 0px !important}',
    '#epicGamesNav #cta a {height: 40px  !important}',
    '#epicGamesNav #cta span {margin-top: -31px  !important}',
    '#epicGamesNav #cta.cta.accent-bg-color.accent-bg-color-hover {height: 40px !important}',
    '#epicGamesNav #user.dropdown ul li a {padding: 14px !important}',
    '#epicGamesNav .cta {margin: 10px 15px 0 !important}',
    '#epicGamesNav .egLogo #eg-properties {top: 4.5em !important}',
    '#epicGamesNav .egLogo .eg-header-icon-epicgames {padding-top: .4em !important}',
    '#epicGamesNav .egLogo {height: 4.5em !important}',
    '#epicGamesNav .nav-line {height: 4.5em !important; padding: 30px !important}',
    '#epicGamesNav .right-col .rightNav>div {margin-right: 0px !important}',
    '#epicGamesNav .right-col .rightNav>div a {padding: 1.6em 1.2em 1.1em 1em !important; height: 100%}',
    '#epicGamesNav .right-col .rightNav>div a:hover {background-color: #0aaff1}',
    '#epicGamesNav .right-col .rightNav>div a i {maring: 2px 8px .5em 2px !important}',
    '#epicGamesNav .right-col .rightNav>div a span {margin-top: 4px !important}',
    '#epicGamesNav .siteNav, #epicGamesNav .siteNavKids, #epicGamesNav nav #propNav, #epicGamesNav .right-col, #epicGamesNav .right-col .rightNav {height: 4.5em !important}',
    '#epicGamesNav .siteNavKids li, #epicGamesNav .siteNav li {margin-right: 0px !important}',
    '#epicGamesNav .siteNavKids li a, #epicGamesNav .siteNav li a {padding: 1.7em 1em !important}',
    '#epicGamesNav .siteNavKids li ul li a, #epicGamesNav .siteNav li ul li a {padding: 1em !important}',
    '#epicGamesNav .siteNavKids li ul, #epicGamesNav .siteNav li ul, #epicGamesNav #locale ul, #epicGamesNav #user.dropdown ul {top: 4.5em !important}',
    '#epicGamesNav .siteNavKids li.dropdown, #epicGamesNav .siteNav li.dropdown {height: 100% !important}',
    '#epicGamesNav .ue .propLogo {margin-top: 10px, height: 68% !important}',
    '#epicGamesNav .ue {height: auto !important}',
    '#epicGamesNav .ue {margin-top: 60px !important}',
    '#epicGamesNav li.kid.active, #epicGamesNav li.kid:hover {background-color: #0aaff1}',
    '#epicGamesNav nav .dropdown ul {padding: 0em !important}',
    '#epicGamesNav nav .dropdown:after {top: 30px !important}',
    '#epicGamesNav nav {height: 4.5em !important}',
    '#user.loggedIn.dropdown::after {right: 52px; margin-top: 9px}',
    '#locale.dropdown::after {right: 52px !important; margin-top: 9px}'
].join(' ');

$(window).load(function() {
    smallNav = true;
    addGlobalStyle(styles);
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 200 && !smallNav) {
        smallNav = true;
        addGlobalStyle(styles);
    }
});
})();
