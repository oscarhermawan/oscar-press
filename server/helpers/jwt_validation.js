var expres = require('express')
var jwt = require('jsonwebtoken')
var methods = {}

methods.verifyToken = function(req, res, next){
  jwt.verify(req.headers.token, 'secret', (err, decoded)=>{
    if(decoded){
      req.decoded = decoded
      next();
    }
    else{
      res.send(err)
    }
  })
}

methods.verifyId = function(req, res, next){
  console.log('token', req.headers);
  console.log('id author', req.headers.author);
  jwt.verify(req.headers.token, 'secret', (err, decoded)=>{
    if(decoded.id == req.headers.author){
      req.decoded = decoded
      next();
    }
    else{
      res.send('Gagal')
    }
  })
}

module.exports = methods
