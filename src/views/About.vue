<template>
  <div class="about">
    <button @click="redTheme">红色主题</button>
    <button @click="blueTheme">蓝色主题</button>
    <hr />
    <h1 class="theme_title">This is an about page</h1>
    <button class="theme-default-btn">默认</button>
    <button class="theme-primary-btn">主要</button>
    <button class="theme-info-btn">提示</button>
  </div>
</template>
<script>
export default {
  methods: {
    blueTheme() {
      this.$store.dispatch("themeChange", "primary");
    },
    redTheme() {
      this.$store.dispatch("themeChange", "danger");
    },
  },
};
</script>