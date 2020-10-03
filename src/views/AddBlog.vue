<template>
  <form>
    <v-text-field v-model="blog.title" label="Title"></v-text-field>
    <v-textarea v-model="blog.body" label="Body"></v-textarea>

    <v-btn class="mr-4" v-on:click="onSubmit">Create</v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      blog: {},
    };
  },
  methods: {
    async onSubmit() {
      const blog = await this.$store.dispatch("addBlog", this.blog);
      this.$router.push({ name: "show-blog", params: { id: blog.id } });
    },
  },
};
</script>