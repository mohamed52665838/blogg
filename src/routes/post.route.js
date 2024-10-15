const router = require("express").Router()
const {createPost , updatePost,deleteAllPosts,deletePost,getAllPosts,getPostById}=require("../controller/post.controller.js")

router.get("/all", getAllPosts)
router.get('/:id', getPostById)
router.post("/create", createPost)
router.put("/:id",updatePost)
router.delete("/:id", deletePost)
router.delete("/all", deleteAllPosts)
module.exports = router
