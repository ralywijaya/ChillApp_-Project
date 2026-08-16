import { useState } from "react";
import "./KontakKami.css";

export default function KontakKami() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTujuan = "[Email Website]";

    const mailto = `mailto:${emailTujuan}?subject=${encodeURIComponent(
      formData.subjek
    )}&body=${encodeURIComponent(
      `Nama: ${formData.nama}\nEmail: ${formData.email}\n\nPesan:\n${formData.pesan}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* HEADER */}
        <header className="contact-header">
          <div>
            <h1>Bagaimana kami dapat membantu?</h1>
          </div>
          {/* <div>
   <span className="contact-label">
            HUBUNGI KAMI
          </span> 
</div>
<div>
     <p>
            Jika Anda memiliki pertanyaan, menemukan masalah,
            atau membutuhkan bantuan terkait website, silakan
            hubungi kami.
          </p>
</div>
  */}
        </header>

        <div className="contact-layout">
          {/* INFORMASI KONTAK */}
          <section className="contact-info">
            <div className="info-card">
              <div className="info-icon">@</div>

              <div>
                <h2>Email</h2>

                <p>
                  Untuk pertanyaan dan bantuan, Anda dapat menghubungi kami
                  melalui email.
                </p>

                <a href="mailto:[Email Website]">© 2026 chill</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">?</div>

              <div>
                <h2>Bantuan</h2>

                <p>
                  Sebelum menghubungi kami, Anda dapat melihat halaman Bantuan
                  untuk menemukan jawaban atas pertanyaan yang sering
                  ditanyakan.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">i</div>

              <div>
                <h2>Informasi Website</h2>

                <p>
                  <strong>Nama Website:</strong>
                  <br />
                  ChillApp
                </p>

                <p>
                  <strong>Jenis Layanan:</strong>
                  <br />
                  Platform informasi film dan serial TV
                </p>
              </div>
            </div>
          </section>

          {/* FORM */}
          <section className="contact-form-wrapper">
            <div className="form-header">
              <h2>Kirim Pesan</h2>

              <p>
                Isi formulir berikut dan kami akan membantu menjawab pertanyaan
                Anda.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nama">Nama</label>

                <input
                  id="nama"
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama Anda"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subjek">Subjek</label>

                <select
                  id="subjek"
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih kategori</option>

                  <option value="Masalah Akun">Masalah Akun</option>

                  <option value="Masalah Login">Masalah Login</option>

                  <option value="Masalah Daftar Saya">
                    Masalah Daftar Saya
                  </option>

                  <option value="Masalah Film">Masalah Film</option>

                  <option value="Premium">Premium</option>

                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pesan">Pesan</label>

                <textarea
                  id="pesan"
                  name="pesan"
                  rows="6"
                  placeholder="Tuliskan pertanyaan atau masalah Anda..."
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Kirim Pesan
              </button>
            </form>
          </section>
        </div>

        {/* CATATAN */}
        <section className="contact-note">
          <h2>Sebelum menghubungi kami</h2>

          <p>
            Pastikan Anda menjelaskan masalah dengan jelas dan mencantumkan
            informasi yang diperlukan agar kami dapat membantu dengan lebih
            cepat.
          </p>

          <p>
            Untuk keamanan, jangan pernah mengirimkan password, token login,
            atau informasi pembayaran melalui pesan.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="contact-footer">
          <p>© 2026 chill All rights Reserved</p>
        </footer>
      </div>
    </main>
  );
}
