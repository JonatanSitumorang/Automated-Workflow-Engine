# Automated-Workflow-Engine

# Automated Workflow Engine: Google Sheets, Apps Script & 2Chat API

Sistem otomasi alur kerja (workflow) yang efisien untuk manajemen request, menggunakan Google Sheets sebagai pusat database, Google Apps Script untuk otomatisasi logika, serta Make.com dengan 2Chat API untuk notifikasi WhatsApp secara real-time.

## 🚀 Gambaran Teknis
Proyek ini mengintegrasikan berbagai layanan cloud untuk membangun alur kerja otomatis:
* **Database**: Google Sheets (Penyimpanan data terstruktur).
* **Backend**: Google Apps Script (Pemrosesan form dan pengiriman email otomatis).
* **Automation**: Make.com (Pusat otomasi untuk memantau data spreadsheet).
* **Messaging**: 2Chat API (Gateway untuk notifikasi WhatsApp).

## 🏗️ Arsitektur Sistem
1. **Input**: User mengisi data melalui Web App (Google Apps Script).
2. **Processing**: Data masuk ke Google Sheets dan sistem secara otomatis mengirim email notifikasi ke approver.
3. **Notification**: Make.com mendeteksi baris baru di Sheets dan memerintahkan 2Chat untuk mengirim notifikasi instan ke WhatsApp.

## 🛠️ Tech Stack
![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)
![Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=for-the-badge&logo=google-apps-script&logoColor=white)
![Make.com](https://img.shields.io/badge/Make.com-000000?style=for-the-badge&logo=make&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

## 💡 Keunggulan
* **Sentralisasi Data**: Semua request tercatat rapi di Google Sheets.
* **Dual Notification**: Notifikasi Email (formal) dan WhatsApp (instan) menjamin tidak ada request yang terlewat.
* **Efficient Workflow**: Mengurangi input manual dan mempercepat proses persetujuan.

## 📝 Penggunaan
1. **Clone** repositori ini.
2. Setup **Google Apps Script** menggunakan kode yang disediakan di folder `src`.
3. Hubungkan **Google Sheets** ke **Make.com** melalui skenario "Watch New Rows".
4. Konfigurasikan **2Chat** pada Make.com untuk integrasi WhatsApp.

---
*Proyek ini dibuat sebagai solusi otomasi untuk meningkatkan efisiensi proses bisnis internal.*
