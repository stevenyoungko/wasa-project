<template>
  <header>
    <nav class="nav theme-background">
      <ul class="nav-left">
        <li v-for="nav in navList" :key="nav.name" class="nav-item">
          <router-link :to="nav.path" class="nav-link">{{ nav.name }}</router-link>
        </li>
      </ul>
      <div class="nav-right">
        <FormCell v-model="theme" formType="select" placeHolder="請切換主題顏色" :selectOptions="themeList" />
      </div>
    </nav>
  </header>
</template>

<script>
import FormCell from '../components/FormCell.vue'
export default {
  name: 'Header',
  components: {
    FormCell
  },
  data() {
    return {
      theme: localStorage.theme,
      navList: [
        { name: '主題換色', path: '/' },
        { name: 'From表單', path: '/form' },
        { name: 'Api串接', path: '/api-connect' },
        { name: 'Contact', path: '' },
        { name: 'Project', path: '' },
      ],
      themeList: [
        { label: '藍色主題', value: 'blue'},
        { label: '紅色主題', value: 'red' }
      ]
    }
  },
  watch: {
    'theme'(val) {
      switch(val) {
        case 'blue':
          this.$store.dispatch("themeChange", "blue")
          break
        case 'red':
          this.$store.dispatch("themeChange", "red")
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>