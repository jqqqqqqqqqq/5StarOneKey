// ==UserScript==
// @name         5 Star One Key
// @version      0.1
// @description  Give five star with single click
// @author       jqqqqqqqqqq
// @match        https://opr.ingress.com/recon
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var target1 = document.getElementById("submitDiv");
    var five_star = document.createElement("button");
    var textnode = document.createTextNode("Five Star");
    five_star.className = "button big-submit-button";
    five_star.appendChild(textnode);
    target1.appendChild(five_star);
    five_star.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(5)").click();
    };
})();