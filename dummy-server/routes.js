const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { getPosts, storePost } = require('./data/posts');

router.get('/', asyncHandler(async(req, res, next) => {
  const posts = await getPosts()
  return res.status(200).json({posts})
}))

router.post('/', asyncHandler( async (req, res, next) => {
  const savePost = await storePost(req.body);
  return res.status(201).json({savePost})
}))

module.exports = router