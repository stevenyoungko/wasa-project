<template>
  <div id="app" :class="themeClass">
    <RouterView />
  </div>
</template>

<script>

export default {
  created() {
    if (localStorage.theme) {
      this.$store.dispatch("themeChange", localStorage.theme)
    } else {
      localStorage.theme = this.$store.state.theme
    }
  },
  watch: {
    themeClass() {
      localStorage.theme = this.$store.state.theme
    },
  },
  computed: {
    themeClass() {
      return `theme-${this.$store.state.theme}`
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: #F9FAFB;
}
</style>
