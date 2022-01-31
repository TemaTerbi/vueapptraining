<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input{
  margin-bottom: 1rem;
  padding: 15px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  border-color: violet;
  outline: none;
}
</style>