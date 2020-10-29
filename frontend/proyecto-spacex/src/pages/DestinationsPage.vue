<template>

  <div class="container full-page">

    <div class="pt-6 pl-3">
      <h1 class="line titles">Destinations</h1>
    </div>
    
    <div class="columns">

      <div class="column is-half p-3">
        <div class="columns is-multiline">
            <a 
              class="column is-4 m-5 btn-white"
              :class="{ active: destination.name === currentDestination }"
              v-for="destination in destinations" 
              :key="destination._id"
              @click.prevent="currentDestination = destination.name"
            >
              {{destination.name}}
            </a>
        </div>
      </div>

      <div class="column is-half p-3">
        <div 
          class="card has-background-blue"
          v-for="(item, index) in destinationSelected"
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
                  <p class="subtitle is-6 has-text-white"> {{item.distance}} km </p>
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
  name: "DestinationsPage",
  data() {
    return {
      destinations: [],
      currentDestination: "Moon"
    }
  },
  created() {
    this.$http.get("/destinations").then((destinations) => {
      this.destinations =  destinations.data.reverse()
      this.currentDestination = this.destinations[0].name
    })
  },
  computed: {
    destinationSelected() {
      return this.destinations.filter(
        (item) => item.name === this.currentDestination
      );

    }
  }
}
</script>