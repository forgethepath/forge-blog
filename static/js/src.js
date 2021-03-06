"use strict";

const forge_back = document.querySelector('.forge-article-navigation-back');
if ((forge_back) 
  && (document.referrer.includes(window.location.host))
  && (document.referrer !="") 
  && ((document.referrer.includes('page')) 
     || (document.referrer.includes('summary')) 
     || (document.referrer.includes('tags'))
    )) {
    forge_back.href = document.referrer;
    if (document.referrer.includes('page')) {
      forge_back.innerText = "BACK TO ARTICLES";
    } else if (document.referrer.includes('summary')) {
      forge_back.innerText = "BACK TO SUMMARY";
    } else if (document.referrer.includes('tags')) {
      forge_back.innerText = "BACK TO TAGS";
    }   
};

const newsletter = document.getElementById("forge-news");
newsletter.addEventListener("submit", (event) => {  
  let form = event.target;
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.send(formData);
  event.preventDefault();
  event.stopPropagation();
}, false);

const tags_button = document.getElementById("forge-tags-button");
const tags_dropdown = document.querySelector(".forge-tags-dropdown");
tags_button.addEventListener("click", (event) => {
  tags_dropdown.classList.toggle("forge-utility-visible");
  event.preventDefault();
  event.stopPropagation();
}, false);

document.addEventListener("click", (event) => {
  tags_dropdown.classList.remove("forge-utility-visible");
});