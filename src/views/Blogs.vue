<template>
  <div>
    <h1>Blogs</h1>
    <v-row>
      <v-col cols="4">
        <AddBlog />
      </v-col>
      <v-col cols="8">
        <table>
          <thead>
            <th>Title</th>
            <th>Description</th>
          </thead>
          <tr v-for="blog in blogs" v-bind:key="blog.id">
            <td>{{ blog.title }}</td>
            <td>{{ blog.body }}</td>
            <td>Show</td>
            <td>Edit</td>
            <td>Destroy</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddBlog from './AddBlog'

export default {
  components: {
    AddBlog
  },
  computed: {
    ...mapState(['blogs'])
  },
}
</script>