"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Dinesh Kumar Gummadavelli
      Date:   09/26/2025

      Filename: project05-02.js
*/

var images = document.getElementsByTagName("img");
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        if (this.parentElement.id === "photo_bucket") {
            var newItem = document.createElement("li");
            photoList.appendChild(newItem);
            newItem.appendChild(this);
        } else {
            var oldItem = this.parentElement;
            photoBucket.appendChild(this);
            oldItem.parentElement.removeChild(oldItem);
        }
    };
}

