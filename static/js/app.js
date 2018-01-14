if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.getElementById("forge-news").onsubmit = function(e) {

	e.preventDefault();
	
	var f = e.target, formData = new FormData(f), xhr = new XMLHttpRequest();
	
	xhr.open("POST", f.action);
	xhr.send(formData);
}

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