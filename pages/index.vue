<template>
  <div>
    Hello
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DairyShopHome',
  data () {
    return {}
  },
  computed: {
    ...mapState('products', ['products', 'categories', 'pages'])
  }
}
</script>
