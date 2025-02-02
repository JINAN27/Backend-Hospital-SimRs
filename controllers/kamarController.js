const Kamar = require("../models/Kamar");

exports.getAllKamar = async (req, res) => {
  try {
    const kamar = await Kamar.find();
    res.json(kamar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createKamar = async (req, res) => {
  try {
    const kamar = new Kamar(req.body);
    await kamar.save();
    res.status(201).json(kamar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateKamar = async (req, res) => {
  try {
    const kamar = await Kamar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(kamar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteKamar = async (req, res) => {
  try {
    await Kamar.findByIdAndDelete(req.params.id);
    res.json({ message: "Kamar berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
