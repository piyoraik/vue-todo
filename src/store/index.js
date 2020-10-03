import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: []
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs.todo
    },
    ADD_BLOG(state, blog) {
      const blogs = state.blogs.concat(blog.data)
      state.blogs = blogs
    }
  },
  actions: {
    async fetchBlogs({ commit }) {
      await axios().get('/posts')
        .then(res => {
          commit('FETCH_BLOGS', res.data)
        })
        .catch(err => console.log(err))
    },
    async addBlog({ commit }, blog) {
      const res = await axios().post('/posts', blog)
      const saveBlog = res.data
      commit('ADD_BLOG', saveBlog)
    }
  }
})