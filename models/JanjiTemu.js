const mongoose = require("mongoose");

const JanjiTemuSchema = new mongoose.Schema({
  pasien: { type: mongoose.Schema.Types.ObjectId, ref: "Pasien", required: true },
  dokter: { type: mongoose.Schema.Types.ObjectId, ref: "Dokter", required: true },
  tanggal: { type: Date, required: true },
  status: { type: String, enum: ["Dijadwalkan", "Selesai", "Dibatalkan"], default: "Dijadwalkan" }
});

module.exports = mongoose.model("JanjiTemu", JanjiTemuSchema);
