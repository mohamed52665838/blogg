const router = require("express").Router()

const { createUser, getAll, getId, updateUser, deleteUser, deleteAllUsers } = require('../controller/user.controller.js')

router.post("/create", createUser)
router.get('/all', getAll)
router.get("/:id", getId)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.delete("/all", deleteAllUsers)

module.exports = router