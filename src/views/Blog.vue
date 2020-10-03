<template>
  <div>
    <p>Title: {{ blog.title }}</p>
    <p>Body: {{ blog.body }}</p>
    <router-link to="/blogs"></router-link>
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