<template>

  <div class="container full-page">

    <div class="pt-6 pl-3">
      <h1 class="line titles">Spacecrafts</h1>
    </div>
    
    <div class="columns">

      <div class="column is-half p-3">
        <div class="columns is-multiline">
            <a 
              class="column is-4 m-5 btn-white"
              :class="{ active: spacecraft.name === currentSpacecraft }"
              v-for="spacecraft in spacecrafts" 
              :key="spacecraft._id"
              @click.prevent="currentSpacecraft = spacecraft.name"
            >
              {{spacecraft.name}}
            </a>
        </div>
      </div>

      <div class="column is-half p-3">
        <div 
          class="card has-background-blue"
          v-for="(item, index) in spacecraftSelected"
          :item="item"
          :key="index"
        >
          <div class="card-content">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-480x480">
                    <img :src="item.image" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 has-text-white"> {{item.name}} </p>
                  <p class="subtitle is-6 has-text-white"> {{item.max_load}} kg </p>
                  <p class="subtitle is-6 has-text-white"> {{item.passengers}} passengers </p>
                </div>
              </div>
              <div class="content">
                 {{item.description}}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </div>

</template>

<script>
export default {
  name: "SpacecraftsPage",
  data() {
    return {
      spacecrafts: [],
      currentSpacecraft: "Moon"
    }
  },
  created() {
    this.$http.get("/spacecrafts").then((spacecrafts) => {
      this.spacecrafts =  spacecrafts.data.reverse()
      this.currentSpacecraft = this.spacecrafts[0].name
    })
  },
  computed: {
    spacecraftSelected() {
      return this.spacecrafts.filter(
        (item) => item.name === this.currentSpacecraft
      );

    }
  }
}
</script>