<template>
   <div class="columns">
        
        <!-- Form -->
        <div class="column is-half">
              <h1 class="title is-size-5 has-text-link">Add a New Destination</h1>

              <div class="columns">
                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Name">
                    <span class="icon is-small is-left">
                      <i class="fas fa-globe-europe"></i>
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
                    <input class="input" type="number" placeholder="Distance (km)">
                    <span class="icon is-small is-left">
                      <i class="fas fa-arrows-alt-h"></i>
                    </span>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="Length (hours)">
                    <span class="icon is-small is-left">
                      <i class="fas fa-clock"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
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
              <h1 class="title is-size-5 has-text-link">Destinations</h1>
              
              <!-- Card 1 -->
              <div>
                <div class="card m-4">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">Moon</p>
                        <p class="subtitle is-6"><span class="tag is-success">Active</span></p>
                      </div>
                    </div>
                    <table class="table is-fullwidth">
                        <tbody>
                          <tr>
                            <th>Distance (km)</th>
                            <td>384.400</td>
                          </tr>
                          <tr>
                            <th>Length (hours)</th>
                            <td>132</td>
                          </tr>
                           <tr>
                            <th>Description</th>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quam exercitationem sint nulla dolor tenetur consequatur dolores cupiditate perspiciatis modi!</td>
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
    name: 'AdminDestinations'
}
</script>