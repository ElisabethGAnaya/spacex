<template>
  <div>
    <section class="hero is-link is-medium">
      <div class="hero-body hero-mission">
        <div class="container">

          <div class="card has-background-darkblue p-2">
            <div class="card-content">
              <div class="columns is-multiline">

                <h1 class="title">
                  Your mission start here
                </h1>

                <div class="column is-12">
                  <div class="field">
                    <div class="form control has-icons-left has-icons-right">
                      <input class="input has-text-white" type="email" placeholder="Mission name">
                      <span class="icon is-small is-left">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <label class="label has-text-white">Depart</label>
                    <div class="form control">
                      <input class="input has-text-white" type="date">
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <label class="label has-text-white">Return</label>
                    <div class="form control">
                      <input class="input has-text-white" type="date">
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <div class="select sel is-fullwidth is-rounded">
                      <select name="spacecraft" required>
                        <option value="" disabled selected>Spacecraft</option>
                        <option>Falcon 9</option>
                        <option>Falcon Heavy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <div class="select sel is-fullwidth is-rounded">
                      <select name="spacecraft" required>
                        <option value="" disabled selected>Destination</option>
                        <option>Moon</option>
                        <option>Mars</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="column is-12">
                  <div class="field ">
                  <div class="control txt">
                    <textarea
                      class="textarea " 
                      placeholder="Description"
                    ></textarea>
                  </div>
                  </div>
                </div>

              </div>

              <button class="btn button mt-3">Reserve Mission</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container p-6">
      <h1 class="title has-text-link">
        All missions
      </h1>

      <div class="columns is-multiline">
        <div class="column is-4">
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
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MissionsPage",
  data() {
    return {
      
    }
  }
}
</script>