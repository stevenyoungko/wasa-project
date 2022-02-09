<template>
  <select
    class="form-select" 
    v-if="formType === 'select'" 
    v-model="newValue"
    v-bind="customAttr"
  >
    <option disabled value="">{{ placeHolder }}</option>
    <option 
      v-for="option in selectOptions" 
      :key="option.label" 
      :value="option.value"
    >{{ option.label }}</option>
  </select>

  <div v-else-if="formType === 'radio'">
    <div v-for="radio in radioOptions" :key="radio.label" style="margin-top: 4px;">
      <input 
        class="form-radio" 
        type="radio" 
        :id="radio.value" 
        :value="radio.label" 
        v-model="newValue"
        >
      <label :for="radio.value">{{ radio.label }}</label>
    </div>
  </div>

  <input 
    v-else
    class="form-input" 
    type="text" 
    v-model="newValue" 
    :placeholder="placeHolder"
    v-bind="customAttr"
  >
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
    customAttr() {
      return this.$attrs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>