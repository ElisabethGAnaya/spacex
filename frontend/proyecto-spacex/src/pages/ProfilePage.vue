<template>

<div class="container full-page">
  <div class="columns">

    <div class="column is-halft p-6">
      <h1 class="title has-text-link">
        Profile
      </h1>

          <div class="card">
            <div class="card-content">
              <p class="title is-4">
                {{user.firstname}} {{user.lastname}}
              </p>
              <table class="table is-fullwidth">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td> {{user.email}} </td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td> {{user.phone}} </td>
                  </tr>
                  <tr>
                    <th>Weight (kg)</th>
                    <td> {{user.weight}} </td>
                  </tr>
                  <tr>
                    <th>Height (cm)</th>
                    <td> {{user.height}} </td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td> {{user.age}} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item" @click="showModal">Edit Profile</a>
            </footer>
          </div>

      <div class="modal" :class="{'is-active': showModalFlag}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head has-background-darkblue">
            <p class="modal-card-title has-text-white">Edit Profile</p>
          </header>
          <section class="modal-card-body has-background-darkblue">
                  <div class="columns is-multiline">
                    <div class="column is-half">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.firstname"
                            class="input"
                            type="text"
                            placeholder="Firstname"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-half">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.lastname"
                            class="input"
                            type="text"
                            placeholder="Lastname"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-half">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.email"
                            class="input"
                            type="email"
                            placeholder="Email"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-half">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.phone"
                            class="input"
                            type="text"
                            placeholder="Phone"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-mobile-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-halft">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.weight"
                            class="input"
                            type="number"
                            placeholder="Weight (kg)"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-weight"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-half">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.height"
                            class="input"
                            type="number"
                            placeholder="Height (cm)"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-arrows-alt-v"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-6">
                      <div class="field ">
                        <div class="form control has-icons-left">
                          <input
                            v-model="user.age"
                            class="input"
                            type="number"
                            placeholder="Age"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-birthday-cake"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
          </section>
          <footer class="modal-card-foot has-background-darkblue">
            <button class="button is-link" @click="okModal">Save</button>
            <!-- <button class="button" @click.prevent="cancelModal">Cancel</button> -->
          </footer>
        </div>
      </div>
    </div>

    <!-- Missions -->
    <div class="column is-halft p-6">
      <h1 class="title has-text-link">
        Missions
      </h1>
      
      <div class="card">
        <div class="card-content">
          <p class="title is-4">
            Name Mission
            <span class="tag is-success mr-1">4/6</span>
          </p>
          <table class="table is-fullwidth">
            <tbody>
              <tr>
                <th>Destination:</th>
                <td></td>
              </tr>
              <tr>
                <th>Depart:</th>
                <td></td>
              </tr>
              <tr>
                <th>Return:</th>
                <td></td>
              </tr>
              <tr>
                <th>Spacecraft:</th>
                <td></td>
              </tr>
              <tr>
                <th>Description:</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Cancel</a>
        </footer>
      </div>
    </div>

  </div>
</div>

</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      showModalFlag: false,
      okPressed: false,
      user: {},
      editMode: false
    }
  },
  mounted() {
    console.info("llamada")
    this.$http.get(`/users/${this.$store.state.userID}`).then((users) => {
      this.user =  users.data
    })
  },
  methods: {
    showModal() {
      this.okPressed = false;
      this.showModalFlag = true;
    },
    okModal() {
      this.okPressed = true;
      this.showModalFlag = false;
    },
    cancelModal() {
      this.okPressed = false;
      this.showModalFlag = false;
    },
    async updateUser(){
      let updatedUser = this.user
      try{
        await this.$http.put(`/users/${this.$store.state.userID}`, updatedUser)
        alert("User has been updated!")
      }catch(e){
        console.log(e)
      }
    }
  }
}
</script>