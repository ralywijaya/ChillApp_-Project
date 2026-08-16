import { useState } from "react";
import { Link } from "react-router-dom";
import "./LupaPassword.css";
import { UbahSandi } from "../CostomHook/CostomHook";
const LupaPassword = () => {
  const [identitas, setIdentitas] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPesan("");
    setError("");

    if (!identitas.trim()) {
      setError("Username atau email wajib diisi.");
      return;
    }

    if (!password) {
      setError("Password baru wajib diisi.");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    if (password !== konfirmasiPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    try {
      setLoading(true);

      const response = await UbahSandi({
        identitas: identitas,
        password: password,
      });

      setPesan(response.data.message || "Selamat, password telah diperbarui.");

      setIdentitas("");
      setPassword("");
      setKonfirmasiPassword("");
    } catch (error) {
      setError(
        error.response?.data?.message || "Username atau email tidak ditemukan."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="lupa-password-page">
      <div className="lupa-password-container">
        <div className="lupa-password-card">
          <div className="lupa-password-header">
            <span className="lupa-password-label">AKUN</span>

            <h1>Lupa Password?</h1>

            <p>
              Masukkan username atau email yang terhubung dengan akun Anda,
              kemudian buat password baru.
            </p>
          </div>

          <form className="lupa-password-form" onSubmit={handleSubmit}>
            {/* USERNAME / EMAIL */}

            <div className="form-group">
              <label htmlFor="identitas">Username atau Email</label>

              <input
                id="identitas"
                type="text"
                name="identitas"
                placeholder="Masukkan username atau email"
                value={identitas}
                onChange={(e) => setIdentitas(e.target.value)}
                disabled={loading}
                autoComplete="username"
              />
            </div>

            {/* PASSWORD BARU */}

            <div className="form-group">
              <label htmlFor="password">Password Baru</label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Masukkan password baru"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            {/* KONFIRMASI PASSWORD */}

            <div className="form-group">
              <label htmlFor="konfirmasiPassword">Konfirmasi Password</label>

              <input
                id="konfirmasiPassword"
                type="password"
                name="konfirmasiPassword"
                placeholder="Masukkan kembali password"
                value={konfirmasiPassword}
                onChange={(e) => setKonfirmasiPassword(e.target.value)}
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            {/* ERROR */}

            {error && <div className="form-message error">{error}</div>}

            {/* BERHASIL */}

            {pesan && <div className="form-message success">{pesan}</div>}

            {/* BUTTON */}

            <button
              type="submit"
              className="lupa-password-button"
              disabled={loading}
            >
              {loading ? "Memperbarui..." : "Perbarui Password"}
            </button>
          </form>

          <div className="lupa-password-back">
            <Link to={"/masuk"}>Masuk</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LupaPassword;
