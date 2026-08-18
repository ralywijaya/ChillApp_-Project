import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import HoverFilm from "./HoverFilm"
// import { Film} from "./FilmContax"
import ProfilBelumLogin from "../ProfilSaya/ProfilBelumLogin";
import HoverFilm from "../HoverFilm/HoverFilm";
import {
  AmbilDaftarSayaTMDB,
  LoadingDaftarSaya,
  ErrorDaftarSaya,
} from "../SliceRedux/SliceAkun";
import { GetDaftarSayaTMDB } from "../CostomHook/CostomHook.daftarsaya";
import { useEffect } from "react";

export default function SectionTopRating() {
  const { GenreFilm } = useSelector((state) => state.DaftarFilm);
  const { GenreSerial } = useSelector((state) => state.DaftarSerial);
  const { DaftarSayaTMDB, loading, eror, DaftarVersion } = useSelector(
    (state) => state.Akun
  );
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [isEdit, setisEdit] = useState(false);
  const [filmAktif, setFilmAktif] = useState(null);
  const scrollref = useRef(null);

  useEffect(() => {
    const MoviePopuler = async () => {
      dispatch(LoadingDaftarSaya(true));

      try {
        const data = await GetDaftarSayaTMDB();

        dispatch(AmbilDaftarSayaTMDB(data));

        // console.log("daftar saya tmdb:", data);
      } catch (err) {
        dispatch(ErrorDaftarSaya(err.message));
      } finally {
        dispatch(LoadingDaftarSaya(false));
      }
    };

    MoviePopuler();
  }, [dispatch, DaftarVersion]);

  if (!token || typeof token !== "string") {
    return <ProfilBelumLogin />;
  }

  //   const [isEdit,setisEdit]=useState(false)
  // const [filmAktif, setFilmAktif] = useState(null);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  return (
    <section className="section-film">
      <h2>Daftar Saya</h2>
      <div ref={scrollref} className="card-film">
        {DaftarSayaTMDB?.map((i) => (
          <div className="box-film" key={i.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
              alt={i.title || i.name}
              onClick={() => {
                setisEdit(true);
                setFilmAktif(i.id);
              }}
            />
            {filmAktif == i.id && isEdit && (
              <HoverFilm
                setisEdit={setisEdit}
                Judul={i.title || i.name}
                i={i}
                GenreFilm={GenreFilm || GenreSerial}
              />
            )}
            <div className="judul_movie">
              <p>{i.title || i.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
