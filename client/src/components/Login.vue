<template>
  <div class="login">
    <div class="tabs is-medium">
      <ul>
        <li class="is-active"><a>Login</a></li>
        <li><a href="/#/register">Register</a></li>
      </ul>
    </div>

    <div class="columns">
      <div class="column is-one-quarter">
        <label class="label">Username</label>
      </div>
      <div class="column">
        <input class="input" type="text" placeholder="Text input" v-model="username">
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-quarter">
        <label class="label">Password</label>
      </div>
      <div class="column">
        <input class="input" type="password" placeholder="Text input" v-model="password">
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-quarter">
      </div>
      <div class="column">
        <a class="button is-info" @click="loginLocal">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    loginLocal:function(){
      axios.post('http://localhost:3000/users/signin', {
        username:this.username,
        password:this.password
      })
      .then((result)=>{
        if(result.data.token == null){
          console.log('token', result.data.message);
        } else {
          localStorage.setItem('token', result.data.token)
          window.location.href = '/#/'
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.login{
  width:40%;
  margin:0 auto;
}
</style>
