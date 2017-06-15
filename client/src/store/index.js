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
    },
    ADD_ARTICLE({ commit }, { addArticle }) {
      axios.post('http://localhost:3000/articles', addArticle, { headers: { token: localStorage.getItem('token')}})
      .then((response) =>{
        commit('ADD_ARTICLE', { result : response.data })
      }, (err) => {
        console.log(err)
      })
    },
    DELETE_ARTICLE({ commit }, { deleteArticle } ){
      axios.delete(`http://localhost:3000/articles/${deleteArticle.id}`, { headers:
        {
          token: localStorage.getItem('token'),
          author:deleteArticle.author
        }
      })
      .then((response) =>{
        if(response.data == 'Gagal'){
          alert('Anda Tidak Punya Akses')
        }
        else{
          commit('DELETE_ARTICLE', { result : response.data })
        }
      })
    }
  },
  mutations: {
    SET_ARTICLES_LIST: (state, { list }) => {
      state.articles_list = list
    },
    ADD_ARTICLE (state, { result }) {
     state.articles_list.push(result)
   },
    DELETE_ARTICLE (state, { result }) {
      let idx = state.articles_list.map(p => p._id).indexOf(result._id)
      state.articles_list.splice(idx, 1)
    }
  },
  getters: {
    openArticles:state =>{
      return state.articles_list.filter(articles_list => !articles_list.completed)
    }
  }
})

export default store
