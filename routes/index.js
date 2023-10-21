const express = require("express")
const router = express.Router()
const userRouter = require("./user.js")
const filmRouter = require("./film.js")

// ===> Prefix
router.use("/users", userRouter);
router.use("/films", filmRouter);

module.exports = router;
