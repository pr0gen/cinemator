<template>
  <div class="container mt-6">

    <h1 class="title mt-6"> Connexion </h1>

    <b-field label="Username">
      <b-input v-model="username" @keyup.native="error.show = false" @keyup.native.enter="login"></b-input>
    </b-field>

    <b-field label="Password" >
      <b-input type="password" v-model="password" @keyup.native="error.show = false" @keyup.native.enter="login"
               password-reveal></b-input>
    </b-field>

    <b-message v-if='error.show' type="is-danger">
      {{ error.message}}
    </b-message>

    <b-button type="button is-primary" @click="login">Connexion</b-button>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
      error: {
        show: false,
        message: ''
      },
    }
  },
  methods: {
    async login() {
      if (this.username === '' || this.password === '') {
        this.error.show = true
        this.error.message = 'All fields are required.'
        return
      }


      this.$axios.post('http://localhost:3000/auth/login', {
        "username": this.username,
        "password": this.password
      })
        .then((response) => {
          if (response.status === 201) {
            this.$store.dispatch('authentication/loadToken', response.data.token)
            this.$store.dispatch('authentication/loadId', response.data.id)
            this.$router.push({path: '/'})
            return
          }
          this.error.show = true
          this.error.message = "Error"
        })
        .catch((error) => {
          this.error.show = true
          this.error.message = "Invalid login"
        })


    },
  }
}
</script>

