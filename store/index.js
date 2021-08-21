export const state = () => ({})
export const actions = {
  async nuxtServerInit ({ dispatch }, { req }) {
    try {
      await dispatch('products/fetchProducts', { page: req.page }, { root: true })
    } catch (e) {
      console.log(e.message)
    }
  }
}
export const mutations = {}
export const getters = {}
