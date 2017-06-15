var db = require('../models/user')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')
const methods = {}

methods.getAllUsers = function(req, res) {
  db.find(function(err, User) {
    if(err){
      console.log(err);
    } else {
      res.send(User)
    }
  })
}

methods.insertUser = function(req, res){
  console.log('gebleg',req.body);
  var userInput = new db({
    username:req.body.username,
    password:passwordHash.generate(req.body.password)
  })
  userInput.save(function(err,result){
    if(err){
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

methods.signIn = function (username, password, next) {
  var getUser = db.findOne({username : username})
  getUser.exec(function(err, user){
    if(passwordHash.verify(password, user.password)){
      let User = {
        id:user.id,
        username:user.username,
      }
      let token = jwt.sign(User, 'secret')
       next(null, {message: 'Berhasil Login', token })
    } else {
      next(null, {message: 'Password Salah'})
    }
  })
}



module.exports = methods
