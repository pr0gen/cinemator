<template>
  <div class="container">

    <h1 class="title mt-6"> Create an account </h1>

    <b-field label="Username" >
      <b-input v-model="username"
               @keyup.native="error.show = false"
               @keyup.native.enter="register">

      </b-input>
    </b-field>

    <b-field label="Email" >
      <b-input v-model="email"
               @keyup.native="error.show = false"
               @keyup.native.enter="register">

      </b-input>
    </b-field>

    <b-field label="Password" >
      <b-input type="password"
               v-model="password"
               @keyup.native="error.show = false"
               @keyup.native.enter="register"
               password-reveal>
      </b-input>
    </b-field>

    <b-field label="Confirm your password" >
      <b-input type="password"
               v-model="confirmPassword"
               @keyup.native="error.show = false"
               @keyup.native.enter="register"
               password-reveal>
      </b-input>
    </b-field>

    <b-message v-if="error.show" type="is-danger">
      {{ this.error.message }}
    </b-message>

    <b-button class="button" type="button is-primary" :loading='loading' :disabled='loading' @click="register">Connexion</b-button>

  </div>

</template>

<script>

import Swal from 'sweetalert2'

export default {
  name: 'sign-up',

  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: {
        show: false,
        message: ''
      },
      loading: false
    }
  },

  methods: {
    async register() {
      this.loading = true
      if (this.password === this.confirmPassword && this.password != '') {
        this.loading = true

        const response = await this.$axios.post('http://localhost:3000/users/create', {
          "username": this.username,
          "email": this.email,
          "password": this.password
        })

        if (response.status === 201) {
          Swal.fire({
            title: 'Your account has been created',
            text: 'Thanks',
            icon: 'success',
            confirmButtonText: 'Great'
          }).then((result) => {
            if (result.value) {
              this.$router.push({path: '/'})
            }
          })
        } else {
          this.error.message = 'Invalid password or email'
          this.error.show = true
          this.username = ''
          this.email = ''
          this.password = ''
          this.confirmPassword = ''
        }
      } else {
        this.loading = false
        this.error.message = 'Les mots de passe ne sont pas identiques'
        this.error.show = true
      }
    },
  }








};
</script>

<style scoped>

</style>
