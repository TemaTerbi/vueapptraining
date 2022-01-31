<template>
  <form class="form" @submit.prevent>
    <my-input type="text" class="form__input" v-model="post.title" placeholder="Название" v-focus/>
    <my-input type="text" class="form__input" v-model="post.body" placeholder="О чем?..."/>
    <div class="form__btnwrapper">
      <my-button @click="createPost">Добавить</my-button>
    </div>
  </form>
</template>

<script>

import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton},
  data(){
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .form__btnwrapper{
    display: flex;
    justify-content: flex-end;
  }



</style>