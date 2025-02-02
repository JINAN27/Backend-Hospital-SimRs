const express = require("express");
const { getAllJanjiTemu, createJanjiTemu, updateJanjiTemu, deleteJanjiTemu } = require("../controllers/janjiTemuController");

const router = express.Router();

router.get("/", getAllJanjiTemu);
router.post("/", createJanjiTemu);
router.put("/:id", updateJanjiTemu);
router.delete("/:id", deleteJanjiTemu);

module.exports = router;
