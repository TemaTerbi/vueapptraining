<template>
  <div class="post" v-if="posts.length">
    <transition-group name="post-list">
      <post-id v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)"/>
    </transition-group>
  </div>
  <h2 v-else class="error">Постов нет</h2>
</template>

<script>
import PostId from "@/components/PostId";
export default {
  components: {PostId},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
.post{
  padding: 20px ;
}
.error{
  color: red;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
}
</style>