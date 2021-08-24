<template>
  <div class="bg-gray-100 p-8">
    <div class="relative">
      <div>
        <h1 class="text-3xl text-centre">
          {{ selectedCategory }}
        </h1>
      </div>
      <div>
        <div class="shadow flex mt-5">
          <input v-model="search" class="w-full rounded p-4" type="text" placeholder="Search Products">
        </div>
      </div>
    </div>
    <CategoryList :categories="categories" :selected-category="selectedCategory" :switch-category="switchCategory" />
    <ProductsList :products-list="productsList" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DairyShopHome',
  data () {
    return {
      selectedCategory: 'All Products',
      productsList: [],
      search: null
    }
  },
  computed: {
    ...mapState('products', ['products', 'categories', 'pages'])
  },
  watch: {
    search (val) {
      setTimeout(() => {
        this.filterProducts(val)
      }, 2000)
    }
  },
  mounted () {
    this.getProductsList()
  },
  methods: {
    getProductsList () {
      this.selectedCategory === 'All Products'
        ? this.productsList = this.products
        : this.productsList = this.products.filter((product) => {
          return product.catname === this.selectedCategory
        })
    },
    switchCategory (cat) {
      this.selectedCategory = cat
      this.getProductsList()
    },
    filterProducts (arg) {
      if (arg.length > 3) {
        this.switchCategory('All Products')
        this.productsList = this.products.reduce(
          function (list, item) {
            if (item.name.includes(arg)) {
              list.push(item)
            }
            return list
          },
          []
        )
        return this.productsList
      } else {
        this.getProductsList()
      }
    }
  }

}
</script>

<style>
.group:hover .group-hover\:flex {
  display: flex;
}
.group:focus .group-focus\:flex {
  display: flex;
}
</style>
