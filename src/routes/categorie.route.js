const router = require("express").Router()
const {createCategorie,getCategoriebyid,getAllCategorie,updateCategorie,deleteAllCategorie,deleteCategorie}=require("../controller/categorie.controller.js")


router.get("/all", getAllCategorie)
router.get('/:id', getCategoriebyid)
router.post("/create", createCategorie)
router.put("/:id",updateCategorie)
router.delete("/:id", deleteCategorie)
router.delete("/all", deleteAllCategorie)
module.exports = router