const router = require("express").Router()

const { createUser, getAll, getId, updateUser, deleteUser, deleteAllUsers } = require('../controller/user.controller.js')

router.post("/user/create", createUser)
router.get('/user/all', getAll)
router.get("/user/:id", getId)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)
router.delete("/user/all", deleteAllUsers)

module.exports = router