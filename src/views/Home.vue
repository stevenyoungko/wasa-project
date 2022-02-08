<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: "Home",
      meta: [
        { name: 'description', content: "This is home." }
      ]
    };
  }
}
</script>
