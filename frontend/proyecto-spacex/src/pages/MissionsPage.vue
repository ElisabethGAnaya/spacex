<template>
  <div>
    <section class="hero is-link is-medium">
      <div class="hero-body hero-mission">
        <div class="container">
          <div class="card card-size has-background-darkblue p-2">
            <div class="card-content">
              <div class="columns is-multiline">
                <h1 class="title titles1 line">
                  Your mission start here
                </h1>

                <div class="column is-12">
                  <div class="field">
                    <div class="form control has-icons-left has-icons-right">
                      <input
                        v-model="mission.name"
                        class="input has-text-white"
                        type="text"
                        placeholder="Mission name"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- <div class="column is-12">
                  <b-field>
                    <b-datepicker
                        placeholder="Select a date..."
                        v-model="dates"
                        range>
                    </b-datepicker>
                  </b-field>
                </div> -->

                <div class="column is-6">
                  <div class="field">
                    <label class="label has-text-white">Depart</label>
                    <div class="form control">
                      <input
                        v-model="mission.depart"
                        class="input has-text-white"
                        type="date"
                      />
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <label class="label has-text-white">Return</label>
                    <div class="form control">
                      <input
                        v-model="mission.return"
                        class="input has-text-white"
                        type="date"
                      />
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <div class="select sel is-fullwidth is-rounded">
                      <select
                        v-model="mission.destination"
                        name="destination"
                        required
                      >
                        <option value="" disabled selected>Destination</option>
                        <option 
                          v-for="destination in destinations" 
                          :key="destination._id"
                          :value="destination._id"
                        >
                          {{destination.name}}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <div class="select sel is-fullwidth is-rounded">
                      <select
                        v-model="mission.spacecraft"
                        name="spacecraft"
                        required
                      >
                        <option value="" disabled selected>Spacecraft</option>
                        <option 
                          v-for="spacecraft in spacecrafts" 
                          :key="spacecraft._id"
                          :value="spacecraft._id"
                        >
                          {{spacecraft.name}}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="column is-12">
                  <div class="field ">
                    <div class="control txt">
                      <textarea
                        v-model="mission.description"
                        class="textarea "
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <button class="btn button mt-3" @click="createMission">
                <i class="fas fa-rocket mr-2"></i> START
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container p-6">
      <div class="columns is-multiline">
        <div class="column is-6 is-hidden-mobile">
          <h1 class="title has-text-blue">
            Missions
          </h1>
        </div>

        <div class="column is-6 has-text-right">
          <div class="sel select mb-3">
            <select v-model="currentMissions">
              <option
                v-for="(item,index) in categories"
                :value="item"
                :key="index"
              >
                {{ item }}
              </option>
            </select>
          </div>
        </div>
      
        <div
          class="column is-4 " 
          v-for="mission in missionsSelected"
          :key="mission._id"
        >
          <div class="card has-background-blue">
            <div class="card-content">
              <p class="title is-4 has-text-white">
                {{mission.name}}
                <span class="tag is-success">{{mission.passengers.length}}/{{mission.spacecraft.passengers}}</span>
              </p>
              <table class="table is-fullwidth has-background-blue">
                <tbody>
                   <tr>
                    <th>Created By:</th>
                    <td> {{mission.creator.firstname}} {{mission.creator.lastname}} </td>
                  </tr>
                  <tr>
                    <th>Destination:</th>
                    <td> {{mission.destination.name}} </td>
                  </tr>
                  <tr>
                    <th>Depart:</th>
                    <td> {{ mission.depart | toDateOnly }} </td>
                  </tr>
                  <tr>
                    <th>Return:</th>
                    <td> {{ mission.return | toDateOnly }} </td>
                  </tr>
                  <tr>
                    <th>Spacecraft:</th>
                    <td> {{mission.spacecraft.name}} </td>
                  </tr>
                  <tr>
                    <th>Description:</th>
                    <td> {{mission.description}} </td>
                  </tr>
                </tbody>
              </table>
              <footer class="card-footer card-footer-mission">
                <button v-if="!isRegestered" class="card-footer-item button is-blue has-text-white mr-3" @click.prevent="register(mission._id)">REGISTER</button>
                <button class="card-footer-item button mr-3">ABANDON</button>
                <button class="card-footer-item button is-success mr-3" @click.prevent="editMission(mission._id)">EDIT</button>
                <button class="card-footer-item button is-danger" @click.prevent="deleteMission(mission._id)">DELETE</button>
              </footer>
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
      mission: {
        name: "",
        description: "",
        destination: "",
        depart: "",
        return: "",
      },
      missions: [],
      isRegestered: false,
      destinations: [],
      spacecrafts: [],
      myMissions: [],
      currentMissions: "All Missions",
      categories: ["All Missions", "My Missions", "Missions Created By Me"]
    };
  },
    created() {
    this.$http.get("/missions").then((allMissions) => {
      this.missions = allMissions.data.reverse();
    });

    this.$http.get("/destinations").then((destinations) => {
      this.destinations =  destinations.data.reverse()
    })

    this.$http.get("/spacecrafts").then((spacecrafts) => {
      this.spacecrafts =  spacecrafts.data.reverse()
    })
  },
  methods: {
    createMission() {
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        };
        let missionData = { ...this.mission };
        missionData.return = new Date(missionData.return).getTime();
        missionData.depart = new Date(missionData.depart).getTime();
        this.$http.post("/missions", missionData, config);
        // window.location.reload()
        this.$buefy.toast.open({
                    message: 'New mission has been created!',
                    type: 'is-success'
                })
        this.mission = "";
        
      } catch (e) {
        console.log(e);
        this.$buefy.toast.open({
                    message: 'Something, went wrong. Try again later :)',
                    type: 'is-danger'
                })
      }
    },
    async deleteMission(missionId){
       const userId = this.$store.state.id
       const mission = await this.$http.get("missions/"+missionId)
       const creatorId = mission.data.creator._id
       if(userId !== creatorId){
         this.$buefy.toast.open({
           message: "You have to be creator of this mission to be able to delete it.",
           type: 'is-danger'
         })
         return
       }

      try{
        await this.$buefy.dialog.confirm({
           title: 'Deleting Mission',
                    message: 'Are you sure you want to <b>delete</b> this Mission? This action cannot be undone.',
                    confirmText: 'Delete Mission',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.deleteItem(missionId)  
        })  
      }catch(e){
        this.$buefy.toast.open({
          message: 'Something went wrong. Try again later',
          type: 'is-danger'
        })
        console.log(e)
      }
    },
    editMission(missionId){
      let missionIndex = this.missions.findIndex(mission => mission._id === missionId)
      this.mission = this.missions[missionIndex]
    },
    async deleteItem(missionId){
       await this.$http.delete("/missions/"+missionId)
       this.$buefy.toast.open("Mission has been deleted")
       let missionIndex = this.missions.findIndex(item => item._id === missionId)
       this.missions.splice(missionIndex,1)
    },

    async register(missionId){
      const mission = await this.$http.get("/missions/"+missionId)
      const userId = this.$store.state.id
      const config = {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      
      if(!mission){
        alert("Looks like mission has been deleted")
        return
      }
      if(mission.data.creator._id === userId){
         this.$buefy.toast.open({
                    message: 'You are already registered to this mission',
                    type: 'is-danger'
                })
         return
      }

      
      let foundUser = mission.data.passengers.filter( e => e._id === userId)
      console.log(foundUser)
      if(foundUser.length > 0){
         this.$buefy.toast.open({
                    message: 'You are already in Passenger list',
                    type: 'is-danger'
                })
        return
      }

      if(mission.data.passengers.length >= mission.data.spacecraft.passengers){
         this.$buefy.toast.open({
                    message: 'This mission is fully booked',
                    type: 'is-danger'
                })
        return
      }

      try{
        await this.$http.put("/missions/"+missionId,{},config)
        // window.location.reload()
         this.$buefy.toast.open({
                    message: 'You have been regestered!',
                    type: 'is-success'
                })
          this.isRegestered = true
      }catch(e){
        console.log(e)
         this.$buefy.toast.open({
                    message: 'Something, went wrong. Try again later :)',
                    type: 'is-danger'
                })
      }
    }
  },
  computed: {
    missionsSelected() {
      if(this.currentMissions==="All Missions") return this.missions

      if(this.currentMissions==="My Missions") {
        this.myMissions = []

        for (let item of this.missions) {
          for (let i of item.passengers) {
            if(i._id === this.$store.state.id) {
              this.myMissions.push(item)
            }
          }
        }
        return this.myMissions
      }

      if(this.currentMissions==="Missions Created By Me") {

        return this.missions.filter(
        (item) => item.creator._id === this.$store.state.id
        )
        
      }
    }
  }
}
</script>
