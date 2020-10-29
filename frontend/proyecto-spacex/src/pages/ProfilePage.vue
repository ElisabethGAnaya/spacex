<template>

<div class="container full-page">
  <div class="columns">

    <div class="column is-halft p-6">
      <h1 class="title has-text-link">
        Profile
      </h1>

      <button class="button" @click="showModal">Show</button>

      <div class="modal" :class="{'is-active': showModalFlag}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" aria-label="close" @click="cancelModal"></button>
          </header>
          <section class="modal-card-body">
            <!-- Content ... -->
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="okModal">Save changes</button>
            <button class="button" @click="cancelModal">Cancel</button>
          </footer>
        </div>
      </div>

      <div class="columns is-multiline">
          <div class="column is-half">
            <div class="field ">
              <div class="form control has-icons-left">
                <input
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

      <div class="field is-grouped">
        <p  class="control">
          <button class="button is-link">
            Save
          </button>
        </p>
        <p class="control">
          <button  class="button is-light">
            Cancel
          </button>
        </p>
      </div>
    </div>

     <div class="column is-halft p-6">
      <h1 class="title has-text-link">
        Missions
      </h1>
      <div class="card m-4">
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
    }
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
    async editUser(id){
      this.editMode = true
      const index = this.spacecrafts.findIndex((user)=> user._id === id)
      let user = this.user[index]
      this.user = user
      this.user_id = id
    }
  }
}
</script>