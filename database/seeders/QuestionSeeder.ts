import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question from 'App/Models/Question'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER QUESTION");

    await Question.createMany([
      {
        id: "d4fe1541-c245-4df2-ad61-75797f9141d1",
        pertanyaan: "Komponen utama dari sebuah komputer adalah...",
        pilihan_a: "CPU",
        pilihan_b: "Mouse",
        pilihan_c: "Keyboard",
        pilihan_d: "Monitor",
        jawaban: "a",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "0b02c1e8-4c8c-46fb-85fe-12fa64abd2dc",
        pertanyaan: "Sistem bilangan yang digunakan pada komputer adalah...",
        pilihan_a: "Sistem bilangan desimal",
        pilihan_b: "Sistem bilangan biner",
        pilihan_c: "Sistem bilangan oktal",
        pilihan_d: "Sistem bilangan heksadesimal",
        jawaban: "b",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "3dc94ee0-88e0-4c85-b178-6bb676600d9c",
        pertanyaan: "Software pengolah kata yang umum digunakan adalah...",
        pilihan_a: "Adobe Photoshop",
        pilihan_b: "Microsoft Excel",
        pilihan_c: "Microsoft Word",
        pilihan_d: "Adobe Illustrator",
        jawaban: "c",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c82e4698-6f09-47f0-a9e0-75be432f564d",
        pertanyaan: "Salah satu fungsi dari sistem operasi adalah...",
        pilihan_a: "Menampilkan gambar pada layar",
        pilihan_b: "Mengontrol semua aktivitas hardware pada komputer",
        pilihan_c: "Mengolah data",
        pilihan_d: "Menyimpan data pada hard disk",
        jawaban: "b",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "4290b553-1661-4d64-9e2b-b0585b8078fd",
        pertanyaan: "Salah satu contoh perangkat keras input adalah...",
        pilihan_a: "Monitor",
        pilihan_b: "Speaker",
        pilihan_c: "Mouse",
        pilihan_d: "Printer",
        jawaban: "c",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "a6a3b4aa-4d39-4086-a1a6-c8b9f867d04a",
        pertanyaan: "Apa itu internet?",
        pilihan_a: "Sebuah program komputer",
        pilihan_b: "Jaringan komputer global",
        pilihan_c: "Sebuah situs web",
        pilihan_d: "Sebuah sistem operasi",
        jawaban: "b",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "1e7c38f2-87d8-4a45-b053-e2951c6570e5",
        pertanyaan: "Apa perbedaan antara RAM dan hard disk?",
        pilihan_a: "RAM dapat menyimpan data tanpa listrik, sedangkan hard disk tidak",
        pilihan_b: "RAM lebih cepat dalam mengakses data, sedangkan hard disk lebih lambat",
        pilihan_c: "RAM berfungsi sebagai penyimpanan jangka panjang, sedangkan hard disk berfungsi sebagai penyimpanan jangka pendek",
        pilihan_d: "RAM lebih murah dari hard disk",
        jawaban: "b",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "efad28df-5f4b-4f4d-8629-b6e9b26de89d",
        pertanyaan: "Apa fungsi dari operating system pada komputer?",
        pilihan_a: "Mengubah sinyal digital menjadi sinyal analog",
        pilihan_b: "Mengatur aliran data di antara perangkat keras komputer",
        pilihan_c: "Mengendalikan penggunaan memori dan CPU",
        pilihan_d: "Mengontrol koneksi internet",
        jawaban: "c",
        is_private: false,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "9bcbe151-5b44-4e0e-b03a-20588ad7bde4",
        pertanyaan: "Apa perbedaan antara antivirus dan firewall?",
        pilihan_a: "Antivirus melindungi komputer dari virus, sedangkan firewall melindungi dari hacker",
        pilihan_b: "Antivirus melindungi jaringan internet, sedangkan firewall melindungi dari virus",
        pilihan_c: "Antivirus dan firewall memiliki fungsi yang sama",
        pilihan_d: "Antivirus melindungi komputer dari hacker, sedangkan firewall melindungi dari virus",
        jawaban: "a",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "f73225d7-90c9-4b89-9c78-437b37fde981",
        pertanyaan: "Apa itu software?",
        pilihan_a: "Bagian fisik dari komputer, seperti keyboard dan mouse",
        pilihan_b: "Program yang memungkinkan komputer untuk berfungsi",
        pilihan_c: "Kode yang ditulis oleh programmer",
        pilihan_d: "Prosesor atau CPU",
        jawaban: "b",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "0f13464f-8770-42d4-bd90-d66163f33b6c",
        pertanyaan: "Jaringan komputer yang mencakup area yang lebih besar dari LAN disebut...",
        pilihan_a: "LAN",
        pilihan_b: "MAN",
        pilihan_c: "WAN",
        pilihan_d: "WLAN",
        jawaban: "c",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "1547ed9e-a21b-4d88-ba12-e01e0a652eca",
        pertanyaan: "Pemrograman dasar menggunakan bahasa pemrograman...",
        pilihan_a: "HTML",
        pilihan_b: "CSS",
        pilihan_c: "Python",
        pilihan_d: "SQL",
        jawaban: "c",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "6d0da817-8847-49e9-86c0-53aeeee532fc",
        pertanyaan: "Komponen utama dalam sebuah jaringan komputer adalah...",
        pilihan_a: "Router",
        pilihan_b: "Switch",
        pilihan_c: "Modem",
        pilihan_d: "Hub",
        jawaban: "b",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "d81fff8c-08b1-446b-89c6-5281bafd0385",
        pertanyaan: "Salah satu cara untuk meningkatkan keamanan jaringan adalah...",
        pilihan_a: "Menggunakan password yang mudah ditebak",
        pilihan_b: "Menggunakan firewall",
        pilihan_c: "Membuka akses ke semua pengguna",
        pilihan_d: "Menyimpan data tanpa backup",
        jawaban: "b",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "2c5d096c-59d8-462a-b401-7914f5280cb9",
        pertanyaan: "Salah satu perangkat output adalah...",
        pilihan_a: "Printer",
        pilihan_b: "Keyboard",
        pilihan_c: "Mouse",
        pilihan_d: "Hard disk",
        jawaban: "a",
        is_private: true,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },




      {
        id: "56d569ae-d4a9-4da5-a44f-535dec48a6e6",
        pertanyaan: "Salah satu jenis piranti lunak pengolah angka adalah...",
        pilihan_a: "Microsoft Word",
        pilihan_b: "Microsoft Excel",
        pilihan_c: "Adobe Photoshop",
        pilihan_d: "Adobe Illustrator",
        jawaban: "b",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "fda84875-57cf-4045-874c-b474aeb73db2",
        pertanyaan: "Salah satu contoh sistem operasi adalah...",
        pilihan_a: "Microsoft Windows",
        pilihan_b: "Adobe Photoshop",
        pilihan_c: "Mozilla Firefox",
        pilihan_d: "Google Chrome",
        jawaban: "a",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e292f4-d739-11ed-8058-325096b39f47",
        pertanyaan: "Bahasa pemrograman yang populer untuk mengembangkan aplikasi web adalah...",
        pilihan_a: "Java",
        pilihan_b: "Python",
        pilihan_c: "Javascript",
        pilihan_d: "Google Chrome",
        jawaban: "c",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e295c4-d739-11ed-a380-325096b39f47",
        pertanyaan: "Protokol jaringan yang digunakan untuk mengirim email adalah...",
        pilihan_a: "HTTP",
        pilihan_b: "FTP",
        pilihan_c: "SMTP",
        pilihan_d: "SSH",
        jawaban: "c",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e2a596-d739-11ed-b35a-325096b39f47",
        pertanyaan: "Kecepatan pemrosesan data oleh sebuah prosesor diukur dalam satuan...",
        pilihan_a: "Kecepatan pemrosesan data oleh sebuah prosesor diukur dalam satuan...",
        pilihan_b: "Byte (B)",
        pilihan_c: "Watt (W)",
        pilihan_d: "Volt (V)",
        jawaban: "a",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "eeafe89c-38c1-4295-8393-d69f8df97662",
        pertanyaan: "Apa itu Internet?",
        pilihan_a: "Jaringan komputer terbesar di dunia",
        pilihan_b: "Program untuk membuat presentasi",
        pilihan_c: "Proses untuk mengedit video",
        pilihan_d: "Alat untuk menyimpan file",
        jawaban: "a",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "ab6a25d1-1e54-49c2-8a17-966cf12f87e4",
        pertanyaan: "Apa itu website?",
        pilihan_a: "Program untuk mengolah data",
        pilihan_b: "Media sosial untuk berbagi foto",
        pilihan_c: "Halaman atau kumpulan halaman yang bisa diakses di internet",
        pilihan_d: "Lingkungan untuk menggambar digital",
        jawaban: "c",
        is_private: false,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "8e607e5e-a2ca-4bf1-b9ad-156d1a789f3a",
        pertanyaan: "Apa itu browser?",
        pilihan_a: "Program untuk mengedit foto",
        pilihan_b: "Program untuk membuat lembar kerja",
        pilihan_c: "Program untuk menjelajah internet",
        pilihan_d: "Program untuk membuat video",
        jawaban: "c",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "7383cfa3-72b3-46de-aca6-67285f207a8c",
        pertanyaan: "Apa itu perangkat lunak pengolah kata?",
        pilihan_a: "Program untuk membuat grafik dan diagram",
        pilihan_b: "Program untuk mengolah angka",
        pilihan_c: "Program untuk membuat presentasi",
        pilihan_d: "Program untuk membuat dan mengedit dokumen",
        jawaban: "d",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "4ee37bf6-15d8-4afd-a3be-c5cea969c1fe",
        pertanyaan: "Apa itu Sistem Operasi?",
        pilihan_a: "Program untuk membuat gambar vektor",
        pilihan_b: "Program untuk mengolah angka",
        pilihan_c: "Program yang mengatur seluruh operasi pada komputer",
        pilihan_d: "Program untuk membuat animasi 3D",
        jawaban: "c",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e2a726-d739-11ed-8c27-325096b39f47",
        pertanyaan: "Salah satu jenis topologi jaringan adalah...",
        pilihan_a: "Mesh",
        pilihan_b: "Tree",
        pilihan_c: "Bus",
        pilihan_d: "Ring",
        jawaban: "a",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e2a7a8-d739-11ed-9d2a-325096b39f47",
        pertanyaan: "Salah satu keamanan jaringan yang mencegah serangan DDoS adalah...",
        pilihan_a: "Firewall",
        pilihan_b: "Intrusion Detection System (IDS)",
        pilihan_c: "Virtual Private Network (VPN)",
        pilihan_d: "Distributed Denial of Service (DDoS) Protection",
        jawaban: "d",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e2a82a-d739-11ed-abe3-325096b39f47",
        pertanyaan: "Perangkat keras yang digunakan untuk menyimpan data secara permanen adalah...",
        pilihan_a: "RAM",
        pilihan_b: "Processor",
        pilihan_c: "Hard disk",
        pilihan_d: "Motherboard",
        jawaban: "c",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e2a88e-d739-11ed-8400-325096b39f47",
        pertanyaan: "Salah satu jenis kabel yang digunakan untuk menghubungkan jaringan komputer adalah...",
        pilihan_a: "HDMI",
        pilihan_b: "USB",
        pilihan_c: "Coaxial",
        pilihan_d: "VGA",
        jawaban: "C",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
      {
        id: "c2e2a8fc-d739-11ed-a4d3-325096b39f47",
        pertanyaan: "Salah satu jenis perangkat lunak pengolah gambar adalah...",
        pilihan_a: "Microsoft Windows",
        pilihan_b: "Adobe Photoshop",
        pilihan_c: "Mozilla Firefox",
        pilihan_d: "Google Chrome",
        jawaban: "b",
        is_private: true,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        questionBankId: "01457dd2-acf9-4b3c-a567-95f2c391d772", //tik kelas 10
      },
    ])
    console.log("=====> DONE SEEDER QUESTION");
  }
}
