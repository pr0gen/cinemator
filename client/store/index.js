export const actions = {
  nuxtClientInit({commit}, {req}) {

    if (process.client) {

      const token = localStorage.getItem('token')
      if (token) {
        console.log("token loaded : " + token)
        commit('authentication/SET_TOKEN', token)
      }

      const id = localStorage.getItem('id')
      if (id) {
        console.log("id loaded : " + id)
        commit('authentication/SET_ID', id)
      }

      const username = localStorage.getItem('username')
      if (username) {
        console.log("username loaded : " + username)
        commit('authentication/SET_ID', username)
      }

    }
  }
}
