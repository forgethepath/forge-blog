if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  })
};

// const browser_html = document.querySelector("html");
// const nav_offset = document.querySelector(".forge-navigation ul");
// const has_scroll = (window.innerWidth > document.documentElement.clientWidth);
// const scroll_offset = (window.innerWidth - document.documentElement.clientWidth);

// // const viewport_width = window.innerWidth;
// // const DOM_width = browser_html.getBoundingClientRect().width;
// // const scroll_offset = (viewport_width - DOM_width);

// const mq = window.matchMedia('(max-width: 700px)');
// const lg_screen = console.log("greater then 700px");
// const sm_screen = console.log("less then 700px");

// mq.addListener((changed) => {
//   changed.matches? lg_screen : sm_screen
// });

// if (!has_scroll) {
//   console.log("browser has scroll bar")
//   // browser_html.style.marginLeft = "calc(100vw - 100%)"

// }

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