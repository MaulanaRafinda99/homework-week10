const express = require("express")
const router = express.Router()
const FilmController = require("../controllers/filmController.js")
const multer = require("multer")
const diskStorage = require("../middlewares/multer.js")

router.post("/", FilmController.create);
router.get("/", FilmController.findAll);
router.get("/:id", FilmController.findOne);
router.put("/uploads/:id", multer({storage: diskStorage}).single("image"), FilmController.uploadImage);
router.put('/:id', FilmController.updateFilm)
router.delete("/:id", FilmController.destroy);

module.exports = router;