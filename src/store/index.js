import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs.todo;
    },
    ADD_BLOG(state, blog) {
      const blogs = state.blogs.concat(blog.data);
      state.blogs = blogs;
    },
    EDIT_BLOG(state, blog) {
      state.blogs.forEach((b) => {
        if (b.id === blog.id) {
          b = blog;
        }
      });
    },
  },
  actions: {
    async fetchBlogs({ commit }) {
      await axios()
        .get("/posts")
        .then((res) => {
          commit("FETCH_BLOGS", res.data);
        })
        .catch((err) => console.log(err));
    },
    async addBlog({ commit }, blog) {
      const res = await axios().post("/posts", blog);
      const saveBlog = res.data;
      commit("ADD_BLOG", saveBlog);
      return saveBlog.data;
    },
    async editBlog({ commit }, blog) {
      const res = await axios().put(`/posts/${blog.id}`, blog);
      const editBlog = res.data;
      commit("EDIT_BLOG", editBlog);
      return editBlog.data;
    },
  },
});
