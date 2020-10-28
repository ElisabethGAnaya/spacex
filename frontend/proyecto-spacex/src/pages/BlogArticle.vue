<template>
  <div class="container sigle-article padre p-6">

      <div class="card hijo">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="article.image" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{article.title}}</p>
            </div>
          </div>

          <div class="content">
            <p>{{article.body}}</p>

            <p class="mt-4">{{article.published}}</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "BlogArticle",
  data(){
    return {
      article:{}
    }
  },
  created(){
    this.getArticle
  },
  computed: {
   async getArticle(){
    const id = this.$route.params.id
    try{
      let article = await this.$http.get("/articles/"+id)
      this.article = article.data
    }catch(e){
      console.log(e)
      alert("sorry, wasn't possible to get article")
    }
   }
  }
}
</script>