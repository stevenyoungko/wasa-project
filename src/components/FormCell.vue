<template>
  <div>
    <input v-if="formType === 'text'" type="text" v-model="newValue">

    <div v-if="formType === 'radio'">
      <input type="radio" id="boy" value="男" v-model="newValue">
      <label for="boy">男</label>
      <br>
      <input type="radio" id="girl" value="女" v-model="newValue">
      <label for="girl">女</label>
    </div>

    <div v-if="formType === 'select'">
      <select v-model="newValue">
        <option disabled value="">{{ placeHolder }}</option>
        <option v-for="option in selectOptions" :key="option.label" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormCell',
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    formType: {
      type: String,
      default: 'text'
    },
    placeHolder: {
      type: String,
      default: ''
    },
    selectOptions: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    },
  },
  computed: {
    newValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    },
  }
}
</script>

<style lang="scss" scoped>

</style>