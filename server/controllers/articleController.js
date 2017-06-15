var db = require('../models/article')
const methods = {}

methods.getAllArticles = function(req, res) {
  db.find({})
  .populate('author')
  .exec((error, records)=>{
    if(error){
      res.send(error)
    } else {
      res.send(records)
    }
  })
}

methods.getById = function(req,res){
  db.findOne({_id:req.params.id})
  .populate('author', 'username')
  .exec((error, records)=>{
    if(error){
      res.send(error)
    } else {
      res.send(records)
    }
  })
}

methods.insertArticle = function(req, res){
  console.log('a',req.body);
  console.log('b',req.decoded);
  var articleInput = new db({
    title:req.body.title,
    content:req.body.content,
    category:req.body.category,
    author:req.decoded.id
  })
  articleInput.save(function(err,result){
    if(err){
      res.send(err)
    } else {
      db.findOne({_id:result._id})
      .populate('author', 'username')
      .exec((error, records)=>{
        if(error){
          res.send(error)
        } else {
          res.send(records)
        }
      })
    }
  })
}

methods.deleteArticle = function(req,res) {
  db.findByIdAndRemove(req.params.id, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

module.exports = methods
