const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController.js")

router.post("/", UserController.create);
router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);

module.exports = router;