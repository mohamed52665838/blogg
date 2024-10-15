const router = require("express").Router()
const {createPost , updatePost,deleteAllPosts,deletePost}=require("../controller/post.controller.js")

router.post("/post/create", createPost)//path heka ta chnwa ! o ta3mir fi postman
router.put("/post/:title",updatePost)
router.delete("/user/:title", deletePost)
router.delete("/user/all", deleteAllPosts)
module.exports = router
