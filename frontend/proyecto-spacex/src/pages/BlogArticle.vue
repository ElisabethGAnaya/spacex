<template>
 <div class="container">
    <h1>{{article.title}}</h1>
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