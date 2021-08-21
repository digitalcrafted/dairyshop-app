function initialState () {
  return {
    products: [],
    categories: [],
    page: null
  }
}

export const state = () => ({
  products: initialState().products,
  categories: initialState().categories,
  page: initialState().page
})
export const actions = {
  async fetchProducts ({ commit, dispatch }, options) {
    try {
      const page = options.page ? '?page=' + options.page : ''
      await this.$axios.$get('/products' + page).then((response) => {
        console.log(response)
      })
    } catch (e) {
      console.log(e)
    }
  }
}
export const mutations = {
  resetStateData (state) {
    const newState = initialState()
    Object.assign(state, newState)
  }
}
export const getters = {}
