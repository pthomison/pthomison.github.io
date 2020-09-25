

var pane = {
	pages: {
		"about-me": {
			"active": false,
			"content": ""
		},
		"about-this-site": {
			"active": false,
			"content": ""
		},
		"posts": {
			"active": true
		}
	},
	posts:[],
	page: 1,
	totalPages: 0,
}

routie('about-me', function() {
	axios.get("/posts/about-me.md")
	  .then(function (response) {
	  	pane.pages["about-me"].content = marked(response.data, { sanitize: true });
	  	changeActivePage("about-me");
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
});

routie('about-this-site', function() {
	axios.get("/posts/about-this-site.md")
	  .then(function (response) {
	  	pane.pages["about-this-site"].content = marked(response.data, { sanitize: true });
	  	changeActivePage("about-this-site");	
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
});

routie('posts/:pageNumber', function(pageNumber) {
    pane.page = pageNumber;
    changeActivePage("posts");
});

function changeActivePage(page) {
	Object.values(pane.pages).forEach(l => l.active = false)
	pane.pages[page].active = true
}

const postListing = `
<table class="table">
  <tbody>
    <tr>
      <th scope="row">{{ date }}</th>
      <td>{{ title }}</td>
    </tr>
    <tr>
      <div v-html="content"></div>
    </tr>
  </tbody>
</table>
`

Vue.component('post', {
	props: ['title', 'date', 'content', 'page'],
	template: postListing
})

var app = new Vue({
  el: '#app',
  data: pane,
  methods: {
  	route: function(hash) {
  		routie(hash);
  	},
  	pageDown: function() {
  		if (pane.page > 1) {
  			routie("posts/" + (parseInt(pane.page)-1));
  		}
  	},
  	pageUp: function() {
  		if (pane.page < pane.totalPages) {
  			routie("posts/" + (parseInt(pane.page)+1));
  		}
  	}
  },
  created: function () {
		axios.get("/posts/post-manifest.json")
		  .then(function (response) {

		  	p = response.data

		  	p.forEach((post) => {
		  		post.content = "";
		  	})

		  	// I'm aware this is ugly code, TODO: fix
		  	y = 1;
			for (i = 0; i < p.length; i+=3) {
				p[i].page = y;
				y++;
			}

		  	y = 1;
			for (i = 1; i < p.length; i+=3) {
				p[i].page = y;
				y++;
			} 

		  	y = 1;
			for (i = 2; i < p.length; i+=3) {
				p[i].page = y;
				y++;
			} 

			pane.totalPages = (p.length-(p.length%3))/3 + 1


		  	loadPostContent(p);

		  	pane.posts = p
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
})


function loadPostContent(posts) {
	posts.forEach((post) => {
		axios.get(post.link)
		  .then(function (response) {
		  	post.content = marked(response.data, { sanitize: true });
		  	console.log(posts)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	})
}