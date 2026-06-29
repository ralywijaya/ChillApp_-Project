import "../HoverFilm/HoverCard.css";
import imgListBar from "../assets/beranda/listbar.png";
import imgCentang from "../assets/beranda/centang.png";
import imgPlay from "../assets/beranda/Vector.png";

import useFilmStore from "../StateManagement";
import { useEffect } from "react";
import api from "../services/api";
export default function HoverFilm({ setisEdit, i }) {
  
  const DaftarSaya = useFilmStore((state) => state.DaftarFilm) || [];
  const setDaftarSaya = useFilmStore((state) => state.setDaftarFilm);

 
 function getDaftarSaya() {
    api.get("/DaftarGenre")
      .then((Response) => {
        setDaftarSaya(Response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
      });
  }
  useEffect(() => {
    getDaftarSaya();
  }, []);
 console.log("daftarsaya",DaftarSaya)
  if (!i) return null;

function deletedfilm(idDiDatabase) {
  api.delete(`/DaftarGenre/${idDiDatabase}`)
    .then(() => {
      console.log("Berhasil dihapus dari database");
    
      const dataTerbaru = DaftarSaya.filter((item) => item.id !== idDiDatabase);
      setDaftarSaya(dataTerbaru);
    })
    .catch((err) => console.log("Gagal menghapus:", err));
}

function simpanFilm(dataBaru) {
  api.post("/DaftarGenre", dataBaru)
    .then((Response) => {
      console.log("Berhasil disimpan ke database");
      
     
      const dataTerbaru = [...DaftarSaya, Response.data];
      setDaftarSaya(dataTerbaru);
    })
    .catch((err) => console.log("Gagal menyimpan:", err));
}

const sudahAda = DaftarSaya.some((item) => item.idFilm === i.id);
 console.log("ini lo",)
function Handleclik() {
  
  const itemSaya = DaftarSaya.find((x) => x.idFilm === i.id || x.id === i.id);

  if (itemSaya) {
    // Jika SUDAH ADA, maka panggil fungsi hapus berdasarkan ID unik yang ada di MockAPI
    deletedfilm(itemSaya.id);
    
  } else {
   
    const payload = {
      idFilm: i.id, // Menyimpan ID asli film sebagai referensi
      gambar: i.gambar,
      Nama: i.Nama,
      Genre: i.Genre,
      Category: i.Category
    };
    simpanFilm(payload);
  }
}
 
  
 


  return (
    <div className="hover-film" onMouseLeave={() => { if (setisEdit) setisEdit(false); }}>
      <div className="imghover">
        <img src={i.gambar} alt={i.Nama || "Poster Film"} />
      </div>

      <div className="button-box">
        <div className="list-button">
          <div>
            <img src={imgPlay} alt="Play" />
          </div>
          <div>
            <img onClick={Handleclik} src={imgCentang} alt="Checklist" style={{ cursor: 'pointer' }} />
          </div>
          <div>
            <img src={imgListBar} alt="List" />
          </div>
 <div>
          <p>{sudahAda ? "tersimpan" : "simpan"}</p>
        </div>


        </div>
      </div>

      <div className="keterangan">
        <div>
          <p>13+</p>
        </div>
       
       
      </div>

      <div>
        <ul style={{display:"flex",justifyContent:"space-evenly",listStyleType:"none"}}>
          {i.Genre.map((i)=>(
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}