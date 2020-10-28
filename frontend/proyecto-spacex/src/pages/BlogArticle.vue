<template>
  <div class="container article-body">
    <h1 class="title is-1 has-text-info">{{article.title}}</h1>
   <figure class="image is-128x128">
      <img :src="article.image">
    </figure>
    <p>
      {{article.body}}
    </p>
  </div>
</template>

<script>
export default {
  name: "BlogArticle",
  data() {
    return {
      article: {},
    };
  },
  created() {
    this.getArticle;
  },
  computed: {
    async getArticle() {
      const id = this.$route.params.id;
      try {
        let article = await this.$http.get("/articles/" + id);
        this.article = article.data;
      } catch (e) {
        console.log(e);
        alert("sorry, wasn't possible to get article");
      }
    },
  },
};
</script>
