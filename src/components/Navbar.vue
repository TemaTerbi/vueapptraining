<template>
  <div class="navbar">
    <div class="navbar__btn">
      <my-button class="btnglav" @click="$router.push('/')">Главная</my-button>
      <my-button @click="$router.push('/post')">Посты</my-button>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  .navbar{
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 15px;
  }
  .btnglav{
    border-color: red;
    margin-right: 1rem;
  }
</style>