import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Kebijakan Privasi</h1>
          <p>Terakhir diperbarui: 16 Agustus 2026</p>
        </header>

        <div className="privacy-content">
          <p>
            Selamat datang di <strong>[Nama Website]</strong>.
          </p>

          <p>
            Kami menghargai privasi dan keamanan setiap pengguna. Kebijakan
            Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
            menyimpan, dan melindungi informasi pengguna ketika menggunakan
            website dan layanan kami.
          </p>

          <p>
            Dengan menggunakan website ini, Anda dianggap telah membaca dan
            memahami Kebijakan Privasi ini.
          </p>

          <section>
            <h2>1. Informasi yang Kami Kumpulkan</h2>

            <h3>A. Informasi Akun</h3>
            <p>
              Ketika Anda membuat akun, kami dapat mengumpulkan beberapa
              informasi, seperti:
            </p>

            <ul>
              <li>Nama pengguna</li>
              <li>Alamat email</li>
              <li>Password</li>
              <li>Informasi autentikasi akun</li>
              <li>Informasi paket akun, seperti Free atau Premium</li>
            </ul>

            <p>
              Password pengguna tidak disimpan dalam bentuk teks biasa. Password
              diproses menggunakan metode hashing sebelum disimpan ke database.
            </p>

            <h3>B. Login Menggunakan Google</h3>
            <p>
              Jika Anda memilih untuk masuk menggunakan akun Google, kami dapat
              menerima informasi dasar yang diperlukan untuk membuat dan
              mengelola akun, seperti:
            </p>

            <ul>
              <li>Nama</li>
              <li>Alamat email</li>
              <li>
                Informasi identitas akun yang diperlukan untuk autentikasi
              </li>
            </ul>

            <p>Kami tidak meminta atau menyimpan password akun Google Anda.</p>

            <h3>C. Data Daftar Saya</h3>
            <p>
              Website menyediakan fitur Daftar Saya yang memungkinkan pengguna
              menyimpan film atau serial yang ingin mereka simpan.
            </p>

            <p>Data yang dapat disimpan meliputi:</p>

            <ul>
              <li>Identitas pengguna</li>
              <li>ID film atau serial dari TMDB</li>
              <li>Jenis media</li>
              <li>Waktu data ditambahkan</li>
            </ul>
          </section>

          <section>
            <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>

            <p>Informasi pengguna digunakan untuk:</p>

            <ol>
              <li>Membuat dan mengelola akun pengguna.</li>
              <li>Melakukan proses login dan autentikasi.</li>
              <li>Menjaga keamanan akun pengguna.</li>
              <li>Menyediakan fitur Daftar Saya.</li>
              <li>Menyimpan pilihan film atau serial pengguna.</li>
              <li>Mengirim email yang berkaitan dengan akun.</li>
              <li>Menentukan akses fitur berdasarkan paket akun.</li>
              <li>Menyediakan layanan Premium apabila tersedia.</li>
              <li>Memperbaiki dan mengembangkan kualitas website.</li>
              <li>Mencegah penggunaan layanan yang tidak sah.</li>
            </ol>
          </section>

          <section>
            <h2>3. Keamanan Password</h2>

            <p>
              Password merupakan informasi penting dalam keamanan akun. Password
              pengguna diproses menggunakan metode hashing sebelum disimpan ke
              database.
            </p>

            <p>
              Dengan demikian, password tidak disimpan dalam bentuk teks biasa.
              Meskipun demikian, tidak ada sistem penyimpanan data yang dapat
              menjamin keamanan secara mutlak.
            </p>
          </section>

          <section>
            <h2>4. Autentikasi dan Token Login</h2>

            <p>
              Website menggunakan mekanisme autentikasi untuk memastikan bahwa
              hanya pengguna yang telah login yang dapat mengakses fitur
              tertentu.
            </p>

            <p>
              Sistem dapat menggunakan JSON Web Token (JWT) sebagai bagian dari
              proses autentikasi.
            </p>

            <p>Token digunakan untuk:</p>

            <ul>
              <li>Memverifikasi identitas pengguna.</li>
              <li>Mengakses fitur yang membutuhkan login.</li>
              <li>
                Mengidentifikasi akun ketika pengguna melakukan tindakan
                tertentu.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Penggunaan Google Login</h2>

            <p>
              Website dapat menyediakan fitur login menggunakan Google. Apabila
              pengguna memilih Google Login, proses autentikasi dilakukan
              melalui layanan Google.
            </p>

            <p>
              Website hanya menerima informasi yang diperlukan untuk membuat
              atau menghubungkan akun pengguna.
            </p>
          </section>

          <section>
            <h2>6. Penggunaan TMDB</h2>

            <p>
              Website menggunakan layanan The Movie Database (TMDB) untuk
              menyediakan informasi mengenai film dan serial TV.
            </p>

            <p>Informasi yang dapat ditampilkan meliputi:</p>

            <ul>
              <li>Judul film</li>
              <li>Poster</li>
              <li>Backdrop</li>
              <li>Genre</li>
              <li>Rating</li>
              <li>Sinopsis</li>
              <li>Informasi film atau serial lainnya</li>
            </ul>
          </section>

          <section>
            <h2>7. Daftar Saya</h2>

            <p>
              Fitur Daftar Saya memungkinkan pengguna menyimpan film atau serial
              yang ingin ditonton atau disimpan.
            </p>

            <p>
              Data Daftar Saya dikaitkan dengan akun pengguna sehingga daftar
              tersebut dapat ditampilkan kembali ketika pengguna login.
            </p>

            <p>
              Pengguna dapat menghapus film atau serial yang sebelumnya telah
              ditambahkan ke Daftar Saya.
            </p>
          </section>

          <section>
            <h2>8. Email dan Reset Password</h2>

            <p>
              Website dapat menggunakan layanan email untuk kebutuhan yang
              berkaitan dengan akun pengguna.
            </p>

            <p>Contohnya:</p>

            <ul>
              <li>Reset password</li>
              <li>Pemulihan akun</li>
              <li>Informasi keamanan akun</li>
            </ul>

            <p>
              Email pengguna dapat digunakan untuk mengirimkan pesan yang
              diperlukan untuk menjalankan fungsi tersebut.
            </p>
          </section>

          <section>
            <h2>9. Paket Free dan Premium</h2>

            <p>
              Website dapat menyediakan beberapa jenis paket akun, seperti Free
              dan Premium.
            </p>

            <p>
              Informasi mengenai paket pengguna dapat disimpan pada akun untuk
              menentukan fitur yang dapat diakses.
            </p>

            <p>
              Akun Premium dapat memperoleh akses ke fitur atau konten tertentu
              yang tidak tersedia pada akun Free.
            </p>
          </section>

          <section>
            <h2>10. Pembayaran Premium</h2>

            <p>
              Apabila fitur berlangganan Premium telah diaktifkan, website dapat
              menggunakan penyedia layanan pembayaran pihak ketiga seperti
              Midtrans untuk memproses transaksi.
            </p>

            <p>
              Informasi pembayaran dapat diproses oleh penyedia pembayaran
              sesuai dengan kebijakan dan ketentuan mereka.
            </p>
          </section>

          <section>
            <h2>11. Penyimpanan Data</h2>

            <p>
              Data akun pengguna disimpan pada database yang digunakan oleh
              sistem untuk menjalankan layanan.
            </p>

            <p>
              Data yang berkaitan dengan akun dapat tetap disimpan selama akun
              masih digunakan atau selama diperlukan untuk menyediakan layanan.
            </p>
          </section>

          <section>
            <h2>12. Cookies dan Local Storage</h2>

            <p>
              Website dapat menggunakan teknologi penyimpanan pada browser,
              termasuk Local Storage, untuk membantu menjalankan fitur tertentu.
            </p>

            <p>
              Contohnya adalah penyimpanan informasi yang diperlukan untuk
              mempertahankan status login pengguna.
            </p>

            <p>
              Pengguna dapat menghapus data penyimpanan browser melalui
              pengaturan browser masing-masing.
            </p>
          </section>

          <section>
            <h2>13. Berbagi Informasi dengan Pihak Ketiga</h2>

            <p>
              Kami dapat menggunakan layanan pihak ketiga yang diperlukan agar
              website dapat berfungsi.
            </p>

            <ul>
              <li>TMDB untuk menyediakan informasi film dan serial.</li>
              <li>Google untuk proses autentikasi.</li>
              <li>Penyedia layanan email untuk kebutuhan akun.</li>
              <li>Midtrans untuk pembayaran apabila fitur Premium tersedia.</li>
            </ul>

            <p>
              Kami tidak menjual informasi pribadi pengguna kepada pihak ketiga.
            </p>
          </section>

          <section>
            <h2>14. Hak Pengguna</h2>

            <p>Pengguna memiliki hak untuk:</p>

            <ul>
              <li>Mengetahui informasi akun yang tersimpan.</li>
              <li>Mengubah informasi akun.</li>
              <li>Menghapus data tertentu melalui fitur yang tersedia.</li>
              <li>Menghapus akun sesuai mekanisme yang disediakan.</li>
              <li>Mengajukan pertanyaan mengenai penggunaan data pribadi.</li>
              <li>Meminta penjelasan mengenai penggunaan informasi pribadi.</li>
            </ul>
          </section>

          <section>
            <h2>15. Penghapusan Akun</h2>

            <p>Pengguna dapat mengajukan permintaan untuk menghapus akun.</p>

            <p>
              Setelah akun dihapus, data yang berkaitan dengan akun dapat
              dihapus atau dinonaktifkan dari sistem sesuai dengan kebutuhan
              operasional dan kewajiban yang berlaku.
            </p>
          </section>

          <section>
            <h2>16. Keamanan Data</h2>

            <p>
              Kami berupaya menerapkan langkah-langkah keamanan yang wajar untuk
              melindungi informasi pengguna dari:
            </p>

            <ul>
              <li>Akses tanpa izin.</li>
              <li>Penggunaan yang tidak sah.</li>
              <li>Perubahan tanpa izin.</li>
              <li>Kehilangan data.</li>
              <li>Pengungkapan yang tidak sah.</li>
            </ul>
          </section>

          <section>
            <h2>17. Privasi Anak</h2>

            <p>
              Website ini tidak secara khusus ditujukan untuk anak-anak tanpa
              pengawasan orang tua atau wali.
            </p>

            <p>
              Kami tidak dengan sengaja mengumpulkan informasi pribadi anak
              tanpa dasar atau persetujuan yang sesuai.
            </p>
          </section>

          <section>
            <h2>18. Perubahan Kebijakan Privasi</h2>

            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            </p>

            <p>Perubahan dapat dilakukan apabila:</p>

            <ul>
              <li>Terdapat fitur baru.</li>
              <li>Terdapat perubahan sistem.</li>
              <li>Terdapat perubahan layanan pihak ketiga.</li>
              <li>Terdapat perubahan cara data pengguna diproses.</li>
            </ul>

            <p>
              Tanggal pembaruan terakhir akan ditampilkan pada bagian atas
              halaman ini.
            </p>
          </section>

          <section>
            <h2>19. Hubungi Kami</h2>

            <p>
              Jika Anda memiliki pertanyaan, keluhan, atau permintaan yang
              berkaitan dengan privasi dan data pribadi, Anda dapat menghubungi
              kami melalui:
            </p>

            <div className="contact-box">
              <p>
                <strong>Nama Website:</strong> [Nama Website]
              </p>
              <p>
                <strong>Email:</strong> [Email Website]
              </p>
            </div>
          </section>

          <section>
            <h2>20. Persetujuan</h2>

            <p>
              Dengan menggunakan website ini, Anda menyatakan bahwa Anda telah
              membaca dan memahami Kebijakan Privasi ini.
            </p>

            <p>
              Jika Anda tidak menyetujui kebijakan ini, Anda dapat berhenti
              menggunakan layanan website.
            </p>
          </section>
        </div>

        <footer className="privacy-footer">
          <p>© 2026 chill All rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
