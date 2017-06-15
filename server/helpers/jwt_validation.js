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

module.exports = methods
