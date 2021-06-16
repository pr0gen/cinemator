
export const state = () => ({
  token: '',
  id: '',
  username: '',
})

export const getters = {
  token: state => state.token,
  isLoggedIn : state => !!state.token,
  id : state => state.id,
  username : state => state.username
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ID(state, id) {
    state.id = id
  },
  SET_USERNAME(state, username) {
    state.username = username
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

  loadUsername({commit}, username) {
    commit('SET_USERNAME', username)
    localStorage.setItem('username', username)
  },

  logout( {commit}) {
    commit('SET_TOKEN', null)
    commit('SET_ID', null)
    commit('SET_USERNAME', null)
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('username')
  }


}
