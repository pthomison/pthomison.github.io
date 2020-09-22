var pane = {
	links: {
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
			"active": true
		}
	},
	posts:[],
	content: ""
}

const postListing = `<table class="table">
  <tbody>
    <tr v-for="post in posts">
      <th scope="row">{{ post.date }}</th>
      <td>{{ post.title }}</td>
    </tr>
  </tbody>
</table>
`

Vue.component('postings', {
	props: ['posts'],
	template: postListing,
	created: function () {
		console.log("sup adsfklj;")
		console.log(this)		
	}
})

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
  },
  created: function () {
		axios.get("/posts/post-manifest.json")
		  .then(function (response) {
		  	console.log(response)
		  	pane.posts = response.data
		  	console.log(pane)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
})


function loadMarkdownFactory(url) {
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


function loadPosts() {
	pane.content = postListing;
}
// Object.values(pane.links).forEach(l => routie({[l.href]: loadPostFactory(l.href)}))

routie({'about-me': loadMarkdownFactory('about-me')})
routie({'about-this-site': loadMarkdownFactory('about-this-site')})
routie({'posts': loadPosts})

