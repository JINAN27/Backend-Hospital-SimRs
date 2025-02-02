const JanjiTemu = require("../models/JanjiTemu");

exports.getAllJanjiTemu = async (req, res) => {
  try {
    const janjiTemu = await JanjiTemu.find().populate("pasien dokter");
    res.json(janjiTemu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createJanjiTemu = async (req, res) => {
  try {
    const janjiTemu = new JanjiTemu(req.body);
    await janjiTemu.save();
    res.status(201).json(janjiTemu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateJanjiTemu = async (req, res) => {
  try {
    const janjiTemu = await JanjiTemu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(janjiTemu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteJanjiTemu = async (req, res) => {
  try {
    await JanjiTemu.findByIdAndDelete(req.params.id);
    res.json({ message: "Janji Temu berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
