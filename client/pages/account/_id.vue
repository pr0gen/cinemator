<template>
  <div class="container mt-6">

    <h1 class="title mt-6"> Update password </h1>

    <b-field label="Password" >
      <b-input type="password" v-model="password" @keyup.native="error.show = false" @keyup.native.enter="login"
               password-reveal></b-input>
    </b-field>

    <b-message v-if='error.show' type="is-danger">
      {{ error.message}}
    </b-message>

    <b-button type="button is-primary" @click="login">Connexion</b-button>


    <h1 class="title mt-6">Delete account</h1>

    <div class="buttons">
      <b-button type="is-danger" expanded>Delete</b-button>
    </div>




  </div>
</template>

<script>
export default {
  name: "account",
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
    async updatePassword() {
      if (this.password === '') {
        this.error.show = true
        this.error.message = 'Password can\'t be empty'
        return
      }

      const response = await this.$axios.post('http://localhost:3000/auth/login', {
        "password": this.password
      }).then(response => {
        console.log(response)
        if (response.status === 201) {
          this.$store.dispatch('authentication/loadToken', response.data.token)
          this.$router.push({path: '/'})
          return
        }
        this.error.show = true
        this.error.message = "Error"
      }).catch(error => {
        this.error.show = true
        this.error.message = "Error"
      })





    },
  }
}
</script>

