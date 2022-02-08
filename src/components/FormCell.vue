<template>
  <div>
    <input v-if="formType === 'text'" type="text" v-model="newValue" :placeholder="placeHolder">

    <div v-if="formType === 'radio'">
      <span v-for="radio in radioOptions" :key="radio.label">
        <input type="radio" :id="radio.value" :value="radio.label" v-model="newValue">
        <label :for="radio.value">{{ radio.label }}</label>
      </span>
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
    radioOptions: {
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