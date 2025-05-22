# 🎵 OpenMusic API
Submission project for Dicoding - [Belajar Back-End Fundamental dengan JavaScript
](https://www.dicoding.com/academies/271-belajar-fundamental-back-end-dengan-javascript)

## 📝 Deskripsi
OpenMusic API adalah sebuah proyek submission untuk kelas Dicoding "Belajar Fundamental Back-End dengan JavaScript". API ini memungkinkan pengguna untuk mengelola data musik, termasuk album, lagu, playlist, dan kolaborasi.

## 🚀 Fitur
- Pengelolaan Album (Tambah, Lihat, Ubah, Hapus)
- Pengelolaan Lagu (Tambah, Lihat, Ubah, Hapus di dalam Album)
- Registrasi dan Login Pengguna
- Pembuatan dan Pengelolaan Playlist (Tambah/Hapus lagu, Lihat Playlist)
- Kolaborasi pada Playlist
- Pelacakan Aktivitas Lagu dalam Playlist

## ⚙️ Teknologi yang Digunakan
- Node.js
- Hapi.js (Framework web)
- PostgreSQL (Database)
- JWT (JSON Web Tokens untuk autentikasi)
- Joi (Untuk validasi data)
- ESLint (Untuk linting kode)
- node-pg-migrate (Untuk migrasi database)
- bcrypt (Untuk hashing password)
- dotenv (Untuk manajemen variabel lingkungan)

## ⚙️ Instalasi

1.  **Clone repository ini:**
    ```bash
    git clone https://github.com/Elmosius/OpenMusic-API.git
    cd OpenMusic-API
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Setup database PostgreSQL:**
    Pastikan Anda memiliki server PostgreSQL yang berjalan. Buat database baru untuk proyek ini.
4.  **Konfigurasi variabel lingkungan:**
    Buat file `.env` di root proyek dengan menyalin dari `.env.example` (Anda mungkin perlu membuat file `.env.example` terlebih dahulu jika belum ada, atau langsung membuat `.env`). Isi variabel yang diperlukan:

    ```env
    # PostgreSQL Configuration
    PGUSER=username_database_anda
    PGPASSWORD=password_database_anda
    PGDATABASE=nama_database_anda
    PGHOST=localhost
    PGPORT=5432

    # Server Configuration
    HOST=localhost
    PORT=5000

    # JWT Token Configuration
    ACCESS_TOKEN_KEY=kunci_rahasia_access_token_anda
    REFRESH_TOKEN_KEY=kunci_rahasia_refresh_token_anda
    ACCESS_TOKEN_AGE=1800 
    ```
    *Catatan: `ACCESS_TOKEN_AGE` dalam detik (contoh: 1800 = 30 menit).*
5.  **Jalankan migrasi database:**
    ```bash
    npm run migrate up
    ```

## 🚀 Menjalankan Aplikasi

-   **Menjalankan server (mode pengembangan):**
    ```bash
    npm run start:dev
    ```
    Server akan berjalan di alamat yang dikonfigurasi dalam file `.env` (default: `http://localhost:5000`).
-   **Menjalankan server (mode produksi):**
    ```bash
    npm start
    ```
-   **Menjalankan linter:**
    ```bash
    npm run lint
    ```

## 🛰️ Dokumentasi API

API ini menyediakan beberapa endpoint utama untuk pengelolaan sumber daya:

-   `/albums` : Untuk mengelola data album.
-   `/songs` : Untuk mengelola data lagu di dalam album.
-   `/users` : Untuk registrasi pengguna.
-   `/authentications` : Untuk login/logout pengguna dan memperbarui token akses.
-   `/playlists` : Untuk membuat dan mengelola playlist lagu.
-   `/collaborations` : Untuk mengelola kolaborasi pada playlist.

Untuk dokumentasi API yang lebih detail, pengujian endpoint, dan eksplorasi fungsionalitas, sangat disarankan untuk menggunakan koleksi Postman yang telah disediakan.

Anda dapat menemukan file koleksi Postman di:
`OpenMusicAPIV2PostmanTest/Open Music API V2 Test.postman_collection.json`

Impor file ini ke dalam aplikasi Postman Anda untuk memulai.
