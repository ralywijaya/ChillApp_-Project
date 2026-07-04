import PropTypes from 'prop-types'
import "../HoverFilm/HoverCard.css";
import imgListBar from "../assets/beranda/listbar.png";
import imgCentang from "../assets/beranda/centang.png";
import imgPlay from "../assets/beranda/play-circle.png";

import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AmbilDaftar,TambahDaftar,HapusDaftar } from "../SliceRedux/SliceDaftar";
import { GetDaftarGenre,PostDaftarGenre,DeleteDaftarGenre } from "../CostomHook/CostomHook";
import { useNavigate } from 'react-router-dom';
function HoverFilm({ setisEdit, i }) {
  const [deskrip,setdeskrip]=useState(false)
  const dispatch = useDispatch();
  const DaftarSaya = useSelector((state) => state.Daftar.DaftarData);
 const Navigate=useNavigate()
  useEffect(() => {
    async function getDaftarSaya() {
       const dataDaftar=await GetDaftarGenre()
      dispatch(AmbilDaftar(dataDaftar));
      console.log("daftarsaya",dataDaftar)
    }
    getDaftarSaya();
  }, [dispatch]);

  console.log("ini adalah daftar saya", DaftarSaya);

  const sudahAda = DaftarSaya.some((item) => item.idFilm == i.id);
  
const Handleclik = useCallback(async () => {
    try {
      if (sudahAda) {
        // 1. Cari data spesifik di dalam DaftarSaya untuk mendapatkan 'id' dari database (bukan idFilm)
        const dataYangMauDihapus = DaftarSaya.find(
          (item) => item.idFilm === i.id
        );

        if (dataYangMauDihapus) {
          // 2. Hapus dari API menggunakan ID database (dataYangMauDihapus.id)
          await DeleteDaftarGenre(dataYangMauDihapus.id); 
          
          // 3. Hapus dari Redux menggunakan idFilm
          dispatch(HapusDaftar(i.id)); 
        }
      } else {
        const payload = {
          idFilm: i.id,
          gambar: i.gambar,
          Nama: i.Nama,
          Genre: i.Genre,
          Category: i.Category
        };
        const DaftarSimpan = await PostDaftarGenre(payload);
        
        // Pastikan API mengembalikan data yang utuh (beserta id dari database)
        dispatch(TambahDaftar(DaftarSimpan));
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat update daftar:", error);
    }
  }, [sudahAda, i, dispatch, DaftarSaya]); // Jangan lupa tambahkan DaftarSaya di dependency array
 
  const handleMouseLeave = useCallback(() => {
    if (setisEdit) setisEdit(false);
  }, [setisEdit]);

  function Handledes(){
    setdeskrip(true)
  }
function Handleplay(){
  Navigate(`/page/${i.Nama}`)
}


  return (
    <div 
      className="hover-film" 
      onMouseLeave={handleMouseLeave}
    >
      <div className="imghover">
        <img src={i.gambar} alt={i.Nama || "Poster Film"} />
      </div>

      <div className='nama-film-hover'>
<p>{i.Nama}</p>
      </div>

      <div className="button-box">
        <div className="list-button">
          <div>
            <img onClick={Handleplay} src={imgPlay} alt="Play" />
          </div>
          <div>

              <img onClick={Handleclik} src={imgCentang} alt="Checklist" style={{ cursor: 'pointer' }} />
            
          </div>
          <div>
            <img onClick={Handledes} src={imgListBar} alt="List" />
          </div>
      
        </div>
      </div>

{deskrip? <div className='deskripsi'><p style={{fontSize:"1rem"}}>{i.deskripsi}</p></div>:""}
     

      <div className="keterangan">

        <div>
            <p>{i.umur}</p>
        </div>
        

          
              <div>
            <p>{sudahAda ? "tersimpan" : "simpan"}</p>
          </div>
        
      </div>

      <div>
        <ul style={{display:"flex",justifyContent:"space-evenly",listStyleType:"none"}}>
          {i.Genre.map((genre)=>(
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

HoverFilm.propTypes = {
  setisEdit: PropTypes.func,
  i: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gambar: PropTypes.string,
    Nama: PropTypes.string,
    Genre: PropTypes.arrayOf(PropTypes.string),
    Category: PropTypes.string
  })
}

export default HoverFilm