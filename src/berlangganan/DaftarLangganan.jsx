import { useParams } from "react-router-dom";
import "../../src/tamplate.css";
import CardBerdua from "./CardBerdua";
import CardIndividual from "./CardIndividual";
import CardKeluarga from "./CardKeluarga";
import "./DaftarLangganan.css";
import { UbahPaketUser } from "../SliceRedux/SliceAkun";
import ProfilBelumLogin from "../ProfilSaya/ProfilBelumLogin";
import "./Berlangganan.css";
import { useState } from "react";
import { UbahPaket } from "../CostomHook/CostomHook";
import { useDispatch } from "react-redux";

export default function DaftarLangganan() {
  const dispatch = useDispatch();
  const { paket } = useParams();
  const token = localStorage.getItem("token");

  const [Loading, setLoading] = useState(false);
  const [Eror, setEror] = useState("");

  if (!token || typeof token !== "string") {
    return <ProfilBelumLogin />;
  }

  function HandelClick() {
    const DataPaket = async () => {
      setLoading(true);

      try {
        const data = await UbahPaket({ user_paket: paket });
        console.log("data paket", data);
        dispatch(UbahPaketUser(data.data));
        alert("selamat paket anda berhasil diaktifkan ");

        console.log("daftar saya tmdb:", data);
      } catch (err) {
        console.log("ERROR:", err);
        console.log("RESPONSE:", err.response?.data);

        setEror(err.message);
      } finally {
        setLoading(false);
      }
    };

    DataPaket();
  }

  if (Loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (Eror) {
    return <h1 style={{ textAlign: "center" }}>{Eror}</h1>;
  }

  return (
    <section className="ringkasan-pembayaran">
      <div className="box-Langganan">
        {paket === "Keluarga" ? (
          <CardKeluarga />
        ) : paket === "Berdua" ? (
          <CardBerdua />
        ) : paket === "individual" ? (
          <CardIndividual />
        ) : null}
      </div>

      <div className="box-pembayaran">
        <div className="metode-pembayaran">
          <div className="kartu-kredit">
            <div className="input-kredit">
              <input type="radio" name="metode" id="virtual" />
            </div>

            <div className="img-kredit">
              <img src="" alt="" />
            </div>

            <div className="nama-kredit">
              <p>Kartu Debit/Kredit</p>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="kartu-virtual">
            <div className="input-virtual">
              <input type="radio" name="metode" id="virtual" />
            </div>

            <div className="img-virtual">
              <img src="" alt="" />
            </div>

            <div className="nama-virtual">
              <p>BCA Virtual Acount</p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="kode-voucher">
          <div className="label-voucher">
            <label htmlFor="voucher">Kode Voucher</label>
          </div>
          <div className="input-voucher">
            <div className="voucher">
              <input
                type="text"
                id="voucher"
                placeholder="Masukkan kode voucher"
              />
            </div>

            <div className="button-voucher">
              <button className="btn-minimalis">Gunakan</button>
            </div>
          </div>
        </div>

        <div className="ringkasan-transaksi">
          <div className="subjudul-ringkasan">
            <p>Ringkasan Transaksi</p>
          </div>

          <div className="daftar-ringkasan">
            <div className="jenis-paket-ringkasan">
              <p style={{ color: "#C1C2C4" }}>{`Paket Premium ${paket}`}</p>
              <p>Rp00.000</p>
            </div>
            <div className="biaya-admin">
              <p style={{ color: "#C1C2C4" }}>Biaya Admin</p>
              <p> Rp0.000</p>
            </div>
            <div className="biaya-total">
              <p style={{ color: "#C1C2C4" }}>Total Pembayaran</p>
              <p style={{ fontSize: "1.6rem", color: "#" }}> Rp000</p>
            </div>
          </div>
        </div>

        <div className="button-membayar">
          {" "}
          <button onClick={HandelClick}>Bayar</button>
        </div>
      </div>
    </section>
  );
}
