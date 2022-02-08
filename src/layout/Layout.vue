<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>