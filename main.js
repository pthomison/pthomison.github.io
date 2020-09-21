var pane = {
	links: [
		{
			"title": "Home",
			"href": "/home"
		},
		{
			"title": "About Me",
			"href": "/about-me"
		},
		{
			"title": "About This Site",
			"href": "/about-this-site"
		},
		{
			"title": "Posts",
			"href": "/posts"
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
  	routeHome: function() {
  		console.log("hiya")
  		page("/home")
  	}
  }
})


// axios.get("/posts/postMarkdown.md")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     pane.content = marked(response.data, { sanitize: true });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//     console.log("always");
//   });


homeContent = function() {
	axios.get("/posts/postOne.md")
	  .then(function (response) {
	    pane.content = marked(response.data, { sanitize: false });
	    console.log(response)
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
	  .then(function () {
	    console.log("always");
	  });
}

aboutContent = function() {
	axios.get("/posts/postMarkdown.md")
	  .then(function (response) {
	    pane.content = marked(response.data, { sanitize: true });
	    console.log(response)
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
	  .then(function () {
	    console.log("always");
	  });
}


page('/home', homeContent)
page()