<script>

export default {
    props: ['post'],

    data() {
        return {
            PostMarkdown: ""
        };
    },

    mounted() {
        var component = this

        import('../../posts/' + component.post)
            .then(function (m) {
                component.PostMarkdown = m.default
            })

    }
};

</script>

<style lang="scss">
</style>

<template>


	<div v-html="PostMarkdown"></div>

</template>