const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const Strategy = require('passport-local').Strategy
const api = require('./controllers/userController')

app.use(cors())

mongoose.connect('mongodb://localhost/wordpress_oscar',  (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})

const users = require('./routes/users')
const articles = require('./routes/articles')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

passport.use(new Strategy(api.signIn))
app.use(passport.initialize())

app.use('/users', users)
app.use('/articles', articles)

app.listen(3000)
module.exports = app
