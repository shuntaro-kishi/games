
export const state = () => ({
  finished: false
})
export const mutations = {
  finish: (state) => {
    state.finished = true
  }
}
export const actions = {
  finish ({ commit }) {
    commit('finish')
  }
}
export const getters = {}
