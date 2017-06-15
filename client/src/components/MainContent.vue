<template>
  <div>
    <navbar @keluarDariAnak="logOut"></navbar>
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
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import sidebar from '@/components/Sidebar'
import contentnya from '@/components/Contentnya'
export default{
  data(){
    return{

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
