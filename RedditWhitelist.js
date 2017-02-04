// ==UserScript==
// @name         Reddit Whitelisted Subs
// @namespace    reddit.com
// @version      0.1
// @description  Blocks and non-whitelisted subs
// @author       Netrve
// @include      http*://*.reddit.com/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
(function() {
    'use strict';
    var whitelist = ["skyrimmods","unrealengine","aww"];
    var whitelistLength = whitelist.length;
    var currURL = document.URL;
    var matchFound = 0;

    function whitelistLoad() {
        console.log("Running check!");
        for (var i = 0; i < whitelistLength; i++) {
            if (currURL.includes(whitelist[i])) {
                matchFound = 1;
                console.log("Match found!");
            }
            else {
                console.log("No match!");
            }
        }
        if (matchFound != 1) {
            //document.body.parentNode.innerHTML = "Subreddit blocked!";
            document.write("SUBREDDIT BLOCKED");
        }
    }

    $(window).load(function() {whitelistLoad();});
})();
