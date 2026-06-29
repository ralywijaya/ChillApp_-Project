import "./Genre.css"
import useFilmStore from "../StateManagement"
import { useParams } from "react-router-dom"
import api from "../services/api"
import { useEffect } from "react"

export default function Genremenu() {
  const { name } = useParams() 
  
  // Ambil data Film, beri fallback array kosong [] jika state awalnya null/undefined
  const Film = useFilmStore((state) => state.Film) || []
  const setFilm = useFilmStore((state) => state.setFilm)

  function getData() {
    api.get("/DaftarFilm")
      .then((Response) => {
        setFilm(Response.data)
      })
      .catch((eror) => {
        console.log(eror)
      })
      .finally(() => {
        console.log("complete")
      })
  }

  useEffect(() => {
    getData()
  }, [])

  // PENGAMAN 1: Jika data Film benar-benar belum terisi/masih kosong, langsung lewati filter
  const FilterGenre = Film.filter((item) => {
    // PENGAMAN 2: Pastikan item memiliki properti Genre dan berbentuk Array sebelum memanggil .some()
    if (item && item.Genre && Array.isArray(item.Genre)) {
      return item.Genre.some(g => g.toLowerCase() === name.toLowerCase())
    }
    return false // Abaikan film jika tidak punya genre berformat array
  })

  console.log("Hasil Filter:", FilterGenre)

  return (
    <section className="daftar-saya">
      <h2>{name}</h2>
      
      <div className="card-daftar-saya">
        {/* Jika hasil filter kosong, beri pesan teks biar user tidak bingung */}
        {FilterGenre.length === 0 ? (
          <p>Tidak ada film dengan genre "{name}"</p>
        ) : (
          FilterGenre.map((i) => (
            <div className="box-daftar-saya" key={i.id}>
              {/* Double check: sesuaikan i.gambar atau i.Gambar dengan db.json kamu */}
              <img src={i.gambar || i.Gambar} alt={i.nama || "Poster Film"} />
            </div>
          ))
        )}
      </div>
    </section>
  )
}