# Technical Test Cyber Security MBC Laboratory - Landing Page Project
Website atau Landing Page ini dibuat untuk memenuhi tugas technical test MBC Lab divisi Cyber Security. Website ini dibuat untuk memenuhi tugas technical test Lab MBC. Project ini terdiri dari frontend berbasis HTML & CSS, serta backend sederhana menggunakan Node.js untuk mengelola form kontak. Project ini telah dideploy secara online menggunakan Vercel.

## Live Website : 
https://technicaltest-cs-mbc-angeluna.vercel.app/

## Struktur Proyek 
```bash
Technical-Test-MBC/
├── frontend/
│   ├── index.html          # Halaman Home
│   ├── divisi.html         # Halaman Divisi
│   ├── contact.html        # Halaman Kontak
|   ├── develop.html        # Halaman Developer
│   ├── css/
│   │   └── style.css       # Semua styling digabung di satu file
│   └── assets/
│       └── images/         # Gambar
├── backend/
│   ├── server.js           
│   ├── contact.js          
│   └── package.json        
├── docs/
│   ├── architecture.pdf    # Diagram arsitektur frontend-backend
|   ├── alurform.pdf / alurform.md #Penjelasan alur kerja 
│   └── screenshots/
│       ├── home.png
│       ├── divisi.png
|       ├── kontak.png
│       └── developer.png
└── README.md
```

## ⚙️ Instruksi Instalasi Lokal

Berikut langkah-langkah untuk menjalankan project ini di komputer secara lokal:

### 1. Clone Repository
Clone repository ke komputer anda:
```bash
git clone https://github.com/anglnarmdhn/Technicaltest-CS-MBC-Angeluna.git
cd Technicaltest-CS-MBC-Angeluna
```
### 2. Jalankan Backend
Masuk ke folder Backend, install dependesi, lalu jalankan server:
```bash
cd backend
npm install
node server .js
```
*pastikan Node.js sudah terinstall di perangkat anda : https://nodejs.org

### 3. Buka Frontend
Buka file HTML dari folder frontend/ langsung lewat browser:
- index.html untuk halaman utama (home)
- divisi.html untuk halaman divisi
- contact.html untuk halaman kontak
- develop.html untuk halaman developer

## 🚀 Deployment
### 🔸 Frontend
1. Inisialisasi Git di Terminal VS Code
```bash
git init
git add .
git commit -m "initial commit"
```
- git init : mengubah folder menjadi repo Git
- git add . : memasukkan semua file ke staging
- git commit : menyimpan versi awal project
  
2. Buat Repository di Github
- Masuk ke Github
- Klik New Repository
- Isi nama dan deskripsi (Technicaltest-CS-MBC-Angeluna)
- Klik Create Repository

3. Hubungkan VS Code ke Github
- Copy URL repo GitHub, lalu :
```bash
git remote add origin https://github.com/anglnarmdhn/Technicaltest-CS-MBC-Angeluna.git
git branch -M main
git push -u origin main
```
-Project akan muncul di Github

4. Deployment melalui Vercel (Frontend)
- Buka: https://vercel.com
- Login pakai GitHub
- Klik New Project
- Pilih repo anda → Technicaltest-CS-MBC-Angeluna
- Klik Deploy, lalu link akan segera dibuat

🔗 Live: https://technicaltest-cs-mbc-angeluna.vercel.app/

### 🔸 Backend
Backend masih dijalankan secara lokal. Dan terdapat beberapa kendala di dalam program backend sehingga tidak dapat berjalan secara maksimal ketika diaplikasikan untuk form kontak.

## 🔐 Konfigurasi SSL & Backend
- Frontend sudah otomatis menggunakan protokol HTTPS dari Vercel, sehingga aman saat diakses publik.
- Backend saat ini masih dijalankan secara lokal melalui server.js, dan belum dihosting secara online.
- Belum menggunakan file .env, namun struktur project sudah mendukung jika dibutuhkan di masa depan.

## 📊 Diagram Arsitektur Website 
![image](https://github.com/user-attachments/assets/99af5f24-6f45-48d9-b569-fc3302cb36ae)

## 🔁 Alur Kerja Form Kontak
Form kontak pada halaman contact.html dirancang untuk mengirimkan data (nama, email, pesan) ke backend menggunakan metode POST. Secara alur ideal, form ini akan:
1. User mengisi data di form kontak.
2. Saat tombol "Sent" ditekan, JavaScript akan mengambil input lalu mengirim data ke endpoint backend /contact melalui fetch().
3. Backend (Node.js) yang terdiri dari server.js dan contact.js akan memproses data tersebut.
4. Jika berhasil, backend akan mengirim respon JSON ke frontend.
5. Frontend akan menampilkan notifikasi berhasil atau gagal.

⚠️ Catatan :
Namun, saat ini *form kontak belum dapat berfungsi secara penuh*, karena:
- Backend masih berjalan secara lokal dan belum dideploy ke server publik.
- Form tidak dapat melakukan request ke localhost dari halaman yang dideploy di Vercel (karena perbedaan origin/domain).
- Belum ada mekanisme autentikasi atau email handler (misal: nodemailer) yang aktif.

Sehingga, *pengguna tetap dapat mengisi form, tetapi **pengiriman pesan tidak benar-benar terjadi*. Saya menyadari adanya keterbatasan dari sistem Backend ini sehingga tidak dapat diaplikasikan secara ideal. Namun, saya yakin jika lebih dimaksimalkan dengan pemahaman yang cukup pasti akan berjalan dengan maksimal.

## 🖥️ Tampilan Halaman Website 
1. Halaman Utama
![image](https://github.com/user-attachments/assets/4488e94c-4da3-4536-a079-2dfa83b13f1b)
![image](https://github.com/user-attachments/assets/ace28dcd-d109-432d-a227-3aaf5ab38f7f)

2. Halaman Divisi
![image](https://github.com/user-attachments/assets/39233f97-25ed-4463-801e-b2978c13c305)

3. Halaman Kontak
![image](https://github.com/user-attachments/assets/5666ec97-fa06-408c-82ae-1f023797dcf6)

4. Halaman Developer
![image](https://github.com/user-attachments/assets/b9a916e5-21a6-4671-ae39-1149a381a8af)

## 📝 Penutup

Project ini disusun oleh Angeluna Ramadhani sebagai bagian dari technical test rekrutasi Lab MBC. Dokumentasi, struktur folder, serta alur kerja aplikasi telah diupayakan sebaik mungkin agar mudah dipahami. Meski masih terdapat keterbatasan sistem, saya yakin dengan pembekalan pengetahuan yang lebih maksimal proyek ini akan siap dikembangkan ke tahap selanjutnya.
Terima kasih atas kesempatan dan waktunya. Semoga hasil project ini bisa memberi gambaran yang jelas tentang potensi dan komitmen saya.

