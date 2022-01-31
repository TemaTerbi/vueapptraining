<template>
  <div class="header">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-input v-model="searchQuery" placeholder="Поиск..." v-focus></my-input>
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
  </div>
  <my-dialog v-model:show="visibleDialog">
    <form-input @create="createPost"/>
  </my-dialog>
  <post-list v-bind:posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading"/>
  <div v-else>ИДЕТ ЗАГРУЗКА....</div>
  <div class="inter" v-intersection="loadMorePosts"></div>
</template>

<script>
import PostList from "@/components/PostList";
import FormInput from "@/components/FormInput";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';

export default {
  components: {MyButton, MyDialog, FormInput, PostList},
  data(){
    return {
      posts: [],
      visibleDialog: false,
      page: 1,
      limit: 10,
      totalPages: 0,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.visibleDialog = false;
    },
    showDialog(){
      this.visibleDialog = true;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    }
  },

  mounted() {
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style>

.header{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>