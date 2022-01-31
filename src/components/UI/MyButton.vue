<template>
  <button class="btn" >
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn{
  padding: 20px;
  border: none;
  background-color: transparent;
  color: violet;
  border: 2px solid violet;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;

}
</style>