const state = () => ({
  language: 'TH'
})

const getters = {
  languageSystem: (state) => state.language
}

const mutations = {
  setLanguage(state, {language}) {
    state.language = language
  }
}


const actions = {
  setLanguageSystem({ commit }, products) {
    commit('setLanguage', products)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
