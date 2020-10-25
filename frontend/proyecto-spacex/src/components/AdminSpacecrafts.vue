<template>
    <div class="columns">
        
        <!-- Form -->
        <div class="column is-half">
              <h1 class="title is-size-5 has-text-link">Add a New Spacecraft</h1>

              <div class="columns">
                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Name">
                    <span class="icon is-small is-left">
                      <i class="fas fa-rocket"></i>
                    </span>
                  </div>
                  </div>
                </div>

                 <div class="column is-half">
                <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Image">
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
                    <input class="input" type="number" placeholder="Maximum Load (kg)">
                    <span class="icon is-small is-left">
                      <i class="fas fa-weight-hanging"></i>
                    </span>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="Height (m)">
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
                    <input class="input" type="number" placeholder="Diameter (m)">
                    <span class="icon is-small is-left">
                      <i class="far fa-circle"></i>
                    </span>
                  </div>
                  </div>
                </div>

                 <div class="column is-half">
                <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="Passengers">
                    <span class="icon is-small is-left">
                      <i class="fas fa-users"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-halft">
                  <div class="field ">
                  <div class="control">
                    <textarea class="textarea" placeholder="Description"></textarea>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field">
                  <div class="select is-fullwidth">
                    <select>
                      <option>State</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  </div>

                  <div class="field mt-5">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Mood</option>
                      <option>Free</option>
                      <option>In Orbit</option>
                    </select>
                  </div>
                  </div>
                </div>
              </div>

              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-link">
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
                <div class="card m-4">
                <div class="card-content">
                      <p class="title is-4">Falcon 9</p>
                        
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">Edit</a>
                  <a href="#" class="card-footer-item">Delete</a>
                </footer>
                </div>

              <!-- Card 2 -->
                <div class="card m-4">
                <div class="card-content">
                      <p class="title is-4">Falcon Heavy</p>
                      
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
    name: 'AdminSpacecrafts'
}
</script>