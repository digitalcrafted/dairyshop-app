<template>
  <ul v-if="productsList.length" class="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  py-9">
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
