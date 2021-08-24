<template>
  <ul v-if="productsList.length" class="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  py-9">
    <li v-for="(product, index) in productsList" :key="index" class="col-span-1 flex flex-col text-center">
      <div class="relative">
        <div class="w-full">
          <img class="w-full object-contain object-center max-h-70" :src="product.image" :alt="product.name">
          <div class="w-full bottom-0 left-0 p-4 bg-black opacity-70 absolute">
            <h2 class="text-base text-white tracking-normal pb-0 mb-0">
              {{ product.name }}
            </h2>
            <p class="text-sm text-white font-normal tracking-normal">
              {{ product.price | currency }}
            </p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductsList',
  props: {
    productsList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
