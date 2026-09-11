# PANDUAN PENGGUNAAN & PENGENALAN FITUR
## MINING SECURITY MANAGEMENT SYSTEM — SECURITY COMMAND CENTER
### Klien: **PT ADARO INDONESIA**
### Tagline: *People • Assets • Access • Continuity*

---

## 🎯 1. Ringkasan Eksekutif Sistem

Aplikasi **Mining Security Management System** adalah platform komando keamanan tambang dan jalur hauling batubara yang menghubungkan:
1. **Master Security Command Center** (Layar TV Wall / Desktop di Pusat Pengendali Keamanan).
2. **Mobile Field Input Portal** (Smartphone Petugas Patroli, Gate, dan Pos Pantau di Lapangan).

Sistem ini beroperasi secara **100% Security Operations** (pengamanan fisik, aset, portal, insiden, dan ancaman demo/blokade, tanpa dicampur dengan tugas K3/HSE) dan berjalan secara **real-time data-driven**.

---

## 🗺️ 2. Fitur Peta Satelit Interaktif (GIS Security Map)

Peta satelit mencakup seluruh koridor hauling sepanjang 73 KM dari tambang hingga pelabuhan:

### 7 Titik Koordinat Master Awal:
1. **Gate Simpang Wara (G001)**: `Lat -2.24763889, Lng 115.45025833`
2. **Gate POP Paringin (G002)**: `Lat -2.29700833, Lng 115.47549167`
3. **Pos Padangin KM 32 (P001)**: `Lat -2.23368056, Lng 115.34693889`
4. **Pos Tabalong KM 48 (P002)**: `Lat -2.22487500, Lng 115.32436111`
5. **Pos Pasintik Jembatan (P003)**: `Lat -2.22173889, Lng 115.31308333`
6. **Pos Simp Bagok KM 65 (P004)**: `Lat -2.21022778, Lng 115.27845833`
7. **Gate Pasar Panas Port (G003)**: `Lat -2.20961389, Lng 115.25569722`

### Fitur Peta:
- **Layer Switcher**: Satelit Resolusi Tinggi, Dark Roadmap, dan Terrain.
- **Polyline Rute Hauling**: Status warna dinamis (`OPEN` Hijau, `ALERT` Kuning, `BLOCKED` Merah, `ALTERNATIVE` Biru).
- **Draggable Coordinate Update**: Geser pin lokasi di peta untuk memicu dialog update koordinat otomatis.
- **Pick Location from Map**: Klik langsung pada peta saat menambah pos/gate/aset baru.

---

## 🛡️ 3. Pengenalan Modul-Modul Utama

### Modul 1: Access Control & Gate Security (`/access`)
- **Pencatatan Keluar/Masuk (IN/OUT)** unit truk batubara, tangki solar BBM, vendor, dan logistik.
- **Verifikasi Surat Jalan**: Nomor DO, SPB, SIMPER, dan tujuan.
- **Status Transaksi**: `ALLOWED` (Diizinkan), `DENIED` (Ditolak), `VERIFICATION` (Pemeriksaan).

### Modul 2: Patrol Monitoring Jalur Hauling (`/patrols`)
- **Target Kepatuhan Patroli Shift**: Perhitungan kepatuhan otomatis (*Compliance Gauge*).
- **Auto-GPS Capture**: Verifikasi koordinat saat personil submit checkpoint.
- **Klasifikasi Temuan Keamanan**: Nihil Temuan, Akses Tanpa Izin, Indikasi Pencurian, Vandalisme, Keributan.

### Modul 3: Pengamanan Aset Terjaga (Guarded Vital Assets) (`/assets`)
- **Aset Vital yang Dijaga**: Genset KM 18, Tangki BBM Simpang Wara, Radio Tower KM 24, Crusher ROM, Gudang Handak, Pompa Sump Pit Barat.
- **Status Kondisi Fisik**: `SECURE_GOOD` (Aman), `SEAL_BROKEN` (Segel Rusak), `THEFT_INDICATION` (Dugaan Curi), `VANDALISM`, `PERIMETER_BREACH` (Pagar Bobol), `CRITICAL`.
- **Checklist 4 Titik**: Gembok/Segel, Pagar Kawat, Lampu Sorot, Sterilisasi Area Sekitar.
- **Dokumentasi Foto**: Jepret foto kondisi fisik saat patroli.

### Modul 4: Incident Management & Investigasi (`/incidents`)
- **Klasifikasi Keparahan**: Critical, Alert, Warning, Normal.
- **Alur Status Kasus**: `OPEN` ➔ `INVESTIGATING` ➔ `ACTION_TAKEN` ➔ `RESOLVED` ➔ `CLOSED`.
- **Bukti Digital**: Kronologi saksi, foto bukti kejadian, dan Berita Acara Pemeriksaan (BAP).

### Modul 5: External Threat Intelligence & SOP Auto-Alert (`/threats`)
- **Deteksi Dini**: Rencana aksi demo warga, potensi blokade hauling, kumpulan massa pinggir jalur.
- **Rantai Eskalasi Otomatis**:
  - `Level WARNING`: Alert ke Security Supervisor & Intel Officer.
  - `Level ALERT`: Alert ke Security Supervisor + Security Manager + Patroli Terdekat.
  - `Level CRITICAL`: Alert darurat ke seluruh jajaran Direksi/Manajemen Eksekutif.

### Modul 6: Master Data & Polyline Editor (`/master`)
- Manajemen Master Lokasi, Editor Titik Polyline Jalur Hauling, User Roster.
- **Excel Import 5 Tahap**: Upload ➔ Preview ➔ Validasi ➔ Error Check ➔ Konfirmasi.

### Modul 7: Reports & Analytics (`/reports`)
- Generator Laporan Resmi PDF berlogo Adaro dengan tanda tangan digital & export Excel XLSX.

---

## 📱 4. Mobile Field Portal Khusus Petugas Lapangan

- **URL Akses**: `http://localhost:5173/#/mobile`
- **Keunggulan**:
  - Petugas lapangan **tidak melihat dashboard master**, mencegah kesalahan klik atau manipulasi data.
  - **Filter Peran Tugas (Duty Mode)** otomatis:
    - `/#/mobile?duty=patrol` : Khusus Patroli & Cek Aset Terjaga.
    - `/#/mobile?duty=gate` : Khusus Gate In/Out & Pemeriksaan Muatan.
    - `/#/mobile?duty=incident` : Khusus Tim Reaksi Cepat Insiden.
    - `/#/mobile?duty=threat` : Khusus Intelijen Pemantau Demo.
  - **Generator QR Code**: Danru cukup klik tombol *"📱 Link Petugas Lapangan"* di header Command Center untuk membagikan link via QR Code.

---

## 👥 5. Matriks Peran Hak Akses (9 Role RBAC)

1. **SECURITY MANAGER**: Pemilik dashboard utama, deklarasi status siaga, ekspor laporan manajemen.
2. **SECURITY SUPERVISOR**: Pengendali operasional harian, verifikasi temuan patroli, penugasan investigasi.
3. **ADMIN**: Konfigurasi sistem, API peta, user roster, dan audit log.
4. **GATE SECURITY**: Transaksi portal keluar masuk unit dan validasi surat jalan.
5. **PATROL OFFICER**: Input checkpoint patroli dan inspeksi fisik aset vital.
6. **INCIDENT OFFICER**: Pencatatan kasus gangguan keamanan dan investigasi lapangan.
7. **EXTERNAL THREAT OFFICER**: Pencatatan data intelijen sosial dan demo warga.
8. **ASSET SECURITY OFFICER**: Pemeriksaan segel trailer batubara dan tangki BBM.
9. **MANAGEMENT**: Akses baca eksekutif (Executive Read-Only).

---

## 📋 6. Panduan SOP Operasional Harian

### A. Untuk Operator / Danru di Command Center:
1. Nyalakan monitor Command Center dan buka `http://localhost:5173/`.
2. Amati **Threat Level Card** dan pastikan status kondisi aman.
3. Bagikan QR Code ke regu jaga masuk dengan mengklik tombol **"📱 Link Petugas Lapangan"**.
4. Pantau pergerakan patroli dan transaksi gate secara real-time di layar.
5. Bila ada notifikasi merah, segera hubungi radio pos bersangkutan untuk tindakan pengamanan.
6. Di akhir shift, ekspor PDF Laporan Shift melalui modul **Reports & Analytics**.

### B. Untuk Petugas di Pos & Lapangan:
1. Scan QR Code dari Danru menggunakan smartphone.
2. Pastikan GPS aktif dan isi Nama/NRP Anda di baris atas.
3. Lakukan penginputan sesuai tugas (Gate IN/OUT saat kendaraan melintas, atau Cek Aset saat patroli fisik tiba di lokasi).
4. Ambil foto bukti menggunakan kamera HP dan klik tombol **Kirim / Submit**.

---

## 💻 7. Akses File & Presentasi Interaktif

- **Presentasi Slide Interaktif (Bisa Dibuka di Browser)**:
  👉 `http://localhost:5173/presentasi.html`
  *(atau buka file `PRESENTASI_PENGGUNAAN_SISTEM.html` langsung di folder proyek).*
- **Aplikasi Master Command Center**:
  👉 `http://localhost:5173/`
- **Mobile Field Inputter**:
  👉 `http://localhost:5173/#/mobile`
