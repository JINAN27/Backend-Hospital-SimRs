const mongoose = require("mongoose");

const PasienSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  umur: { type: Number, required: true },
  alamat: { type: String, required: true },
  riwayat_medis: { type: String }
});

module.exports = mongoose.model("Pasien", PasienSchema);
