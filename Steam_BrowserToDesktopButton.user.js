// ==UserScript==
// @name        SteamCommunity - Browser to Desktop Button
// @namespace   https://github.com/Dakraid/MiscellaneousScripts/
// @description Gives the user the possibility to open a Workshop page in their desktop application through a button
// @version     1.0
// @author      Dakraid
// @match       http://steamcommunity.com/sharedfiles/filedetails/*
// @match       https://steamcommunity.com/sharedfiles/filedetails/*
// @grant       GM_addStyle
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
  'use strict';  
  
  var btnTemplate = `
  <a onclick="" id="OpenItemBtn" class="btn_green_white_innerfade btn_border_2px btn_medium" style="right: 160px;">
  <div class="subscribeIcon"></div>
    <span class="subscribeText">
      <div id="SubscribeItemOptionAdd" class="subscribeOption subscribe selected">Open in Client</div>
    </span>
  </a>
`
  function OpenRedirect() {
    var origin, destination;
    origin  = window.location.href;
    destination = origin.split('?id=')[1];
    destination =  'steam://url/CommunityFilePage/' + destination;

    window.open(destination);
  };
  
  var targetHTML = document.getElementsByClassName("game_area_purchase_game")[0]; 
  targetHTML.innerHTML = targetHTML.innerHTML + btnTemplate;
  
  $('body').on('click', '#OpenItemBtn', function() {
    var origin, destination;
    origin  = window.location.href;
    destination = origin.split('?id=')[1];
    destination =  'steam://url/CommunityFilePage/' + destination;

    window.open(destination);
  });	
})();

