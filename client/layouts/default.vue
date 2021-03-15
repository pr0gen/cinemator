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
        <b-navbar-item href="#">
          Documentation
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-navbar-item  class="button is-primary"tag="router-link" :to="{ path: '/sign-up' }">
              <strong>Sign up</strong>
            </b-navbar-item>
            <b-navbar-item  class="button is-light"tag="router-link" :to="{ path: '/login' }">
              <strong>Sign up</strong>
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
