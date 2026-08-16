import Warning from "../assets/beranda/Warning.png";
import { useNavigate } from "react-router-dom";

export default function ProfilBelumLogin() {
  const Navigate = useNavigate();
  return (
    <div className="box-langganan">
      <div>
        <img src={Warning} alt="Warning" />
      </div>
      <div className="note-warning">
        <h2>Saat ini anda belum Login</h2>
        <p>Lakukan Login untuk akses yang lebih luas !</p>{" "}
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <button
              onClick={() => {
                Navigate("/Masuk");
              }}
              style={{
                width: "6rem",
                height: "2rem",
                borderRadius: "0.6rem",
                fontSize: "1.2rem",
              }}
            >
              Login
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                Navigate("/Register");
              }}
              style={{
                width: "6rem",
                height: "2rem",
                borderRadius: "0.6rem",
                fontSize: "1.2rem",
              }}
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
