import { useState } from "react";
import "./Faq.css";

const daftarBantuan = [
  {
    kategori: "Akun",
    pertanyaan: "Bagaimana cara membuat akun?",
    jawaban:
      "Pilih menu Daftar atau Register, kemudian masukkan nama pengguna, email, dan password. Setelah proses registrasi berhasil, Anda dapat menggunakan akun tersebut untuk login.",
  },
  {
    kategori: "Akun",
    pertanyaan: "Saya lupa password, apa yang harus dilakukan?",
    jawaban:
      "Gunakan fitur Lupa Password pada halaman login. Masukkan email yang terhubung dengan akun Anda dan ikuti instruksi yang dikirim melalui email untuk membuat password baru.",
  },
  {
    kategori: "Akun",
    pertanyaan: "Apakah saya bisa login menggunakan Google?",
    jawaban:
      "Jika fitur Google Login tersedia pada website, Anda dapat memilih opsi Login dengan Google dan mengikuti proses autentikasi yang diberikan.",
  },
  {
    kategori: "Daftar Saya",
    pertanyaan: "Bagaimana cara menyimpan film ke Daftar Saya?",
    jawaban:
      "Buka film atau serial yang ingin disimpan, kemudian pilih tombol atau ikon untuk menambahkan film ke Daftar Saya. Film yang berhasil ditambahkan dapat ditemukan pada halaman Daftar Saya.",
  },
  {
    kategori: "Daftar Saya",
    pertanyaan: "Bagaimana cara menghapus film dari Daftar Saya?",
    jawaban:
      "Buka Daftar Saya, kemudian pilih film yang ingin dihapus dan gunakan tombol hapus atau ikon yang tersedia.",
  },
  {
    kategori: "Film",
    pertanyaan: "Dari mana informasi film berasal?",
    jawaban:
      "Informasi film dan serial pada website diperoleh melalui layanan The Movie Database (TMDB). Informasi seperti judul, poster, genre, rating, dan sinopsis mengikuti data yang tersedia dari layanan tersebut.",
  },
  {
    kategori: "Film",
    pertanyaan: "Kenapa film atau gambar tidak muncul?",
    jawaban:
      "Hal tersebut dapat terjadi karena masalah koneksi internet, server sedang mengalami gangguan, atau data film dari layanan pihak ketiga sedang tidak tersedia. Silakan coba refresh halaman atau periksa kembali koneksi internet Anda.",
  },
  {
    kategori: "Premium",
    pertanyaan: "Apa perbedaan akun Free dan Premium?",
    jawaban:
      "Akun Free dapat menggunakan fitur yang tersedia untuk pengguna gratis, sedangkan akun Premium dapat memperoleh akses ke fitur atau konten tambahan yang disediakan khusus untuk pelanggan Premium.",
  },
  {
    kategori: "Premium",
    pertanyaan: "Bagaimana cara berlangganan Premium?",
    jawaban:
      "Jika fitur Premium telah tersedia, pilih paket Premium dan ikuti proses berlangganan serta pembayaran yang tersedia pada website.",
  },
  {
    kategori: "Keamanan",
    pertanyaan: "Apakah data akun saya aman?",
    jawaban:
      "Kami berusaha menjaga keamanan data pengguna dengan menerapkan mekanisme keamanan pada sistem. Password pengguna juga diproses menggunakan hashing sebelum disimpan.",
  },
];

export default function Faq() {
  const [pertanyaanTerbuka, setPertanyaanTerbuka] = useState(null);
  const [pencarian, setPencarian] = useState("");

  const togglePertanyaan = (index) => {
    setPertanyaanTerbuka(pertanyaanTerbuka === index ? null : index);
  };

  const hasilPencarian = daftarBantuan.filter((item) => {
    const keyword = pencarian.toLowerCase();

    return (
      item.pertanyaan.toLowerCase().includes(keyword) ||
      item.jawaban.toLowerCase().includes(keyword) ||
      item.kategori.toLowerCase().includes(keyword)
    );
  });

  return (
    <main className="bantuan-page">
      <div className="bantuan-container">
        {/* Header */}
        <section className="bantuan-header">
          <span className="bantuan-label">PUSAT BANTUAN</span>

          <h1>Ada yang bisa kami bantu?</h1>

          <p>
            Temukan jawaban untuk pertanyaan mengenai akun, film, Daftar Saya,
            dan fitur lainnya.
          </p>

          <div className="bantuan-search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Cari bantuan..."
              value={pencarian}
              onChange={(e) => setPencarian(e.target.value)}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <div className="section-title">
            <h2>Pertanyaan yang Sering Ditanyakan</h2>
            <p>Temukan solusi untuk masalah yang sering dialami pengguna.</p>
          </div>

          <div className="faq-list">
            {hasilPencarian.length > 0 ? (
              hasilPencarian.map((item, index) => (
                <div
                  className={`faq-item ${
                    pertanyaanTerbuka === index ? "faq-active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => togglePertanyaan(index)}
                  >
                    <div>
                      <span className="faq-category">{item.kategori}</span>

                      <span className="faq-title">{item.pertanyaan}</span>
                    </div>

                    <span className="faq-icon">
                      {pertanyaanTerbuka === index ? "−" : "+"}
                    </span>
                  </button>

                  {pertanyaanTerbuka === index && (
                    <div className="faq-answer">
                      <p>{item.jawaban}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="faq-empty">
                <h3>Bantuan tidak ditemukan</h3>

                <p>
                  Coba gunakan kata kunci lain seperti "login", "password",
                  "film", atau "Premium".
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact */}
        <section className="contact-help">
          <div className="contact-content">
            <span className="contact-icon">?</span>

            <div>
              <h2>Masih membutuhkan bantuan?</h2>

              <p>
                Jika Anda tidak menemukan jawaban yang dibutuhkan, silakan
                hubungi kami melalui email.
              </p>
            </div>
          </div>

          <a href="mailto:[Email Website]" className="contact-button">
            Hubungi Kami
          </a>
        </section>

        {/* Footer */}
        <footer className="bantuan-footer">
          <p>© 2026 chill All rights Reserved. Semua hak dilindungi.</p>
        </footer>
      </div>
    </main>
  );
}
