import PropTypes from "prop-types";
import "../HoverFilm/HoverCard.css";
import imgListBar from "../assets/beranda/listbar.png";
import imgCentang from "../assets/beranda/centang.png";
import imgPlay from "../assets/beranda/play-circle.png";
import {
  PostDaftarSaya,
  DeleteDAftarSaya,
  GetDaftarSaya,
  GetDaftarSayaTMDB,
} from "../CostomHook/CostomHook.daftarsaya";
import { useCallback, useState } from "react";

import {
  AmbilDaftarSaya,
  AmbilDaftarVersion,
  AmbilDaftarSayaTMDB,
} from "../SliceRedux/SliceAkun";
import { useDispatch, useSelector } from "react-redux";
// import { AmbilDaftar,TambahDaftar,HapusDaftar } from "../SliceRedux/SliceDaftar";
// import { GetDaftarGenre,PostDaftarGenre,DeleteDaftarGenre,GetDaftarFilm } from "../CostomHook/CostomHook";
import { useNavigate } from "react-router-dom";
function HoverFilm({ setisEdit, i, GenreFilm, Judul }) {
  const token = localStorage.getItem("token");
  const [LoadingDaftar, setLoadingDaftar] = useState(false);
  const [ErorDaftar, setErrorDaftar] = useState("");
  const [deskrip, setdeskrip] = useState(false);
  const dispatch = useDispatch();
  const { DaftarSaya, DaftarVersion } = useSelector((state) => state.Akun);
  const Navigate = useNavigate();
  // useEffect(()=>{
  //       const DaftarSayaUser = async()=>{

  //           dispatch(LoadingDaftarSaya(true));

  //           try{
  //               const data = await GetDaftarSaya();
  //               dispatch(AmbilDaftarSaya(data.results));
  // console.table("data daftar saya",data)
  //           }catch(err){
  //               dispatch(ErrorDaftarSaya(err.message));

  //           }finally{
  //               dispatch(LoadingDaftarSaya(false));
  //           }

  //       };

  //       DaftarSayaUser();

  //   },[dispatch]);

  console.log("daftar saya hover", DaftarSaya);
  const type = i.media_type || i.type_media;

  const sudahAda = Array.isArray(DaftarSaya)
    ? DaftarSaya.some((item) => {
        if (type === "movie") {
          return (
            Number(item.tmdb_movie_id) === Number(i.id) &&
            item.type_media === "movie"
          );
        }

        if (type === "tv") {
          return (
            Number(item.tmdb_tv_id) === Number(i.id) && item.type_media === "tv"
          );
        }

        return false;
      })
    : false;

  const Handleclik = useCallback(async () => {
    if (!token) {
      setErrorDaftar("login dahulu");
    } else {
      setLoadingDaftar(true);
      try {
        if (!sudahAda) {
          // BELUM ADA → SIMPAN
          const response = await PostDaftarSaya({
            id: i.id,
            type: i.media_type || i.type_media,
          });

          console.log("Berhasil menyimpan:", response);
          alert(response.message || "Film berhasil disimpan");
          dispatch(AmbilDaftarSaya(response));
          dispatch(AmbilDaftarVersion());
        } else {
          // SUDAH ADA → CARI DATA UNTUK DIHAPUS

          const response = await DeleteDAftarSaya({
            id: i.id,
            type: i.media_type || i.type_media,
          });

          dispatch(AmbilDaftarVersion());
          console.log("Berhasil menghapus:", response);
          alert(response.message || "Film berhasil dihapus");
        }
        const DataDaftarSaya = await GetDaftarSaya();
        dispatch(AmbilDaftarSaya(DataDaftarSaya));
        const data = await GetDaftarSayaTMDB();

        dispatch(AmbilDaftarSayaTMDB(data));

        // Ambil ulang daftar setelah perubahan
        // const data = await GetDaftarSaya();

        // dispatch(AmbilDaftarSaya(data.results));
      } catch (error) {
        console.log("ERROR:", error.response?.data || error.message);

        setErrorDaftar("Gagal mengubah Daftar Saya");
      } finally {
        setLoadingDaftar(false);
      }
    }
  }, [sudahAda, i, DaftarSaya, dispatch, DaftarVersion]);

  const handleMouseLeave = useCallback(() => {
    if (setisEdit) setisEdit(false);
  }, [setisEdit]);

  function Handledes() {
    setdeskrip(!deskrip);
  }

  function Handleplay() {
    if (i.media_type || i.type_media === "movie") {
      Navigate(`/page/${i.id}`);
    }
    if (i.media_type || i.type_media === "tv") {
      Navigate(`/PageSerial/${i.id}`);
    }
  }

  let getGenre = [];

  if (Array.isArray(i?.genres)) {
    getGenre = i.genres.map((genre) => genre.name).filter(Boolean);
  } else if (Array.isArray(i?.genre_ids)) {
    getGenre = i.genre_ids
      .map((id) => {
        const genre = GenreFilm?.find((item) => item.id === id);

        return genre?.name;
      })
      .filter(Boolean);
  }

  return (
    <div className="hover-film" onMouseLeave={handleMouseLeave}>
      <div className="imghover">
        <img
          src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
          alt={i.title}
        />
      </div>

      <div className="nama-film-hover">
        <p>{Judul}</p>
        {LoadingDaftar ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          ""
        )}
        {ErorDaftar ? (
          <>
            <p>{ErorDaftar}</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="button-box">
        <div className="list-button">
          <div>
            <img onClick={Handleplay} src={imgPlay} alt="Play" />
          </div>
          <div>
            <img
              onClick={Handleclik}
              src={imgCentang}
              alt="Checklist"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img onClick={Handledes} src={imgListBar} alt="List" />
          </div>
        </div>
      </div>

      {deskrip ? (
        <div className="deskripsi">
          <p style={{ fontSize: "1rem" }}>{i.overview}</p>
        </div>
      ) : (
        ""
      )}

      <div className="keterangan">
        <div>
          <p>{i.release_date}</p>
        </div>

        <div>
          <p>{sudahAda ? "✓" : ""}</p>
        </div>
      </div>

      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyleType: "none",
          }}
        >
          {getGenre?.join(", ")}
        </p>
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
    Category: PropTypes.string,
  }),
};

export default HoverFilm;
