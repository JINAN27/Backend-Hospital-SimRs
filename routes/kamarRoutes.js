const express = require("express");
const { getAllKamar, createKamar, updateKamar, deleteKamar } = require("../controllers/kamarController");

const router = express.Router();

router.get("/", getAllKamar);
router.post("/", createKamar);
router.put("/:id", updateKamar);
router.delete("/:id", deleteKamar);

module.exports = router;
