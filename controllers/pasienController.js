const Pasien = require("../models/Pasien");

exports.getAllPasien = async (req, res) => {
  try {
    const pasien = await Pasien.find();
    res.json(pasien);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPasien = async (req, res) => {
  try {
    const pasien = new Pasien(req.body);
    await pasien.save();
    res.status(201).json(pasien);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePasien = async (req, res) => {
  try {
    const pasien = await Pasien.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pasien);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePasien = async (req, res) => {
  try {
    await Pasien.findByIdAndDelete(req.params.id);
    res.json({ message: "Pasien berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
