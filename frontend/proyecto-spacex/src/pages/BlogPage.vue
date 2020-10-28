<template>

<div class="container article-body">
 
  <div class="columns is-multiline p-6">

    <div v-for="article in articles" :key="article._id" class="column is-3">
      <div class="card card-blog">
        <div class="card-image">
          <figure class="image is-4by3">
            <router-link :to="{ name:'BlogArticle', params: {id: article._id }}">
            <img :src="article.image" alt="Placeholder image">
            </router-link>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4"><router-link :to="{ name:'BlogArticle', params: {id: article._id }}">{{article.title}}</router-link></p>
            </div>
          </div>

          <div class="content">
            <p>{{article.excerpt}}</p>

            <time class="mt-4" datetime="2016-1-1">{{article.published}}</time>
          </div>
        </div>
      </div>
    </div>

    
    
  </div>

</div>

</template>

<script>
export default {
  name: "BlogPage",
  data(){
    return {
      articles:[]
    }
  },
  created(){
    this.$http.get("/articles").then((articles) => {
      this.articles =  articles.data.reverse()
  })
  }
}
</script>