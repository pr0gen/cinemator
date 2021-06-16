
export const state = () => ({
  token: '',
  id: '',
})

export const getters = {
  token: state => state.token,
  isLoggedIn : state => !!state.token,
  id : state => state.id
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ID(state, id) {
    state.id = id
  },
}

export const actions = {
  loadToken({commit}, token) {
    commit('SET_TOKEN', token)
    localStorage.setItem('token', token)
  },

  loadId({commit}, id) {
    commit('SET_ID', id)
    localStorage.setItem('id', id)
  },

  logout( {commit}) {
    commit('SET_TOKEN', null)
    commit('SET_ID', null)
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }


}
