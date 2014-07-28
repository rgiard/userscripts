// ==UserScript==
// @name           Github Pull Request Full-Width
// @namespace      http://remygiard.com
// @description    Displays the Pull Request screen of Github in full browser width
// @include        http*://*github.com/*/pull/*
// @include        http*://*github.com/*/commit/*
// @include        http*://*github.com/*/compare/*
// @version        1.0
// @grant          none
// ==/UserScript==

function updateCSS() {
	var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
    style.textContent = ".container {width: 90%;}";
    style.textContent += " .repository-content {width:95% !important;}";
    style.textContent += " .discussion-timeline {width: 90%;}"
    style.textContent += " .meta span.css-truncate-target, .file.has-inline-notes .diffstat+.css-truncate-target {max-width: 100% !important;}";
}

updateCSS();