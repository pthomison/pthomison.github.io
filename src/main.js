import routie from './routie.js';
import Vue from 'vue';
import { pane } from './data.js';
// import axios from 'axios';



// function changeActivePage(page) {
// 	Object.values(pane.pages).forEach(l => l.active = false);
// 	pane.pages[page].active = true;
// }

var app = new Vue({
  el: '#app',
  data: pane,
  methods: {
  	// route: function(hash) {
  	// 	routie(hash);
  	// },
  	// pageDown: function() {
  	// 	if (this.page > 1) {
  	// 		routie("posts/" + (parseInt(pane.page)-1));
  	// 	}
  	// },
  	// pageUp: function() {
  	// 	if (this.page < this.totalPages) {
  	// 		routie("posts/" + (parseInt(pane.page)+1));
  	// 	}
  	// }
  },
 //  created: function () {
 //  	createRoutes()
		
	// 	let p = pane.postManifest;

	// 	p.forEach((post) => {
	// 		post.content = "";
	// 	})


	// 	// I'm aware this is ugly code, TODO: fix
	// 	let y = 1;
	// 	for (let i = 0; i < p.length; i+=3) {
	// 		p[i].page = y;
	// 		y++;
	// 	}

	// 		y = 1;
	// 	for (let i = 1; i < p.length; i+=3) {
	// 		p[i].page = y;
	// 		y++;
	// 	} 

	// 		y = 1;
	// 	for (let i = 2; i < p.length; i+=3) {
	// 		p[i].page = y;
	// 		y++;
	// 	} 

	// 	pane.pages['blog'].totalPages = (p.length-(p.length%3))/3 + 1;

	// 	p.forEach((post) => {
	// 		axios.get("/posts/" + post.file)
	// 		.then(function (response) {
	// 			post.content = response.data;
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});
	// 	});

	// 	pane.pages["blog"].posts = p;
	// }
});

// function updatePage(pageName, pageContentLocation) {
// 	// axios.get(pageContentLocation)
// 	//   .then(function (response) {
// 	//   	pane.pages[pageName].content = response.data;
// 	//   })
// 	//   .catch(function (error) {
// 	//     console.log(error);
// 	//   });
// }

// function createRoutes() {
// 	routie('about-me', function() {
// 		if (pane.pages["about-me"].content == "") {
// 			updatePage("about-me", "/posts/about-me.md")
// 		}
// 		changeActivePage("about-me");	
// 	});

// 	routie('about-this-site', function() {
// 		if (pane.pages["about-this-site"].content == "") {
// 			updatePage("about-this-site", "/posts/about-this-site.md")
// 		}
// 		changeActivePage("about-this-site");	
// 	});

// 	// routie('posts/:pageNumber', function(pageNumber) {
// 	//     pane.pages["blog"].currentPage = pageNumber;
// 	//     changeActivePage("blog");
// 	// });

// 	// routie('post/:pageName', function(pageName) {
// 	//     // pane.pages.post.content = pageName;
// 	//     changeActivePage("post");
// 	// });

// 	routie('', function() {
// 	    routie("/")
// 	});
// }