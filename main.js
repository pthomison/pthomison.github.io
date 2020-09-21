var pane = {
	links: {
		"home": {
			"title": "Home",
			"href": "home",
			"active": false
		},
		"about-me": {
			"title": "About Me",
			"href": "about-me",
			"active": false
		},
		"about-this-site": {
			"title": "About This Site",
			"href": "about-this-site",
			"active": false
		},
		"posts": {
			"title": "Posts",
			"href": "posts",
			"active": false
		}
	},
	content: ""
}

var app = new Vue({
  el: '#content',
  data: pane
})

var sb = new Vue({
  el: '#sidebar',
  data: pane,
  methods: {
  	route: function(hash) {
  		routie(hash)
  	}
  }
})


function loadPostFactory(url) {
	return function() {
		axios.get("/posts/" + url + ".md")
		  .then(function (response) {
		  	Object.values(pane.links).forEach(l => l.active = false)
		  	pane.links[url].active = true
		    pane.content = marked(response.data, { sanitize: true });
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

Object.values(pane.links).forEach(l => routie({[l.href]: loadPostFactory(l.href)}))

routie({'': loadPostFactory('home')})
