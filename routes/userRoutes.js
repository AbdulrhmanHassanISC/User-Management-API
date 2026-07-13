const express = require("express")
const router = express.Router()
const {getAllUsers , getUserId , createUser , updateUser , deleteUser} = require("../controllers/userController")




router.get("/",getAllUsers)
router.get("/:id",getUserId)
router.post("/",createUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)



module.exports = router