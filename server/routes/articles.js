const express = require('express')
const router = express.Router()
const api = require('../controllers/articleController')
const jwt = require('../helpers/jwt_validation')

router.get('/', api.getAllArticles)
// router.get('/:id', api.getById)
router.post('/', jwt.verifyToken, api.insertArticle)
// router.put('/:id', api.editArticle)
router.delete('/:id', jwt.verifyId, api.deleteArticle)

module.exports = router
