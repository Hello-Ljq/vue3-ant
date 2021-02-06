<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Layouts from './views/layouts/Layouts.vue'

export default {
  name: 'App',
  components: {
    Layouts
  },
  mounted() {

  }
}
</script>
