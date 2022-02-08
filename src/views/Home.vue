<template>
  <main class="home">
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
        <button class="theme-primary-btn">主要</button>
        <button class="theme-info-btn">提示</button>
    </div>
    </section>
    <section class="right">
      <img class="image" src="../assets/profile.jpg" alt="picture" />
    </section>
  </main>
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
