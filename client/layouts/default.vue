<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h1 class='navbar-title'>Cinemator</h1>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div" v-if="!isLoggedIn">
          <div class="buttons">
            <b-navbar-item  class="button is-light"tag="router-link" :to="{ path: '/login' }">
              <strong>Login</strong>
            </b-navbar-item>
            <b-navbar-item  class="button is-primary"tag="router-link" :to="{ path: '/sign-up' }">
              <strong>Sign up</strong>
            </b-navbar-item>
          </div>
        </b-navbar-item>
        <b-navbar-item tag="div" v-else>
          <div class="buttons">
            <b-navbar-item  class="button is-light"tag="router-link" :to="{ path: '/account' }">
              <strong>Mon compte</strong>
            </b-navbar-item>
            <b-navbar-item  class="button is-light"  @click="logout">
              <strong>Log out</strong>
            </b-navbar-item>

          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class='content'>
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  computed: {
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  methods: {
    logout () {
      this.$store.dispatch('authentication/logout')
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fascinate&display=swap');
  .navbar-title {
    padding: 0px 15px;
    font-size: 25px;
    font-family: 'Fascinate', cursive;
  }


</style>
