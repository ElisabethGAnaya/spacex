<template>
    <div class="columns">
        
        <!-- Form -->
        <div class="column is-half">
              <h1 class="title is-size-5 has-text-link">Add a New Spacecraft</h1>

              <div class="columns">
                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input 
                      v-model="spacecraft.name"
                      class="input" 
                      type="text" 
                      placeholder="Name"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-rocket"></i>
                    </span>
                  </div>
                  </div>
                </div>

                 <div class="column is-half">
                <div class="field ">
                  <div class="control has-icons-left">
                    <input 
                      v-model="spacecraft.image"
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
                  <div class="control has-icons-left">
                    <input 
                      v-model="spacecraft.max_load"
                      class="input" 
                      type="number" 
                      placeholder="Maximum Load (kg)"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-weight-hanging"></i>
                    </span>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input 
                      v-model="spacecraft.height"
                      class="input" 
                      type="number" 
                      placeholder="Height (m)"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input 
                      v-model="spacecraft.diameter"
                      class="input" 
                      type="number" 
                      placeholder="Diameter (m)"
                    />
                    <span class="icon is-small is-left">
                      <i class="far fa-circle"></i>
                    </span>
                  </div>
                  </div>
                </div>

                 <div class="column is-half">
                <div class="field ">
                  <div class="control has-icons-left">
                    <input 
                      v-model="spacecraft.passengers"
                      class="input" 
                      type="number" 
                      placeholder="Passengers"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-users"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-half">
                  <div class="field">
                  <div class="select is-fullwidth">
                    <select
                      v-model="spacecraft.mood"
                    >
                      <option value="" disabled selected>Mood</option>
                      <option value="false">Free</option>
                      <option value="true">In Orbit</option>
                    </select>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field">
                  <div class="select is-fullwidth">
                    <select
                      v-model="spacecraft.state"
                    >
                      <option value="" disabled selected>State</option>
                      <option value="false">Active</option>
                      <option value="true">Inactive</option>
                    </select>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-halft">
                  <div class="field ">
                  <div class="control">
                    <textarea
                      v-model="spacecraft.description" 
                      class="textarea" 
                      placeholder="Description"
                      ></textarea>
                  </div>
                  </div>
                </div>
              </div>

              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-link"  @click.prevent="saveSpacecraft">
                    Save
                  </button>
                </p>
                <p class="control">
                  <button class="button is-light">
                    Cancel
                  </button>
                </p>
              </div>

            </div>

            <div class="column is-half">
              <h1 class="title is-size-5 has-text-link">Spacecrafts</h1>
              
              <!-- Card 1 -->
              <div>
                <div
                  v-for="spacecraft in spacecrafts" 
                  :key="spacecraft._id" 
                  class="card m-4"
                >
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4"> {{spacecraft.name}} </p>
                        <p class="subtitle is-6"><span class="tag is-success">Active</span> <span class="tag is-link">In Orbit</span></p>
                      </div>
                    </div>
                    <table class="table is-fullwidth">
                        <tbody>
                          <tr>
                            <th>Maximum Load (kg)</th>
                            <td> {{spacecraft.max_load}} </td>
                          </tr>
                          <tr>
                            <th>Height (m)</th>
                            <td> {{spacecraft.height}} </td>
                          </tr>
                           <tr>
                            <th>Diameter (m)</th>
                            <td> {{spacecraft.diameter}} </td>
                          </tr>
                           <tr>
                            <th>Passengers</th>
                            <td> {{spacecraft.passengers}} </td>
                          </tr>
                           <tr>
                            <th>Description</th>
                            <td> {{spacecraft.description}} </td>
                          </tr>
                        </tbody>
                    </table> 
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                  </footer>
                </div>

              </div>

        </div>
    </div>
</template>


<script>
export default {
  name: 'AdminSpacecrafts',
  data() {
    return {
      spacecraft: {
        name: "",
        image: "",
        max_load: "",
        height: "",
        diameter: "",
        passengers: "",
        description: "",
        mood: "",
        state: "",
      },
      spacecrafts:[]
    };
  },
  created() {
    this.$http.get("/spacecrafts").then((spacecrafts) => {
      // con reverse invierto el orden del array
      this.spacecrafts =  spacecrafts.data.reverse()
    })
  },
  methods: {
    async saveSpacecraft() {
      try {
        await this.$http.post("/spacecrafts", this.spacecraft);
        this.spacecrafts.unshift(this.spacecraft)
        alert("New spacecraft has been added");
      } catch (e) {
        console.log(e);
        alert("Ups, looks like something went wrong. Please try again later");
      }
    },
    async deleteSpacecraft(id){
      try{
        await this.$http.delete("/spacecrafts/"+id)
        const spacecraftIndex = this.spacecrafts.findIndex(spacecraft => spacecraft._id === id)
        this.spacecrafts.splice(spacecraftIndex,1)
        alert("Spacecraft has been deleted")
      }catch(e){
        console.log(e)
      }
    }

  }
}
</script>