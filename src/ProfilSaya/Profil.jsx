import { useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";

// Aset (Sesuaikan path-nya jika ada yang berbeda)
import Warning from "../assets/beranda/Warning.png";
import edit from "../assets/beranda/edit.png";
import foto from "../assets/beranda/fotoprofil.png";
import fotofile from "../assets/beranda/file-upload-outline.png";
import "./Profil.css";
import { GoogleLogin } from "@react-oauth/google";
// Komponen & Service
import ProfilBelumLogin from "./ProfilBelumLogin";
import uploadImage from "../CloudinaryApiHandle/CloudinaryApiJHandle";
import SectionDaftar from "../DaftarSaya/SectionTopRating";

import {
  UbahUser,
  DeleteUser,
  FotoProfil,
  TambahEmail,
} from "../CostomHook/CostomHook"; // Hapus DeleteUser jika belum dipakai
import { useSelector } from "react-redux";

export default function ProfilBerlangganan() {
  const Navigate = useNavigate();
  const Fotoref = useRef(null);

  const { UserPaket } = useSelector((state) => state.Akun);
  const token = localStorage.getItem("token");

  const decoded = token ? jwtDecode(token) : null;

 const [Foto, setFoto] = useState(
  decoded?.foto_profil || foto
);

  const [Nama, setNama] = useState(
  decoded?.user_nama || ""
);

  const [Ubah, setUbah] = useState(false);
  const [ErrorBE, setErrorBE] = useState("");
const [ErrorNama, setErrorNama] = useState("");
  // 1. Ambil token dan periksa keamanannya

  if (!token || typeof token !== "string") {
    return <ProfilBelumLogin />;
  }

  // Fungsi Upload Foto
  async function HandleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Asumsi uploadImage mengembalikan URL
    const url = await uploadImage(file);
    setFoto(url);

    if (url) {
      try {
        // Kirim string 'Nama' ke API
        await FotoProfil({ foto_profil: url });

        alert("Foto profil berhasil diubah.");

        // Hapus token lama & arahkan login
      } catch (error) {
        alert(error);
      }
    }
  }

  // Fungsi Toggle Ubah Profil
  function Handleclik() {
    setUbah(!Ubah);
    if (!Ubah) {
      // Alert dihapus agar UI lebih rapi, user sudah tahu dari input yang bisa diklik
    }
  }

  // Fungsi Simpan (Update User)
 async function Handlesimpan() {
  if (!Nama.trim()) {
    setErrorNama("Nama pengguna tidak boleh kosong.");
    return;
  }

  const setuju = window.confirm("Apakah kamu mau mengganti Nama?");

  if (setuju) {
    try {
      setErrorNama("");
      setErrorBE("");

      await UbahUser({
        user_nama: Nama,
      });

      // console.log(data);

      alert("Nama berhasil diubah. Silakan login kembali dengan nama baru.");

      localStorage.removeItem("token");
      Navigate("/Masuk");
    } catch (error) {
      setErrorBE(
        error.response?.data?.message ||
        "Nama pengguna gagal diubah."
      );
    }
  }
}

  // Fungsi Hapus Akun (Belum ada isinya, tapi saya rapikan)
  async function HandleHapus() {
    const setuju = window.confirm("Apakah kamu mau Menghapus akun?");

    if (setuju) {
      try {
        // Kirim string 'Nama' ke API
        await DeleteUser();
        // console.log(data);

        alert("Nama berhasil diubah. Silakan login kembali dengan nama baru.");

        // Hapus token lama & arahkan login
        localStorage.removeItem("token");
        Navigate("/Masuk");
      } catch (error) {
        setErrorBE(error.response?.data?.message || "Gagal mengubah data");
      }
    }
  }
  const handleGoogleLogin = async (response) => {
    try {
      const googleToken = response.credential;

      await TambahEmail({ token: googleToken });

      // console.log(result);

      // JWT dari backend

      alert("email ditambahkan");
      localStorage.removeItem("token");

      Navigate("/masuk");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setErrorBE(error.response?.data?.message || error.message);
    }
  };

  return (
    <main className="main-profil">
      <section className="profil">
        { decoded.paket === "FREE" ? (
          <div className="box-langganan">
            <div>
              <img src={Warning} alt="Warning" />
            </div>
            <div className="note-warning">
              <h2>Saat ini anda belum berlangganan</h2>
              <p>
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
            </div>
          </div>
        ) : (
          <div className="box-langganan">
            <div>
              <img src={Warning} alt="Warning" />
            </div>
            <div className="note-warning">
              <h2>{`saat ini anda telah berlangganan paket ${UserPaket ? UserPaket : decoded.paket}`}</h2>
              <p>
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
            </div>
          </div>
        )}

        <div className="box-profildata">
          <div>
            <p>{decoded.paket}</p>
          </div>
          <div>
            <h2>Profil Saya</h2>
          </div>
          <div className="foto-profil">
            <div className="foto">
              <img src={Foto} alt="Foto Profil" />
            </div>
            <div className="edit-foto">
              <button
                onClick={() => {
                  Fotoref.current.click();
                }}
              >
                Ubah Profil
              </button>
              <input
                style={{ display: "none" }}
                className="input-foto"
                type="file"
                accept="image/*"
                onChange={HandleUpload}
                ref={Fotoref}
              />
              <div className="max-file">
                <img src={fotofile} alt="Upload File" />
                <div>Maksimal 2MB</div>
              </div>
            </div>
          </div>

       <div className="pengguna">
  <div className="input-pengguna">
    <p>Nama pengguna</p>

    <input
      className={ErrorNama || ErrorBE ? "input-error" : ""}
      value={Nama}
      onChange={(e) => {
        setNama(e.target.value);
        setErrorNama("");
        setErrorBE("");
      }}
      type="text"
      placeholder="Nama pengguna"
      readOnly={!Ubah}
    />

    {(ErrorNama || ErrorBE) && (
      <p className="error-message">
        {ErrorNama || ErrorBE}
      </p>
    )}
  </div>

  <div>
    <img src={edit} alt="Edit" onClick={Handleclik} />
  </div>
</div>

          {decoded.user_email ? (
            <div className="email">
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                value={decoded.user_email}
                readOnly
              />
            </div>
          ) : (
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                // console.log("Google Login gagal");
              }}
            />
          )}

          <div>
            <Link to={"/LupaPassword"}>Ganti Password</Link>
          </div>

          <div className="box-button-profil">
            {/* PERBAIKAN: onClick={Handlesimpan} */}
            <button onClick={Handlesimpan} className="button-simpan-profil">
              Simpan
            </button>
            <button onClick={HandleHapus} className="button-simpan-hapus">
              Hapus
            </button>
          </div>
        </div>
       
      </section>

      <div>
        <p style={{ fontSize: "1.8rem" }}>Daftar Saya</p>
        <SectionDaftar />
      </div>
    </main>
  );
}
