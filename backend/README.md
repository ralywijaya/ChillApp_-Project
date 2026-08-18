# Backend API App Chill

README ini menjelaskan cara menjalankan project backend, struktur folder, alur penggunaan, dan daftar endpoint API.

## 1. Gambaran Project

Project ini adalah backend REST API menggunakan:

- Node.js
- Express.js
- Prisma ORM
- MariaDB/MySQL
- JWT untuk autentikasi
- Bcrypt untuk hash password
- Nodemailer untuk pengiriman email
- Multer untuk upload foto profil

Fitur utama:

- CRUD user
- Login user dan pembuatan token JWT
- CRUD movie
- Filter dan search movie
- Upload foto profil user
- Lupa password
- Ganti password

## 2. Struktur Folder

```text
backend/
|-- prisma/
|   `-- schema.prisma
|-- src/
|   |-- config/
|   |   |-- database.config.js
|   |   |-- knexfile.js
|   |   |-- multer.js
|   |   |-- nodemiler.config.js
|   |   `-- prisma.config.js
|   |-- controllers/
|   |   |-- GantiPassword.controller.js
|   |   |-- LoginAuth.controoler.js
|   |   |-- LupaPassword.controller.js
|   |   |-- movie.controller.js
|   |   `-- user.controller.js
|   |-- middlewares/
|   |   `-- AunthLogin.middleware.js
|   |-- models/
|   |   |-- database.model.js
|   |   `-- movie.model.js
|   |-- routes/
|   |   |-- GantiPassword.route..js
|   |   |-- LoginAuth.route.js
|   |   |-- LupaPassword.route.js
|   |   |-- movie.route.js
|   |   `-- user.route.js
|   |-- uploads/
|   `-- utils/
|       |-- sendEmail.js
|       `-- server.js
|-- package.json
|-- package-lock.json
`-- README.md
```

Penjelasan folder:

- `prisma/`: menyimpan schema database Prisma.
- `src/config/`: konfigurasi database, Prisma, email, dan upload file.
- `src/controllers/`: berisi logic utama setiap fitur.
- `src/middlewares/`: berisi middleware autentikasi JWT.
- `src/models/`: berisi model/helper database lama.
- `src/routes/`: berisi endpoint API yang diarahkan ke controller.
- `src/uploads/`: tempat menyimpan file foto profil yang di-upload.
- `src/utils/server.js`: file utama untuk menjalankan server Express.

## 3. Prasyarat

Pastikan sudah terinstall:

- Node.js
- npm
- MariaDB atau MySQL
- Postman atau Insomnia untuk mencoba API

## 4. Instalasi Project

Masuk ke folder backend:

```bash
cd backend
```

Install semua dependency:

```bash
npm install
```

## 5. Konfigurasi Environment

Buat file `.env` di dalam folder `backend`.

Contoh isi `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_database
DB_NAME=appchill

JWT_SECRET=secret_key_bebas

ETHEREAL_HOST=smtp.ethereal.email
ETHEREAL_PORT=587
ETHEREAL_USER=email_ethereal
ETHEREAL_PASS=password_ethereal
```

Keterangan:

- `DB_HOST`: host database.
- `DB_USER`: username database.
- `DB_PASSWORD`: password database.
- `DB_NAME`: nama database yang digunakan.
- `JWT_SECRET`: secret key untuk membuat dan memverifikasi token JWT.
- `ETHEREAL_HOST`, `ETHEREAL_PORT`, `ETHEREAL_USER`, `ETHEREAL_PASS`: konfigurasi SMTP untuk fitur kirim email.

## 6. Membuat Database

Buka MariaDB/MySQL, lalu jalankan:

```sql
CREATE DATABASE appchill;
USE appchill;
```

Project ini memakai schema Prisma di file `prisma/schema.prisma`. Jika database sudah dibuat, generate Prisma Client:

```bash
npx prisma generate
```

Jika ingin membuat struktur tabel dari schema Prisma ke database:

```bash
npx prisma db push
```

## 7. Menjalankan Server

Jalankan server development:

```bash
npm run dev
```

Jika berhasil, server berjalan di:

```text
http://localhost:3000
```

File yang dijalankan oleh script ini adalah:

```text
src/utils/server.js
```

## 8. Urutan Penggunaan API

Urutan penggunaan yang disarankan:

1. Jalankan database MariaDB/MySQL.
2. Pastikan file `.env` sudah benar.
3. Jalankan `npm install`.
4. Jalankan `npx prisma generate`.
5. Jalankan `npx prisma db push` jika tabel belum ada.
6. Jalankan server dengan `npm run dev`.
7. Buat user melalui endpoint `POST /user`.
8. Login melalui endpoint `POST /aunth/login`.
9. Salin token dari hasil login.
10. Gunakan token tersebut untuk mengakses endpoint movie.

Format header token:

```text
Authorization: Bearer token_jwt
```

## 9. Endpoint User

Base URL:

```text
http://localhost:3000/user
```

### Ambil Semua User

```http
GET /user
```

### Tambah User

```http
POST /user
```

Body JSON:

```json
{
  "user_nama": "Raly",
  "user_email": "raly@example.com",
  "user_password": "123456"
}
```

Password akan di-hash menggunakan bcrypt sebelum disimpan ke database.

### Ubah User

```http
PATCH /user/:id
```

Contoh:

```text
PATCH http://localhost:3000/user/1
```

Body JSON:

```json
{
  "user_nama": "Raly Wijaya",
  "user_email": "ralywijaya@example.com",
  "user_password": "password_baru"
}
```

### Hapus User

```http
DELETE /user/:id
```

Contoh:

```text
DELETE http://localhost:3000/user/1
```

### Upload Foto Profil

```http
PATCH /user/upload/:id
```

Gunakan `form-data`:

```text
key: foto_profil
type: file
```

Contoh:

```text
PATCH http://localhost:3000/user/upload/1
```

## 10. Endpoint Login

Base URL:

```text
http://localhost:3000/aunth/login
```

### Login User

```http
POST /aunth/login
```

Body JSON menggunakan email:

```json
{
  "user_email": "raly@example.com",
  "user_password": "123456"
}
```

Atau menggunakan nama user:

```json
{
  "user_nama": "Raly",
  "user_password": "123456"
}
```

Response berhasil akan mengembalikan token JWT:

```json
{
  "message": "login berhasil",
  "token": "token_jwt"
}
```

## 11. Endpoint Movie

Endpoint movie memakai middleware login, jadi harus menggunakan header:

```text
Authorization: Bearer token_jwt
```

Base URL:

```text
http://localhost:3000/movie
```

### Ambil Semua Movie

```http
GET /movie
```

### Ambil Movie Berdasarkan ID

```http
GET /movie/:id
```

Contoh:

```text
GET http://localhost:3000/movie/1
```

### Tambah Movie

```http
POST /movie
```

Body JSON:

```json
{
  "nama_movie": "Avengers: Endgame",
  "kategori_umur": "13+",
  "deskripsi_movie": "Para Avengers berusaha mengembalikan keseimbangan dunia."
}
```

### Ubah Movie

```http
PATCH /movie/:id
```

Body JSON:

```json
{
  "nama_movie": "Avengers: Endgame",
  "kategori_umur": "13+",
  "deskripsi_movie": "Deskripsi movie diperbarui."
}
```

### Hapus Movie

```http
DELETE /movie/:id
```

### Search Movie Berdasarkan Judul

```http
GET /movie/search?judul=Avengers
```

### Filter Movie Berdasarkan Genre

```http
GET /movie/filter?genre=Action
```

## 12. Endpoint Lupa Password

Base URL:

```text
http://localhost:3000/lupa/password
```

### Minta Token Ganti Password

```http
POST /lupa/password
```

Body JSON:

```json
{
  "user_email": "raly@example.com"
}
```

Jika email ditemukan, sistem akan mengirim email berisi token untuk ganti password.

## 13. Endpoint Ganti Password

Base URL:

```text
http://localhost:3000/ganti/password
```

### Ganti Password

```http
POST /ganti/password
```

Body JSON:

```json
{
  "token": "token_dari_email",
  "user_password": "password_baru"
}
```

Password baru akan di-hash sebelum disimpan ke database.

## 14. Contoh Alur Testing di Postman atau Insomnia

1. Buat user baru dengan `POST /user`.
2. Login dengan `POST /aunth/login`.
3. Ambil token dari response login.
4. Buka tab Headers.
5. Tambahkan header `Authorization` dengan value `Bearer token_jwt`.
6. Coba akses `GET /movie`.
7. Jika ingin tambah movie, gunakan `POST /movie`.
8. Jika ingin reset password, gunakan `POST /lupa/password`, lalu lanjutkan ke `POST /ganti/password`.

## 15. Catatan Penting

- Port server saat ini diset langsung ke `3000` di `src/utils/server.js`.
- Endpoint login menggunakan path `/aunth/login` sesuai kode yang ada.
- File route ganti password bernama `GantiPassword.route..js` sesuai struktur project saat ini.
- Endpoint movie wajib memakai token JWT.
- Untuk upload foto profil, gunakan `multipart/form-data`, bukan JSON.
