var pane = {
	links: [
		{
			"title": "Home",
			"href": "home"
		},
		{
			"title": "About Me",
			"href": "about-me"
		},
		{
			"title": "About This Site",
			"href": "about-this-site"
		},
		{
			"title": "Posts",
			"href": "posts"
		}
	],
	message: "This is a vue application!!!",
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
		    pane.content = marked(response.data, { sanitize: true });
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

pane.links.forEach(l => routie({[l.href]: loadPostFactory(l.href)}))

routie({'': loadPostFactory('home')})


// routie({
// 	'home': homeContent,
// 	'about': aboutContent
// })