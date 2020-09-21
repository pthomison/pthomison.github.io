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
	latest: "NA"
}

var app = new Vue({
  el: '#app',
  data: pane
})

var sb = new Vue({
  el: '#sidebar',
  data: pane
})

console.log("testing")

// SULX.get("/posts/postOne.md", function(status, data) {
// 	console.log("yo")
// 	console.log(status)
// 	console.log(data)
// }, {})


axios.get("/posts/postOne.md")
  .then(function (response) {
    // handle success
    console.log(response);
    pane.latest = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("always");
  });