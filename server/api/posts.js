const router = require('express').Router()
const Post = require('../db/models/post')
module.exports = router

//POST route to add a new post
router.post('/', async (req, res, next) => {
  try {
    // req.body.userId = req.user.id
    const createdPost = await Post.create({
      content: req.body.post,
      userId: req.user.id
    })
    res.json(createdPost)
  } catch (err) {
    next(err)
  }
})
