export const actions = {
  nuxtClientInit({commit}, {req}) {

    if (process.client) {

      const token = localStorage.getItem('token')

      if (!token) {
        return
      }
      console.log("token loaded : " + token)
      commit('authentication/SET_TOKEN', token)

    }
  }
}
