const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const PictureController = require("../controllers/pictureController");
const Picture = require("../models/Picture");

// passa o upload como intermediário da rota, escutando o campo file
router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll);
router.delete("/:id", PictureController.remove);

module.exports = router;
