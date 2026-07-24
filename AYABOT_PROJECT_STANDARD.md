# AYABOT Project Standard

Version : 1.0  
Project : Wedding Invitation Naruto & Hinata  
Last Update : 2026-07-24

---

# 1. Tujuan

Dokumen ini berisi standar penulisan kode yang digunakan pada proyek
Wedding Invitation AYABOT.

Tujuan standar ini adalah:

- Membuat struktur proyek lebih rapi.
- Mempermudah proses pengembangan.
- Mempermudah maintenance.
- Mempermudah pencarian kode.
- Menjaga konsistensi penulisan HTML, CSS, JavaScript dan dokumentasi.

---

# 2. Struktur Folder

```
Undangan/
│
├── assets/
│   ├── images/
│   ├── music/
│   └── icons/
│
├── index.html
├── style.css
├── script.js
│
├── README.md
├── CHANGELOG.md
├── TODO.md
├── AYABOT_PROJECT_STANDARD.md
│
└── .gitignore
```

---

# 3. Standar HTML

## 3.1 Penomoran

Setiap bagian HTML diberi nomor agar mudah dicari.

Contoh:

```
00. HEAD

01. BACKGROUND MUSIC

02. COVER

03. OPENING

04. BRIDE & GROOM

05. LOVE STORY

06. WEDDING EVENT

07. GALLERY

08. COUNTDOWN

09. WEDDING GIFT

10. WISHES

11. CLOSING

12. FOOTER

13. MAIN JAVASCRIPT
```

---

## 3.2 Sub Penomoran

Setiap section memiliki sub nomor.

Contoh:

```
02.01 Overlay

02.02 Content

02.03 Subtitle

02.04 Couple Name

02.05 Guest Box

02.06 Open Invitation Button
```

---

## 3.3 Penulisan Komentar

Gunakan format berikut.

```
<!-- =====================================================
     02. COVER
===================================================== -->
```

Untuk isi section.

```
<!-- 02.01 Overlay -->

<!-- 02.02 Content -->
```

---

# 4. Standar CSS

CSS memiliki sistem penomoran sendiri.

Tidak wajib mengikuti nomor HTML.

CSS disusun berdasarkan urutan styling.

```
00. GLOBAL

01. COVER

02. OPENING

03. BRIDE & GROOM

04. LOVE STORY

05. WEDDING EVENT

06. GALLERY

07. COUNTDOWN

08. WEDDING GIFT

09. WISHES

10. CLOSING

11. FOOTER

99. RESPONSIVE
```

---

## 4.1 Komentar CSS

Gunakan format.

```
/* =====================================================
   01. COVER
===================================================== */
```

Sub bagian.

```
/* -----------------------------------------------------
   01.01 Cover Section
----------------------------------------------------- */
```

---

## 4.2 Urutan Selector

Selector diurutkan sesuai tampilannya.

Contoh.

```
#cover

.overlay

.cover-content

.subtitle

.cover-title

.cover-title span

.guest-box

#guestName

#openInvitation
```

Jangan menaruh selector yang sama di tempat berbeda.

Satu selector hanya memiliki satu blok utama.

---

# 5. Standar JavaScript

JavaScript memiliki sistem penomoran sendiri.

```
00. Initialization

01. Background Music

02. Cover

03. Opening

04. Bride & Groom

05. Love Story

06. Wedding Event

07. Gallery

08. Countdown

09. Wedding Gift

10. Wishes

11. Closing
```

Komentar menggunakan format.

```javascript
// =====================================================
// 01. BACKGROUND MUSIC
// =====================================================
```

---

# 6. Penamaan

## id

Gunakan lowercase.

Contoh.

```
cover

opening

gallery

countdown
```

---

## class

Gunakan lowercase dengan tanda minus.

```
cover-content

opening-text

guest-box
```

---

## File

Gunakan huruf kecil.

```
index.html

style.css

script.js
```

---

# 7. Font

Saat ini menggunakan.

```
Great Vibes

Cormorant SC

Poppins
```

---

# 8. Dokumentasi

Project memiliki empat file dokumentasi utama.

## README.md

Menjelaskan proyek.

## CHANGELOG.md

Mencatat seluruh perubahan yang telah selesai.

## TODO.md

Mencatat pekerjaan yang belum selesai.

## AYABOT_PROJECT_STANDARD.md

Berisi standar pengembangan proyek.

---

# 9. Git

Setiap perubahan penting dianjurkan menggunakan commit.

Contoh.

```
feat: add opening section

style: redesign cover

fix: background music autoplay

docs: update changelog

refactor: reorganize style.css
```

---

# 10. Prinsip Pengembangan

Selama pengembangan proyek AYABOT, berlaku prinsip berikut.

- Kode harus mudah dibaca.
- Hindari duplikasi.
- Gunakan komentar yang konsisten.
- Gunakan penomoran pada setiap section.
- Pisahkan dokumentasi dari source code.
- Setiap fitur baru harus diperbarui pada CHANGELOG.md.
- Setiap rencana fitur harus dicatat pada TODO.md.
- Standar proyek diperbarui melalui AYABOT_PROJECT_STANDARD.md.

---

# 11. Status Standar

Versi saat ini:

AYABOT Project Standard v1.0

Status:

Dalam Pengembangan

Dokumen ini akan terus diperbarui seiring berkembangnya proyek.