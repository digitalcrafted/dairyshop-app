<template>
  <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
    <paginate
      v-model="activePage"
      :page-count="3"
      :page-range="3"
      :margin-pages="3"
      :click-handler="doSwitchPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'flex justify-center mt-10 space-x-1'"
      :page-class="'flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'"
      :page-link-class="'flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'"
      :prev-class="'flex items-center justify-center h-8 w-8 rounded text-gray-400'"
      :prev-link-class="'flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400'"
      :next-class="'flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'"
      :next-link-class="'flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600'"
      :active-class="'bg-blue-400'"
      :hide-prev-next="false"
    />
    <button class="relative text-sm focus:outline-none group mt-4 sm:mt-0">
      <div class="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
        <span class="font-medium">
          {{ selectedCategory }}
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
          @click.prevent="doSwitchCategory(cat.value)"
        >{{ cat.text }}</a>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CategoryAndPagination',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    pages: {
      type: Object,
      default: () => {}
    },
    selectedCategory: {
      type: String,
      default: 'All Products'
    },
    switchCategory: {
      type: Function,
      default: () => {}
    },
    switchPage: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      activePage: 1
    }
  },
  computed: {
    pageCount () {
      const array = []
      let i = 1
      for (i; i < this.pagination.total; i++) {
        array.push(i)
      }
      return array
    }
  },
  methods: {
    doSwitchCategory (arg) {
      this.switchCategory(arg)
    },
    doSwitchPage (arg) {
      this.activePage = arg
      this.switchPage(arg)
    }
  }
}
</script>
