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
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
      <span class="text-sm font-semibold">1-16 of 148 Products</span>
      <button class="relative text-sm focus:outline-none group mt-4 sm:mt-0">
        <div class="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
          <span class="font-medium">
            {{ selectedCategory }}
            <!--[ { "text": "Dairy", "value": "Dairy", "description": "Our display of cream line milk", "image": null }, { "text": "Cheese", "value": "Cheese", "description": "Variety of Cheeses", "image": null }, { "text": "Specialties", "value": "Specialties", "description": "Seasonal time offers", "image": null } ]-->
          </span>
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
          <a class="w-full px-4 py-2 text-left hover:bg-gray-200" @click.prevent="switchCategory('All Products')">All Products</a>
          <a
            v-for="(cat, index) in categories"
            :key="index"
            class="w-full px-4 py-2 text-left hover:bg-gray-200"
            :title="cat.description"
            @click.prevent="switchCategory(cat.value)"
          >{{ cat.text }}</a>
        </div>
      </button>
    </div>
    <ul v-if="products.length" class="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  py-9">
      <li v-for="(product, index) in productsList" :key="index" class="col-span-1 flex flex-col text-center bg-red-200">
        <!--        { "id": 31, "name": "Sharp Cheddar", "category": 8, "image": "http://trayvonnorthern.com/Edgewood-API/public/uploads/5de9bac312193img.jpg", "sizes": 9, "featured": 4, "price": 10, "description": "Smooth, savory, cloth-bound. Aged 6-12 months.", "is_active": 1, "created_at": null, "updated_at": "2020-02-11 18:02:44", "catname": "Cheese", "catimage": null, "catdescription": "Variety of Cheeses", "size": "8 oz" }-->
        <div class=" relative">
          <div class=" inset-0  w-full">
            <img class="w-full max-h-70 object-contain object-center" :src="product.image" :alt="product.name">
            <div class="flex flex-col flex-1 p-4 mx-auto">
              <h2 class="text-base tracking-normal text-gray-800 pb-0 mb-0 tk-brandon-grotesque">
                {{ product.name }}
              </h2>
              <p class="text-sm font-normal tracking-normal text-gray-800 tk-brandon-grotesque">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
