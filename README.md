# Chill Movie Web

Website streaming film dan serial berbasis React yang menyediakan halaman beranda, daftar tontonan, detail film/serial, genre, autentikasi pengguna, profil, langganan, FAQ, kebijakan privasi, syarat & ketentuan, serta kontak.

> Catatan keamanan: dokumentasi ini tidak menampilkan nilai `.env`, token API, credential database, password email, atau data pengguna.

## Teknologi

- React 19
- Vite
- React Router DOM
- Redux Toolkit dan React Redux
- Axios
- Google OAuth
- Express.js
- Prisma
- MySQL/MariaDB
- JWT
- Multer
- Nodemailer

## Fitur Utama

- Halaman beranda untuk menampilkan konten film dan serial.
- Halaman detail film dan serial.
- Filter berdasarkan genre film dan serial.
- Daftar Saya untuk menyimpan tontonan pilihan pengguna.
- Register, masuk, masuk dengan Google, lupa password, dan ganti password.
- Profil pengguna dan status paket langganan.
- Halaman paket berlangganan.
- Halaman informasi: FAQ, kontak, privasi, serta syarat dan ketentuan.
- Backend API untuk autentikasi, data pengguna, film, serial, daftar saya, upload, dan integrasi TMDB.

## Struktur Folder

```text
.
|-- backend/              # Backend Express, Prisma, route, controller, config
|-- public/               # Asset publik
|-- src/                  # Frontend React
|   |-- Beranda/          # Halaman utama setelah masuk ke web
|   |-- DaftarSaya/       # Daftar tontonan pengguna
|   |-- Genre/            # Halaman genre film dan serial
|   |-- HomePage/         # Layout utama, navbar, footer
|   |-- Masuk/            # Halaman login
|   |-- PageFilm/         # Detail film
|   |-- PageSerial/       # Detail serial
|   |-- ProfilSaya/       # Profil pengguna
|   |-- Series/           # Halaman serial
|   |-- register/         # Halaman register
|   |-- services/         # Konfigurasi client API frontend
|   `-- utils/            # Router aplikasi
|-- package.json          # Dependency dan script frontend
`-- vite.config.js        # Konfigurasi Vite
```

## Persiapan Environment

Buat file `.env` di root project untuk frontend. Isi dengan nilai milik sendiri:

```env
VITE_API_BASE_URL=
VITE_API_CLOUDINARY=
VITE_API_CLOUD_NAME=
VITE_API_PRESET_NAME=
VITE_GOOGLE_CLIENT_ID=
```

Buat file `.env` di folder `backend/` untuk backend. Isi dengan nilai milik sendiri:

```env
DATABASE_URL=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
GOOGLE_CLIENT_ID=
TMDB_TOKEN=
GMAIL_USER=
GMAIL_APP_PASSWORD=
```

Jangan commit file `.env` ke repository.

## Cara Menjalankan Frontend

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Cara Menjalankan Backend

Masuk ke folder backend:

```bash
cd backend
```

Install dependency:

```bash
npm install
```

Jalankan backend:

```bash
npm run dev
```

Secara default backend berjalan pada port `3000`.

## Database

Project menggunakan Prisma dengan database MySQL/MariaDB. Model utama yang digunakan meliputi:

- `users`
- `movie`
- `series`
- `genre`
- `daftar_saya`
- `paket`
- `orders`
- `pembayaran`

Pastikan konfigurasi database di `.env` backend sudah sesuai sebelum menjalankan backend.

## Endpoint Backend

Beberapa route utama yang tersedia:

- `/user`
- `/movie`
- `/movieTMDB`
- `/serialTMDB`
- `/daftarsaya`
- `/aunth/login`
- `/login/google`
- `/lupa/password`
- `/ganti/password`

Endpoint yang membutuhkan autentikasi menggunakan token JWT melalui header `Authorization`.

## Catatan Keamanan

- Simpan credential hanya di file `.env`.
- Jangan membagikan token TMDB, JWT secret, konfigurasi Google, password database, atau app password email.
- Jangan commit folder upload yang berisi file pribadi pengguna apabila datanya sensitif.
- Hindari menampilkan token atau data pengguna di console log.
- Gunakan environment berbeda untuk development dan production.

## Author


 Raly Wijaya
