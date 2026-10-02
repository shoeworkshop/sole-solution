# Kenapa Kami: Revisi (Foto Berpenanda)

Pengganti total section "Kenapa Kami" yang berbentuk tabel perbandingan.
Konsep: **satu foto lebar area B2B dengan 4 titik interaktif.** Pengunjung melihat sendiri jalur kerjanya, bukan membaca perbandingan.

## 0. Perbaikan wajib dari versi yang sedang tayang

| Masalah di versi sekarang | Perbaikan |
|---|---|
| Teks penanda `[VERIFIKASI: foto]`, `[VERIFIKASI]`, `[JIKA LIVE]` **tampil di halaman** | Penanda hanya boleh ada di dokumen ini dan di field `notes` pada data. Jangan pernah dirender. Lihat bagian 6 (guard). |
| Tabel 6 baris x 3 kolom terlalu padat | Dihapus. Diganti foto berpenanda. |
| Kolom "Reparasi umum" dan "Tim internal brand" berisi klaim tentang pihak lain | Dihapus bersama tabel. |
| Baris "Pemantauan status / Portal tracking" | Dihapus. Jika portal sudah live, sebutkan **hanya** di Alur 7 Langkah, langkah 3. |
| "Shoe Workshop, Bandung, sejak 2017." terselip di dalam tabel | Pindah ke caption di bawah foto (bagian 1). |

Aturan: **setiap fakta hanya punya satu rumah.** Section ini hanya bicara tentang *tempat*. Proses ada di Alur 7 Langkah, waktu pengerjaan ada di hero dan FAQ.

---

## 1. Copy

- **Eyebrow:** Kenapa Sole Solution
- **Headline:** Lihat sendiri jalur kerjanya
- **Sub-headline:** Klik titik pada foto untuk melihat tiap area di workshop kami di Bandung.
- **Caption di bawah foto:** Shoe Workshop, Bandung, sejak 2017.
- **Tombol (di bawah section):** Konsultasi via WhatsApp

### Teks titik (maksimal 14 kata per titik)

| # | Label | Teks |
|---|---|---|
| 1 | Rak B2B | Sepatu brand disimpan di rak sendiri, tidak bercampur dengan antrean ritel. |
| 2 | Ruang Pengerjaan B2B | Reglue dan jahit sol dikerjakan di ruang khusus B2B. |
| 3 | Area QC | Diperiksa dua kali: saat masuk dan sebelum dikirim kembali. |
| 4 | Rak Hasil | Sepatu yang selesai menunggu di rak hasil B2B sebelum dikirim. |

Urutan titik mengikuti alur nyata (masuk, dikerjakan, diperiksa, siap kirim).

---

## 2. Perilaku dan tampilan

### Desktop

- Foto lebar penuh, rasio 16:9, sudut membulat kecil.
- Saat section masuk layar, titik muncul berurutan (jeda 120 ms), lalu berdenyut halus satu kali.
- Klik atau hover pada titik membuka **kartu kecil** di samping titik (label tebal + satu kalimat). Hanya satu kartu terbuka sekali waktu.
- **Titik 1 terbuka sejak awal** supaya foto tidak terlihat kosong.
- Klik di luar kartu atau tekan Esc untuk menutup.

### Mobile

- Foto dengan titik bernomor. Ketuk titik: kartu keterangan **tampil di bawah foto** (bukan melayang di atas foto).
- Jika rasio foto di mobile dipotong berbeda (misal 4:3), pakai koordinat terpisah `xm`, `ym` agar titik tetap tepat sasaran.
- Area ketuk minimal 44 x 44 px.

### Gerak (maksimal dua pola)

1. Titik muncul berurutan dan berdenyut sekali.
2. Kartu masuk dengan fade + geser 8 px, durasi 250 ms.

Hormati `prefers-reduced-motion`: tanpa denyut dan tanpa urutan, titik langsung tampil.

### Aksesibilitas

- Titik adalah `<button>` dengan `aria-label` seperti "Rak B2B, titik 1 dari 4" dan `aria-expanded`.
- Urutan Tab 1 sampai 4. Kartu memakai `aria-live="polite"`.
- Titik: isi hijau, cincin putih, kontras jelas di atas foto.

---

## 3. Model data (`content.ts`)

```ts
export const jalurB2B = {
  photo: "/img/jalur-b2b-wide.webp",       // 2400 x 1350, maks 300 KB
  photoMobile: "/img/jalur-b2b-43.webp",   // opsional, 4:3
  alt: "Area pengerjaan B2B Sole Solution di workshop Bandung",
  caption: "Shoe Workshop, Bandung, sejak 2017.",
  dummy: true,                             // true = tampilkan frame abu-abu + badge DUMMY
  spots: [
    { id: "rak",   label: "Rak B2B",              x: 22, y: 58, xm: 24, ym: 60,
      text: "Sepatu brand disimpan di rak sendiri, tidak bercampur dengan antrean ritel.",
      notes: "SOP: rak B2B terpisah." },
    { id: "kerja", label: "Ruang Pengerjaan B2B", x: 48, y: 40, xm: 50, ym: 42,
      text: "Reglue dan jahit sol dikerjakan di ruang khusus B2B.",
      notes: "SOP: ruang pengerjaan B2B." },
    { id: "qc",    label: "Area QC",              x: 70, y: 52, xm: 70, ym: 54,
      text: "Diperiksa dua kali: saat masuk dan sebelum dikirim kembali.",
      notes: "VERIFIKASI: QC awal dan QC akhir di area yang sama?" },
    { id: "hasil", label: "Rak Hasil",            x: 86, y: 62, xm: 84, ym: 64,
      text: "Sepatu yang selesai menunggu di rak hasil B2B sebelum dikirim.",
      notes: "SOP: rak hasil B2B." },
  ],
};
```

- `x`, `y` = posisi titik dalam persen dari lebar dan tinggi foto.
- `notes` **tidak pernah dirender**.
- Jika `photo` kosong atau `dummy: true`: tampilkan frame abu-abu berlabel "Foto area B2B (contoh)" dengan badge DUMMY, atau sembunyikan section.

### Mode kalibrasi (khusus dev)

Tambahkan `?calibrate=1`: klik di foto, koordinat `x%, y%` tercetak di console dan tampil di layar. Setelah foto asli masuk, kalibrasi empat titik (dan versi mobile) sekitar lima menit.

---

## 4. Plan B: satu foto lebar tidak memungkinkan

Jika ruangan terlalu kecil untuk satu frame yang jelas:

- Ambil **4 foto terpisah**, satu per area.
- Penanda berubah jadi **tab bernomor 1 sampai 4** di atas foto. Foto berganti dengan cross-fade (250 ms).
- Copy, label, dan kalimat per titik **sama persis**. Tidak perlu kalibrasi koordinat.
- Di data: ganti `photo` dengan `photos: { rak, kerja, qc, hasil }` dan hilangkan `x`, `y`.

---

## 5. Daftar shot (untuk dibawa saat pemotretan)

### Prioritas 1: foto area B2B

- Landscape 16:9, kamera setinggi dada dari satu sudut ruangan, lensa 1x (hindari 0.5x karena distorsi), pakai tripod atau sandaran.
- Empat area terlihat sekaligus (rak B2B, ruang pengerjaan, area QC, rak hasil). Jika tidak muat, gunakan Plan B.
- Lampu workshop menyala. Hindari jendela di belakang objek.
- Rapikan area. Singkirkan kotak atau kertas dengan nama pelanggan.
- Sisakan area polos untuk titik. Jangan taruh wajah orang tepat di posisi titik.
- Ambil juga versi 4:3 untuk mobile jika komposisinya berbeda.

### Prioritas 2: close-up proses (3 sampai 5 foto)

Tangan mengoles lem, sol dipress, jahit sol samping. Landscape. Kandidat foto hero.

### Prioritas 3: before dan after (5 sampai 8 pasang)

Sudut dan cahaya sama, latar polos, sisi sepatu yang menampilkan celah sol sebelum dan sesudah.

### Prioritas 4: hasil untuk strip foto (8 sampai 12 sepatu)

Latar polos seragam, rasio sama (1:1 atau 4:5).

### Aturan pemotretan

- Minta izin staf yang wajahnya tampil (atau ambil bagian tangan saja).
- Tutup nama, nomor, dan nomor seri pelanggan.
- Sepatu milik partner B2B hanya tampil dengan izin tertulis.
- Jangan menulis nama brand sebagai klaim hubungan kerja sama.
- Penamaan file: `jalur-b2b-wide.jpg`, `jalur-b2b-43.jpg`, `reglue-before-01.jpg`, `reglue-after-01.jpg`, `hasil-01.jpg`.

---

## 6. Guard agar penanda tidak bocor ke halaman

Tambahkan pemeriksaan saat build atau test: gagal jika ada string yang akan dirender dan cocok dengan pola berikut.

```ts
const LEAK = /\[(VERIFIKASI|JIKA LIVE|DUMMY)[^\]]*\]/;
// Periksa semua field teks yang dirender (label, text, caption, headline, sub).
// Field `notes` dikecualikan.
```

Tambahkan juga flag `dummy: true` yang membuat build **production** gagal selama masih ada item dummy.

---

## 7. Checklist sebelum rilis

- [ ] Tabel perbandingan dan semua teks penanda sudah hilang dari halaman
- [ ] Foto asli menggantikan placeholder, `dummy: false`
- [ ] Koordinat titik desktop dan mobile sudah dikalibrasi
- [ ] Lokasi QC awal dan akhir sudah dikonfirmasi (teks titik 3)
- [ ] Izin staf dan pelanggan pada foto sudah ada
- [ ] Tidak ada nama atau logo brand yang tampil sebagai klaim kerja sama
- [ ] Teks "Kenapa Kami" di navbar menuju section ini (anchor tidak mati)
