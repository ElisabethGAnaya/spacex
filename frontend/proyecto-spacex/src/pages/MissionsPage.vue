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
                        v-model="mission.spacecraft"
                        name="spacecraft"
                        required
                      >
                        <option value="" disabled selected>Spacecraft</option>
                        <option value="5f97288745deef070589e347"
                          >Falcon 9</option
                        >
                        <option value="5f97299245deef070589e348"
                          >Falcon Heavy</option
                        >
                      </select>
                    </div>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="field">
                    <div class="select sel is-fullwidth is-rounded">
                      <select
                        v-model="mission.destination"
                        name="spacecraft"
                        required
                      >
                        <option value="" disabled selected>Destination</option>
                        <option value="5f9872214f211e00cdb4bb0f">Mars</option>
                        <option value="5f9872d04f211e00cdb4bb10"
                          >Jupiter</option
                        >
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
                Start!
              </button>
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
        <div 
          class="column is-4 " 
          v-for="mission in missions"
          :key="mission._id"
        >
          <div class="card has-background-blue">
            <div class="card-content">
              <p class="title is-4 has-text-white">
                {{mission.name}}
                <span class="tag is-success mr-1">{{mission.passengers.length}}/{{mission.spacecraft.passengers}}</span>
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
              <button  class="btn button mt-3" @click.prevent="register(mission._id)">REGISTER</button>
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
      isRegestered: false
    };
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

        alert("new mission has been created!");
        this.mission = "";
      } catch (e) {
        console.log(e);
        alert("something, went wrong. Try again later");
      }
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
        alert("You are already registered to this mission")
        return
      }

      
      let foundUser = mission.data.passengers.filter( e => e._id === userId)
      console.log(foundUser)
      if(foundUser.length > 0){
        alert("You are already in passenger list")
        return
      }

      if(mission.data.passengers.length >= mission.data.spacecraft.passengers){
        alert("This mission is fully booked")
        return
      }

      try{
        await this.$http.put("/missions/"+missionId,{},config)
        alert("You have been registered!")
      }catch(e){
        console.log(e)
        alert("Please try again later, or contact administration")
      }
    }
  },
  created() {
    this.$http.get("/missions").then((allMissions) => {
      this.missions = allMissions.data.reverse();
    });
  },
};
</script>
