
export const state = () => ({
  token: '',
})

export const getters = {
  token: state => state.token,
  isLoggedIn : state => !!state.token
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
}

export const actions = {
  loadToken({commit}, token) {
    commit('SET_TOKEN', token)
    localStorage.setItem('token', token)
  },

  logout( {commit}) {
    commit('SET_TOKEN', null)
    localStorage.removeItem('token')
  }


}
