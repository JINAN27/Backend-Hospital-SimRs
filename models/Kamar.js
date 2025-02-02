const mongoose = require("mongoose");

const KamarSchema = new mongoose.Schema({
  nomor: { type: Number, required: true, unique: true },
  jenis: { type: String, required: true },
  status: { type: String, enum: ["Tersedia", "Terisi"], default: "Tersedia" }
});

module.exports = mongoose.model("Kamar", KamarSchema);
