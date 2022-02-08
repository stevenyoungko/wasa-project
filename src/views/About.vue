<template>
  <div class="about">
    <button @click="redTheme">红色主题</button>
    <button @click="blueTheme">蓝色主题</button>
    <hr />
    <h1 class="theme_title">This is an about page</h1>
    <button class="theme-default-btn">默认</button>
    <button class="theme-primary-btn">主要</button>
    <button class="theme-info-btn">提示</button>
    <br />
    <FormCell v-model="form.name" />
    <br />
    <FormCell v-model="form.gender" formType="radio" />
    <br />
    <FormCell v-model="form.score" formType="select" />

    <div>
      <p>姓名: {{ form.name }}</p>
      <p>性別: {{ form.gender }}</p>
      <p>分數: {{ form.score }}級</p>
    </div>
  </div>
</template>
<script>
import FormCell from '@/components/FormCell'
export default {
  components: {
    FormCell
  },
  data() {
    return {
      form: {
        name: '',
        gender: '',
        score: ''
      }
    }
  },
  methods: {
    blueTheme() {
      this.$store.dispatch("themeChange", "blue");
    },
    redTheme() {
      this.$store.dispatch("themeChange", "red");
    },
  },
};
</script>