export const state = () => ({})
export const actions = {
  async nuxtServerInit (context, { __ }) {
    await context.dispatch('products/fetchProducts')
  }
}
export const mutations = {}
export const getters = {}
