<template>
  <ul v-if="productsList.length" class="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  py-9">
    <li v-for="(product, index) in productsList" :key="index" class="col-span-1 flex flex-col text-center bg-red-200">
      <div class=" relative">
        <div class=" inset-0  w-full">
          <img class="w-full max-h-70 object-contain object-center" :src="product.image" :alt="product.name">
          <div class="flex flex-col flex-1 p-4 mx-auto">
            <h2 class="text-base tracking-normal text-gray-800 pb-0 mb-0 tk-brandon-grotesque">
              {{ product.name }}
            </h2>
            <p class="text-sm font-normal tracking-normal text-gray-800 tk-brandon-grotesque">
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
