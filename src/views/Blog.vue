<template>
  <div>
    <p>Title: {{ blog.title }}</p>
    <p>Body: {{ blog.body }}</p>
    <router-link :to="{ name: 'edit-blog', params: { id: blog.id } }"
      >Edit</router-link
    >
    <router-link to="/blogs">Blogs</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["blogs"]),
    blog() {
      return (
        this.blogs.find((blogId) => blogId.id === this.$route.params.id) || {}
      );
    },
  },
};
</script>