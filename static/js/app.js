if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  })
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