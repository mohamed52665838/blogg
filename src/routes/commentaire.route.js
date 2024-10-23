const router = require("express").Router()
const {createCommentaire,getCommentaireById,getAllComments,updateCommentaire,deleteAllComments,deleteCommentaire}=require("../controller/commentaire.controller.js")


router.get("/all", getAllComments)
router.get('/:id', getCommentaireById)
router.post("/create", createCommentaire)
router.put("/:id",updateCommentaire)
router.delete("/:id", deleteCommentaire)
router.delete("/hola/all", deleteAllComments)

module.exports = router
