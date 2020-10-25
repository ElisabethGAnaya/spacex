<template>
  <div class="container">
    <div class="columns">
        
          <!-- Form -->
          <div class="column is-half">
              <h1 class="title is-size-5 has-text-link">Create a New Account</h1>

              <div class="columns">
                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Firstname">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  </div>
                </div>

                 <div class="column is-half">
                <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Lastname">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  </div>
                </div>

                 <div class="column is-half">
                <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Phone">
                    <span class="icon is-small is-left">
                      <i class="fas fa-mobile-alt"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-halft">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="Weight (kg)">
                    <span class="icon is-small is-left">
                      <i class="fas fa-weight"></i>
                    </span>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="Height (cm)">
                    <span class="icon is-small is-left">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-halft">
                  <div class="field ">
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="Age">
                    <span class="icon is-small is-left">
                      <i class="fas fa-birthday-cake"></i>
                    </span>
                  </div>
                  </div>
                </div>

                <div class="column is-half">
                  <div class="field">
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

              <div class="columns">
                <div class="column is-half">
                  <div class="field">
                  <div class="select is-fullwidth">
                    <select>
                      <option>State Account</option>
                      <option>Active</option>
                      <option>Inactive</option>
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
              <h1 class="title is-size-5 has-text-link">Users</h1>
              
              <!-- Card 1 -->
              <div>
                <div class="card m-4">
                  <div class="card-content">
                      <p class="title is-4">Tom Smith <span class="tag is-danger">Inactive</span> <span class="tag is-dark">Free</span></p>
                      <!-- <p class="subtitle is-6">tom@gmail.com</p> -->
                      <table class="table is-fullwidth">
                        <tbody>
                          <tr>
                            <th>Email</th>
                            <td>tom@gmail.com</td>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <td>777 66 55 44</td>
                          </tr>
                           <tr>
                            <th>Weight (kg)</th>
                            <td>70</td>
                          </tr>
                           <tr>
                            <th>Height (cm)</th>
                            <td>177</td>
                          </tr>
                           <tr>
                            <th>Age</th>
                            <td>28</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                  </footer>
                </div>

              <!-- Card 2 -->
                <div class="card m-4">
                  <div class="card-content">
                      <p class="title is-4">Pili López <span class="tag is-success">Active</span> <span class="tag is-link">In Orbit</span></p>
                       <table class="table is-fullwidth">
                        <tbody>
                          <tr>
                            <th>Email</th>
                            <td>pili@gmail.com</td>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <td>777 66 55 44</td>
                          </tr>
                           <tr>
                            <th>Weight (kg)</th>
                            <td>62</td>
                          </tr>
                           <tr>
                            <th>Height (cm)</th>
                            <td>168</td>
                          </tr>
                           <tr>
                            <th>Age</th>
                            <td>28</td>
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
  </div>
</template>

<script>
export default {
    name: 'AdminUsers'
}
</script>