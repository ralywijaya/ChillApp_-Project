import "./Genre.css";
import HoverFilm from "../HoverFilm/HoverFilm";
import { useDispatch } from "react-redux";
import { GetIDGenre } from "../CostomHook/CostomHook.user";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LoadingFilm, errorFilm } from "../SliceRedux/SliceFilm";

export default function Genremenu() {
  const [isEdit, setisEdit] = useState(false);
  const [filmAktif, setFilmAktif] = useState(null);
  const { id, nama } = useParams();
  const [Movie, setMovie] = useState([]);

  const { loading, eror, GenreFilm } = useSelector((state) => state.DaftarFilm);
  const dispatch = useDispatch();
  // Ambil data Film, beri fallback array kosong [] jika state awalnya null/undefined

  useEffect(() => {
    const MoviePopuler = async () => {
      dispatch(LoadingFilm(true));

      try {
        const data = await GetIDGenre(id);
        setMovie(data);
      } catch (err) {
        dispatch(errorFilm(err.message));
      } finally {
        dispatch(LoadingFilm(false));
      }
    };

    MoviePopuler();
  }, [id]);
  // console.log("ini genre movie", Movie);
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  // PENGAMAN 1: Jika data Film benar-benar belum terisi/masih kosong, langsung lewati filter

  return (
    <section className="section-film">
      <h2>{nama}</h2>
      <div className="card-film">
        {Movie?.map((i) => (
          <div className="box-film" key={i.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
              alt={i.title}
              onClick={() => {
                setisEdit(true);
                setFilmAktif(i.id);
              }}
            />
            {filmAktif == i.id && isEdit && (
              <HoverFilm
                setisEdit={setisEdit}
                Judul={i.title}
                i={i}
                GenreFilm={GenreFilm}
              />
            )}
            <div className="judul_movie">
              <p>{i.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
