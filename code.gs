function doGet() {
  return HtmlService.createHtmlOutputFromFile('FormInput')
      .setTitle('Form Request CCTV')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitData(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; 
  
  // 1. Simpan data ke Spreadsheet
  sheet.appendRow([
    data.tanggalRequest,
    data.nama,
    data.departemen,
    data.lokasi,
    data.tujuan,
    data.tanggalAkses,
    data.jamAkses,
    'Pending',
    data.catatan,
    new Date()
  ]);
  
  // 2. Kirim Email Notifikasi ke Approval
  
  var emailApproval = "meisterstadtbatamm@gmail.com"; // GANTI DENGAN EMAIL ATASAN/APPROVAL
  var subject = "Notifikasi Request CCTV Baru - " + data.nama;
  var body = "Halo Approval,\n\nAda request CCTV baru dari " + data.nama + 
             ".\n\nDetail:\nLokasi: " + data.lokasi + 
             "\nTujuan: " + data.tujuan + 
             "\n\nSilakan Klik Link Spreadsheet Database untuk proses approval." +
             "\n\nTerima kasih.";
  
  MailApp.sendEmail(emailApproval, subject, body);
  // ... (kode sebelumnya untuk simpan data)

  // Link ke Spreadsheet Anda
  var linkSpreadsheet = "https://docs.google.com/spreadsheets/d/12ugfoHRbpGRtPoNs5CANLKFCbWvUoaIZRaja21kvysE/edit?gid=0#gid=0";
  
  var subject = "Notifikasi Request CCTV Baru - " + data.nama;
  
  // Menggunakan HTML untuk membuat link yang bisa diklik
  var htmlBody = "Halo Approval,<br><br>" +
                 "Ada request CCTV baru dari <b>" + data.nama + "</b>.<br><br>" +
                 "Detail:<br>" +
                 "Lokasi: " + data.lokasi + "<br>" +
                 "Tujuan: " + data.tujuan + "<br><br>" +
                 "<a href='" + linkSpreadsheet + "' style='background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Klik di sini untuk Buka Database</a>" +
                 "<br><br>Terima kasih.";

  MailApp.sendEmail({
    to: emailApproval,
    subject: subject,
    htmlBody: htmlBody // Gunakan htmlBody bukan body
  });
  
  return "Data berhasil disimpan dan email notifikasi sudah dikirim!";
}
