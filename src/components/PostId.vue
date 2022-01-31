<template>
  <div class="post__wrapper">
    <div class="post__content">
      <div class="post__name">
        <strong>{{post.title}}</strong>
      </div>
      <div class="post__body">
        {{post.body}}
      </div>
    </div>
    <my-button @click="$emit('remove', post)">
      Удалить
    </my-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post__wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  border: 2px solid violet;
  border-radius: 10px;
  margin-top: 1rem;
}
</style>
