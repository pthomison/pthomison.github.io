import Vue from 'vue';

import marked from 'marked';
import DOMPurify from 'dompurify';

const markdownContent = `
<div v-html="mdHtml"></div>
`

Vue.component('markdown-content', {
	props: ['rawMarkdown'],
	template: markdownContent,
	computed: {
		mdHtml: function () {
			let clean = DOMPurify.sanitize(this.rawMarkdown);
			return marked(clean);
		}
	}
});