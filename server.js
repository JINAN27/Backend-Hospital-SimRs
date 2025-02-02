require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

// Koneksi MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Proteksi routes lain dengan middleware
app.use("/api/dokter", authMiddleware, require("./routes/dokterRoutes"));
app.use("/api/pasien", authMiddleware, require("./routes/pasienRoutes"));
app.use("/api/janji", authMiddleware, require("./routes/janjiRoutes"));
app.use("/api/kamar", authMiddleware, require("./routes/kamarRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
