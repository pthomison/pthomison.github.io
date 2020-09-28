import Vue from 'vue';

import routie from './routie.js';


const blog = `
<div id="blog" class="col-9">
	<post
	  v-for="post in content.posts"
	  v-bind:key="post.title"
	  v-bind:title="post.title"
	  v-bind:date="post.date"
	  v-bind:content="post.content"
	  v-if="post.page == content.currentPage"
	></post>

	<nav class="pager">
		<ul class="pagination justify-content-center">
			<li class="page-item" v-on:click="pageDown"><a class="page-link">Previous</a></li>
			<li class="page-item" v-for="n in content.totalPages" v-bind:class="{ active: content.currentPage == n }" v-on:click="route('posts/' + n)"><a class="page-link">{{n}}</a></li>
			<li class="page-item" v-on:click="pageUp"><a class="page-link">Next</a></li>
		</ul>
	</nav>

</div>	
`

Vue.component('blog', {
	props: ['content'],
	template: blog,
	data: function() {
		console.log(this.content);
		let tp = (this.content.posts.length-(this.content.posts.length%3))/3 + 1;
		return {
			totalPages: tp,
		}
	},
	methods: {
		route: function(hash) {
			routie(hash);
		},
		pageDown: function() {
			if (this.content.currentPage > 1) {
				routie("posts/" + (parseInt(this.content.currentPage)-1));
			}
		},
		pageUp: function() {
			if (this.content.currentPage < this.content.totalPages) {
				routie("posts/" + (parseInt(this.content.currentPage)+1));
			}
		}
	}
});