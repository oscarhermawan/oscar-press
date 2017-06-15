<template>
  <div class="login">
    <div class="tabs is-medium">
      <ul>
        <li><a href="/#/login">Login</a></li>
        <li class="is-active"><a>Register</a></li>
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
        <a class="button is-info" @click="register">Login</a>
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
    register:function(){
      axios.post('http://localhost:3000/users',{
        username:this.username,
        password:this.password
      })
      .then((result)=>{
        alert('Success Register ID')
        window.location.href = '/#/login'
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
