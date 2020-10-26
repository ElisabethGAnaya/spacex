<template>
  <div>
    <div class="column is-half">
      <h1 class="title is-size-5 has-text-link">Add a New Article</h1>

      <div class="columns">
        <div class="column is-half">
          <div class="field ">
            <div class="control has-icons-left">
              <input
                v-model="article.title"
                class="input"
                type="text"
                placeholder="title"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-globe-europe"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="column is-half">
          <div class="field ">
            <div class="control has-icons-left">
              <input
                v-model="article.image"
                class="input"
                type="text"
                placeholder="Image"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-image"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-halft">
          <div class="field ">
            <div class="control">
              <textarea
                v-model="article.body"
                class="textarea"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      


      <div class="field is-grouped">
        <p class="control">
          <button class="button is-link" @click.prevent="createArticle">
            Submit
          </button>
        </p>
        <!-- <p class="control">
                  <button class="button is-light">
                    Cancel
                  </button>
                </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminBlog",
  data() {
    return {
      article: {
        title: "",
        image: "",
        body: "",
      },
    };
  },
  methods: {
    async createArticle() {
      try {
        await this.$http.post("/articles", this.article);
        alert("New article has been created!");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
