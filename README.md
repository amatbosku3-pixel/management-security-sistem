# Mining Security Management System — Security Command Center
### *People • Assets • Access • Continuity*
**Client Branding: PT Adaro Indonesia**

![Mining Security Command Center](public/adaro-logo.png)

Platform manajemen komando dan pengamanan terintegrasi untuk operasi pertambangan dan koridor hauling batubara (*73 KM Simpang Wara - Port Pasar Panas*).

---

## 🌟 Fitur Utama

- **🖥️ Master Security Command Center**:
  - 7 KPI Real-Time (Kendaraan In/Out, Tamu, Kepatuhan Patroli, Insiden Kritis, Level Ancaman, Aset Terjaga).
  - Peta Satelit Interaktif Hauling (7 Titik Koordinat Master, Polyline Status Rute, Pin Satelit, Draggable Marker Coordinates, Pick Location).
  - Donut Chart Insiden, Tren Keamanan Garis Waktu, dan Gauge Kepatuhan Patroli.
  - Threat Level Glowing Card & Live Notification Drawer.

- **📱 Mobile Field Officer Portal (`/#/mobile`)**:
  - Antarmuka smartphone terisolasi untuk personil lapangan (tanpa akses ke Dashboard Master).
  - Filter Peran Tugas Dinamis (*Duty Modes*: Patroli Aset, Gate In/Out, Tim Respon Insiden, Intelijen Demo).
  - Auto-Detect GPS Koordinat & Jepret Foto Dokumentasi Lapangan.
  - Generator QR Code & Link Sharing instan dari Command Center.

- **🛡️ Pengamanan Aset Terjaga (Guarded Vital Assets)**:
  - Perlindungan objek vital: Genset KM 18, Tangki BBM Simpang Wara, Radio Tower KM 24, Crusher ROM, Gudang Handak, Pompa Sump.
  - Status Kondisi Fisik (`SECURE_GOOD`, `SEAL_BROKEN`, `THEFT_INDICATION`, `VANDALISM`, `PERIMETER_BREACH`, `LIGHTING_OFF`, `CRITICAL`).
  - Checklist pengaman 4 titik & galeri foto inspeksi.

- **🚗 Access Control & Gate Management**:
  - Pencatatan unit keluar/masuk, verifikasi nomor DO, SIMPER, vendor, dan pemeriksaan muatan batubara/solar.

- **⚠️ Incident Management & Investigasi**:
  - Siklus penanganan kasus `OPEN` ➔ `INVESTIGATING` ➔ `ACTION_TAKEN` ➔ `RESOLVED` ➔ `CLOSED`.

- **📢 External Threat Intelligence & Auto-Alert SOP**:
  - Deteksi dini rencana demo warga / blokade hauling dengan notifikasi eskalasi otomatis.

- **👥 Matriks Hak Akses (9 Role RBAC)**:
  - Security Manager, Security Supervisor, Admin, Gate Security, Patrol Officer, Incident Officer, External Threat Officer, Asset Security Officer, Management.

- **📄 Pelaporan Resmi & Export Dokumen**:
  - Generator PDF resmi berlogo Adaro dengan tanda tangan digital & Export Excel XLSX.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

### 1. Clone Repositori
```bash
git clone https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git
cd "Mining security Command center"
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Jalankan Mode Development
```bash
npm run dev
```
Buka browser pada alamat:
- **Command Center Master**: `http://localhost:5173/`
- **Mobile Field Inputter**: `http://localhost:5173/#/mobile`
- **Slide Presentasi Interaktif**: `http://localhost:5173/presentasi.html`

### 4. Build untuk Production
```bash
npm run build
```

---

## 📁 Struktur Direktori Proyek

```
.
├── public/                     # Static assets (Logo Adaro, presentasi.html)
├── src/
│   ├── assets/                 # Image & vector assets
│   ├── components/
│   │   ├── layout/             # Header, Sidebar, NotificationDrawer
│   │   ├── map/                # SecurityMap, MapIcons (Leaflet/GIS Engine)
│   │   └── mobile/             # MobileQrShareModal
│   ├── context/                # AuthContext & RBAC User State
│   ├── services/               # Reactive Database Service & Initial Seed Data
│   ├── types/                  # TypeScript Types & Interfaces
│   └── views/                  # Dashboard, Access, Patrol, Incident, Threat,
│       │                       # AssetSecurity, MasterData, Reports, Settings
│       └── mobile/             # MobileFieldPortal (Khusus Smartphone)
├── PANDUAN_PRESENTASI_FITUR.md # Panduan dokumentasi lengkap
├── PRESENTASI_PENGGUNAAN_SISTEM.html # Slide presentasi mandiri
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── tailwind.config.js          # Tailwind styling configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🔒 Lisensi & Hak Cipta
PT ADARO INDONESIA • Mining Security Division • 2026
