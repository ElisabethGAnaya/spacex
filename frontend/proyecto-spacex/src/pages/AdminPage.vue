<template>

<div class="admin">
  <div class="columns">

        <div class="column m-4 is-2 is-lefht">
          <aside class="menu">
            <p class="menu-label">
              ADMINISTRATION
            </p>
            <ul class="menu-list">
              <li><router-link to="/admin/users">Users</router-link></li>
              <li><router-link to="/admin/spacecrafts">Spacecrafts</router-link></li>
              <li><router-link to="/admin/destinations">Destinations</router-link></li>
              <li><router-link to="/admin/blog">Blog</router-link></li>
            </ul>
          </aside>
        </div>

        <div class="column m-4 is-10">
          <router-view></router-view>
        </div>
  </div>
</div>

</template>

<script>
export default {
  name: "AdminPage",
  data() {
    return {
      
    }
  }
}
</script>