<template>
  <main class="theme-container">
    <section class="left">
      <h1 class="title theme-title">
        Hi, I am <br />
        Steven Ko.
      </h1>
      <p class="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum iste minima illum libero reiciendis ad eos accusamus explicabo nam molestiae.
      </p>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores magni velit assumenda optio necessitatibus fugit repudiandae ratione praesentium voluptatibus facilis autem officiis nemo dolorum, accusamus aliquid nam sed tempore facere quod! Ut inventore est earum aperiam quas commodi ullam quibusdam vitae dolore velit distinctio, delectus ipsum aliquid fugit eum?
      </p>
      <div>
        <button class="theme-default-btn">默认</button>
        <PrimaryButton />
        <PrimaryButton to="/form" style="width: 200px;">去表單</PrimaryButton>
        <button class="theme-info-btn">提示</button>
    </div>
    </section>
    <section class="right">
      <img class="image" src="../assets/profile.jpg" alt="picture" />
    </section>
  </main>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue'
export default {
  name: 'Theme',
  components: {
    PrimaryButton
  },
  metaInfo() {
    return {
      title: "Theme",
      meta: [
        { name: 'description', content: "This is theme." }
      ]
    };
  }
}
</script>
