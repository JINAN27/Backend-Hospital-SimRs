const mongoose = require("mongoose");

const DokterSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  spesialis: { type: String, required: true },
  no_hp: { type: String, required: true },
  jadwal: { type: String, required: true }
});

module.exports = mongoose.model("Dokter", DokterSchema);
