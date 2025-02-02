const express = require("express");
const { getAllDokter, createDokter, updateDokter, deleteDokter } = require("../controllers/dokterController");

const router = express.Router();

router.get("/", getAllDokter);
router.post("/", createDokter);
router.put("/:id", updateDokter);
router.delete("/:id", deleteDokter);

module.exports = router;
