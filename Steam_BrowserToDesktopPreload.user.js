// ==UserScript==
// @name        SteamCommunity - Browser to Desktop (Pre-load Version)
// @namespace   https://github.com/Dakraid/MiscellaneousScripts/
// @description Gives the user the possibility to open a Workshop page in their desktop application, executes before page is fully loaded
// @version     1.0
// @author      Dakraid
// @match       http://steamcommunity.com/sharedfiles/filedetails/*
// @match       https://steamcommunity.com/sharedfiles/filedetails/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function() {
  'use strict';  

  function URLRedirect() {
    var origin, destination;
    origin  = window.location.href;
    destination = origin.split('?id=')[1];
    destination =  'steam://url/CommunityFilePage/' + destination;

    var dia = confirm("Do you want to open the page in Steam Desktop?");
    if (dia == true) {
      window.open(destination);
    }
  }

  URLRedirect()
})();

