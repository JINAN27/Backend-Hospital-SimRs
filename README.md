# SIMRS Backend

Sistem Informasi Manajemen Rumah Sakit (SIMRS) - Backend

## Fitur Utama
- **Manajemen Dokter:** CRUD data dokter.
- **Manajemen Pasien:** CRUD data pasien.
- **Manajemen Kamar:** Pemantauan ketersediaan kamar.
- **Janji Temu:** Penjadwalan dan manajemen janji temu.

## Prasyarat
- [Node.js](https://nodejs.org/) (versi terbaru disarankan)
- [MongoDB](https://www.mongodb.com/) atau database lain sesuai konfigurasi
- Git

## Instalasi

1. **Clone Repository:**
   ```bash
   git clone https://github.com/JINAN27/Backend-Hospital-SimRs.git
   cd simrs-backend
   ```

2. **Instalasi Dependency:**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment:**
   - Buat file `.env` di root folder:
     ```env
     PORT=5000
     DB_URI=mongodb://localhost:27017/simrs
     JWT_SECRET=your_secret_key
     ```

4. **Menjalankan Server:**
   ```bash
   npm run dev
   ```
   Server akan berjalan di `http://localhost:3000`.

## Struktur Folder
```
├── controllers
├── models
├── routes
├── middlewares
├── config
├── .env
├── .gitignore
├── package.json
└── server.js
```

## API Endpoints
- **Dokter:** `api/dokter`
- **Pasien:** `api/pasien`
- **Kamar:** `api/kamar`
- **Janji Temu:** `api/janji`

## Kontribusi
1. Fork repository.
2. Buat branch baru: `git checkout -b feature/nama-fitur`.
3. Commit perubahan: `git commit -m "Tambah fitur X"`.
4. Push ke GitHub: `git push origin feature/nama-fitur`.
5. Buat pull request.

## Lisensi
[MIT License](LICENSE)

---
**Developed with ❤️ for better healthcare management.**

