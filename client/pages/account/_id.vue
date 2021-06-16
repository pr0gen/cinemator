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

    <b-button type="button is-primary" @click="updatePassword">Connexion</b-button>

    <h1 class="title mt-6">Delete account</h1>

    <div class="buttons">
      <b-button type="is-danger" @click="deleteAccount" expanded>Delete</b-button>
    </div>


  </div>
</template>

<script>

import Swal from 'sweetalert2'

export default {
  name: "account",
  data() {
    return {
      password: '',
      error: {
        show: false,
        message: ''
      },
    }
  },
  methods: {

    deleteAccount() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it !'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your account has been deleted.',
            'success'
          )
        }
      })
    },


    updatePassword() {

      if (this.password === '') {
        this.error.show = true
        this.error.message = 'Password can\'t be empty'
        return
      }

      this.$axios.post('http://localhost:3000/auth/login', {
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

      })





    },
  }
}
</script>

