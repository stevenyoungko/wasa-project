<template>
  <header>
    <nav class="nav theme-background">
      <ul class="nav-inner">
        <li v-for="nav in navList" :key="nav.name" class="nav-item">
          <router-link :to="nav.path" class="nav-link">{{ nav.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navList: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Resume', path: '' },
        { name: 'Contact', path: '' },
        { name: 'Project', path: '' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>