if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  })
};

const newsletter = document.getElementById("forge-news")
newsletter.addEventListener("submit", (event) => {  
  let form = event.target;
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.send(formData);
  event.preventDefault();
  console.log('hit');
}, false); 

const search = instantsearch({
  appId: '8NN8HMRB8K',
  apiKey: 'c307b2769e49beebfebf51ed261b0d8b',
  indexName: 'forge_search'
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for Posts'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits-container',
    templates: {
      item: 'Hit {{objectID}}: {{title}}'
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination-container'
  })
);

search.start();