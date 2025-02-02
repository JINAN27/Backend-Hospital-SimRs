const Dokter = require("../models/Dokter");

exports.getAllDokter = async (req, res) => {
  try {
    const dokter = await Dokter.find();
    res.json(dokter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDokter = async (req, res) => {
  try {
    const dokter = new Dokter(req.body);
    await dokter.save();
    res.status(201).json(dokter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateDokter = async (req, res) => {
  try {
    const dokter = await Dokter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(dokter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDokter = async (req, res) => {
  try {
    await Dokter.findByIdAndDelete(req.params.id);
    res.json({ message: "Dokter berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
