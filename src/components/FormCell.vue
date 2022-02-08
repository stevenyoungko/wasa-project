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
        <option disabled value="">请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
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