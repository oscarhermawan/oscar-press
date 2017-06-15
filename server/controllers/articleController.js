var db = require('../models/article')
const methods = {}

methods.getAllArticles = function(req, res) {
  db.find(function(err, record) {
    if(err){
      console.log(err);
    } else {
      res.send(record)
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
      res.send(result)
    }
  })
}



module.exports = methods
