// ==UserScript==
// @name           Github Pull Request Full-Width
// @namespace      http://remygiard.com
// @description    Displays the Pull Request screen of Github in full browser width
// @include        http*://*github.com*/pull*
// @version        1.0
// @grant          none
// ==/UserScript==

function updateCSS() {
  var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
  style.textContent = ".container {width: 90%;}";
  style.textContent += " .repository-content {width:95% !important;}";
  style.textContent += " .discussion-timeline {width: 90%;}"
}

updateCSS();
