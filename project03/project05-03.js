"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Dinesh Kumar Gummadavelli
      Date:   09/26/2025

      Filename: project05-03.js
*/

var sourceDoc = document.getElementById("source_doc");
var toc = document.getElementById("toc");
var headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstChild; n !== null; n = n.nextSibling) {
    if (n.nodeName === heading) {
        var anchor = document.createElement("a");
        anchor.name = "doclink" + headingCount;
        n.insertBefore(anchor, n.firstChild);
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        listItem.appendChild(link);
        link.textContent = n.textContent;
        link.href = "#doclink" + headingCount;
        toc.appendChild(listItem);
        headingCount++;
    }
}

