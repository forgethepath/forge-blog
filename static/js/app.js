"use strict";

var forge_back = document.querySelector('.forge-article-navigation-back');
if (forge_back && document.referrer.includes(window.location.host) && document.referrer != "" && (document.referrer.includes('page') || document.referrer.includes('summary') || document.referrer.includes('tags'))) {
  forge_back.href = document.referrer;
  if (document.referrer.includes('page')) {
    forge_back.innerText = "BACK TO ARTICLES";
  } else if (document.referrer.includes('summary')) {
    forge_back.innerText = "BACK TO SUMMARY";
  } else if (document.referrer.includes('tags')) {
    forge_back.innerText = "BACK TO TAGS";
  }
};

var newsletter = document.getElementById("forge-news");
newsletter.addEventListener("submit", function (event) {
  var form = event.target;
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.send(formData);
  event.preventDefault();
  event.stopPropagation();
}, false);

var tags_button = document.getElementById("forge-tags-button");
var tags_dropdown = document.querySelector(".forge-tags-dropdown");
tags_button.addEventListener("click", function (event) {
  tags_dropdown.classList.toggle("forge-utility-visible");
  event.preventDefault();
  event.stopPropagation();
}, false);

document.addEventListener("click", function (event) {
  tags_dropdown.classList.remove("forge-utility-visible");
});