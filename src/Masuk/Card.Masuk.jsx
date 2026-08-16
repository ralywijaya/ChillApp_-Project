import "./css/button.css";
import "./css/main.css";
import { AunthLogin } from "../CostomHook/CostomHook";
import { useNavigate } from "react-router-dom";
import useFilmStore from "../StateManagement";
import { useState } from "react";
import logo from "../assets/masuk/Logo.png";
import Form from "./Form";
import Button from "./Button";

export default function CardMasuk() {
  const Navigate = useNavigate();
  const DataAkun = useFilmStore((state) => state.DataAkun);

  const [Nama, setMasukNama] = useState("");
  const [Password, setMasukPassword] = useState("");
  const [Error, setError] = useState({});
  const [ErrorBE, setErrorBE] = useState("");

  console.table("ini data akun", DataAkun);

  const handleClick = async (e) => {
    e.preventDefault();

    const ErrorInput = {
      nama: Nama.trim() === "",
      password: Password.trim() === "",
    };

    setError(ErrorInput);
    if (ErrorInput.nama || ErrorInput.password) {
      return;
    }

    try {
      const data = await AunthLogin({
        user_nama: Nama,
        user_password: Password,
      });
      console.log("ini adalah data:", data);
      Navigate("/");
      localStorage.setItem("token", data.token);
    } catch (error) {
      setErrorBE(error.response?.data?.message);
    }
  };

  return (
    <section className="section-daftar">
      <main className="main-daftar">
        <header className="header-daftar">
          {/* image logo */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="sub-halaman">
            <h1>Masuk</h1>
            <p>selamat datang Kembali !</p>
          </div>
        </header>

        <form className="form-daftar">
          <Form
            Nama={Nama}
            setMasukNama={setMasukNama}
            Password={Password}
            setMasukPassword={setMasukPassword}
            Error={Error}
            ErrorBE={ErrorBE}
          />

          <Button Handleclick={handleClick} />
        </form>
      </main>
    </section>
  );
}
