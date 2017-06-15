import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    articles_list:[]

  },
  actions: {
    LOAD_ARTICLES_LIST({ commit }) {
      axios.get('http://localhost:3000/articles')
      .then((response) => {
          commit('SET_ARTICLES_LIST', { list: response.data })
        },(err) => {
          console.log(err)
      })
    }
  },
  mutations: {
    SET_ARTICLES_LIST: (state, { list }) => {
      state.articles_list = list
    }
  },
  getters: {
    openArticles:state =>{
      return state.articles_list.filter(articles_list => !articles_list.completed)
    }
  }
})

export default store
