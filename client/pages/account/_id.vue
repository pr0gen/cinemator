<template>
  <div class="container mt-6">

    <h1 class="title mt-6"> Update password </h1>

    <b-field label="Password">
      <b-input type="password" v-model="password" @keyup.native="error.show = false" @keyup.native.enter="login"
               password-reveal></b-input>
    </b-field>

    <b-message v-if='error.show' type="is-danger">
      {{ error.message }}
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
import {mapGetters} from "vuex";

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
  computed: {
    ...mapGetters('authentication', ['id', 'token'])
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

          this.$axios.delete(`http://localhost:3000/users?userId=${this.id}`, {
            "headers": {
              'Authorization': `Bearer ${this.token}`,
              'Content-Type': 'application/json'
            }
          }).then(response => {
            if (response.status === 200) {
              Swal.fire(
                'Deleted!',
                'Your account has been deleted.',
                'success'
              )
              this.$store.dispatch('authentication/logout')
              this.$router.push({path: '/'})
              return
            }
            Swal.fire(
              'Error',
              'Token JWT not valid',
              'error'
            )
            this.error.show = true
            this.error.message = "Error"
          }).catch(error => {
            Swal.fire(
              'Error',
              'Token JWT not valid',
              'error'
            )
          })


        }
      })
    },


    updatePassword() {

      if (this.password === '') {
        this.error.show = true
        this.error.message = 'Password can\'t be empty'
        return
      }

      this.$axios.put(`http://localhost:3000/users/update/password`,
        {
          'id': this.id,
          'newPassword': this.password
        },
        {
          'headers': {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then(response => {
        if (response.status === 200) {
          Swal.fire(
            'Password',
            'Your password has been updated.',
            'success'
          )
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

