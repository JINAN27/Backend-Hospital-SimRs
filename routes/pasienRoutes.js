const express = require("express");
const { getAllPasien, createPasien, updatePasien, deletePasien } = require("../controllers/pasienController");

const router = express.Router();

router.get("/", getAllPasien);
router.post("/", createPasien);
router.put("/:id", updatePasien);
router.delete("/:id", deletePasien);

module.exports = router;
