<template>
  <component
    type="button"
    :is="getTag"
    :to="to"
    class="theme-primary-btn btn"
  >
    <slot>主要</slot>
  </component>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    tag: String,
    to: String,
  },
  computed: {
    getTag() {
      if (this.tag) {
        return this.tag
      } else if (!this.tag && this.to) {
        return 'RouterLink'
      }
      return 'button'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>