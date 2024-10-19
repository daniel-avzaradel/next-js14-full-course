const { getPosts, addPost } = require("./data/posts");

const asyncHandler = require("express-async-handler");
const router = require("express").Router();

router.get("/", asyncHandler(async (req, res, next) => {
    const posts = await getPosts();
    res.json({ posts });
  })
);

router.post("/",  asyncHandler(async (req, res, next) => {
    const existingPosts = await getPosts();
    const newPost = {
      ...req.body,
      id: Math.random().toString(),
    };
    const posts = [...existingPosts, newPost]
    const addingPost = await addPost(posts);
    res.status(201).json({ posts: addingPost });
  })
);

module.exports = router;
