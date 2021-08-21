function initialState () {
  return {
    products: [],
    categories: [],
    pages: {
      current_page: null,
      first_page_url: null,
      from: null,
      last_page: null,
      last_page_url: null,
      next_page_url: null,
      per_page: null,
      prev_page_url: null,
      to: null,
      total: null
    }
  }
}

export const state = () => ({
  products: initialState().products,
  categories: initialState().categories,
  pages: initialState().pages
})
export const actions = {
  async fetchProducts ({ commit, dispatch }, options) {
    try {
      const page = options.page ? '?page=' + options.page : ''
      await this.$axios.$get('/products' + page).then((response) => {
        console.log(response)
        commit('setProducts', response.data)
        commit('setCategories', response.data)
        commit('setPages', response)
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}
export const mutations = {
  setProducts (state, products) {
    state.products = []
    state.products = products
  },
  setCatgories (state, products) {
    state.categories = []
    products.map((product) => {
      return state.categories.push({
        text: product.catname,
        value: product.catname,
        description: product.catdescription,
        image: product.catimage
      })
    })
  },
  resetStateData (state) {
    const newState = initialState()
    Object.assign(state, newState)
  }
}
export const getters = {}
