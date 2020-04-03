// ==UserScript==
// @name        SteamCommunity - Browser to Desktop
// @namespace   https://github.com/Dakraid/MiscellaneousScripts/
// @description Gives the user the possibility to open a Workshop page in their desktop application
// @version     1.0
// @author      Dakraid
// @match       http://steamcommunity.com/sharedfiles/filedetails/*
// @match       https://steamcommunity.com/sharedfiles/filedetails/*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  function process() {
    var url = window.location.href;
    var pattern = /^(.*\?id=)(\d*)$/i;
    var match = url.match(pattern);
    var appURL = 'steam://url/CommunityFilePage/' + match[2];
    
    var dia = confirm("Do you want to open the page in Steam Desktop?");
    if (dia == true) {
      window.open(appURL);
    }
  }

  document.addEventListener('DOMContentLoaded', process(), false);
})();
