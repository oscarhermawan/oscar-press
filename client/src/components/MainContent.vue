<template>
  <div>
    <navbar @keluarDariAnak="logOut" @aktifinModal="activeArticle"></navbar>
    <br>
    <div id="container">
      <div class="columns is-multiline is-mobile">
          <div class="column is-one-quarter">
            <sidebar></sidebar>
          </div>

          <div class="column">
            <contentnya></contentnya>
          </div>
        </div>
    </div>


    <!-- MODAL ADD -->
    <div :class="modalAddArticle">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Masuk</p>
          <button class="delete"></button>
        </header>
        <section class="modal-card-body">
            <input class="input" type="text" v-model="newArticle.title" placeholder="Add a Title">
            <input class="input" type="text" v-model="newArticle.content" placeholder="Add a Content">
            <input class="input" type="text" v-model="newArticle.category" placeholder="Add a Category">
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success" name="button" @click="addArticle"> Add Article </button>
          <a class="button" @click="closeModal">Cancel</a>
        </footer>
      </div>
    </div>
    <!-- END MODAL ADD-->

  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import sidebar from '@/components/Sidebar'
import contentnya from '@/components/Contentnya'
export default{
  data(){
    return{
      newArticle:{
        title:'',
        content:'',
        category:''
      },
      modalAddArticle:'modal'
    }
  },
  components:{
    navbar, sidebar, contentnya
  },
  created:function(){
    // if(localStorage.getItem('token') == null){
    //   window.location.href = '/#/login'
    // }
  },
  methods:{
    logOut:function(){
      window.localStorage.removeItem('token')
      window.location.href = '/#/login'
    },
    activeArticle:function(){
      if(localStorage.getItem('token')==null){
        alert('Login Dulu Bos')
      } else {
        this.modalAddArticle='modal is-active'
      }
    },
    closeModal:function(){
      this.modalAddArticle='modal'
    },
    addArticle:function(){
      let addArticle = {
        title:this.newArticle.title,
        content:this.newArticle.content,
        category:this.newArticle.category
      }
      this.$store.dispatch('ADD_ARTICLE', { addArticle })
      .then((result)=>{
        this.newArticle.title = ''
        this.newArticle.content = ''
        this.newArticle.category = ''
        this.modalAddArticle='modal'
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  mounted: function(){
     this.$store.dispatch('LOAD_ARTICLES_LIST')
  }
}
</script>

<style scoped>
#container{
  width:80%;
  margin:0 auto;
}
</style>
