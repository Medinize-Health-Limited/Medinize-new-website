export const state = () => ({
  isAuthenticated: false,
  user: null
})

export const mutations = {
  SET_AUTHENTICATION (state, payload) {
    state.isAuthenticated = payload.isAuthenticated
    state.user = payload.user
  }
}

export const actions = {
  authenticateUser ({ commit }, userData) {
    const isAuthenticated = true
    const user = userData

    commit('SET_AUTHENTICATION', { isAuthenticated, user })
  }
}

export const getters = {
  currentUser: (state) => {
    return state.user
  }
}
