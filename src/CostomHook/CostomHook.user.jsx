import api from "../services/api";

export async function GetFilmPopuler() {
  const response = await api.get("/movieTMDB/populer");

  return response.data.results;
}
export async function GetFilmTerbaru() {
  const response = await api.get("/movieTMDB/terbaru");

  return response.data.results;
}
export async function GetFilmTopRating() {
  const response = await api.get("/movieTMDB/top-rating");

  return response.data.results;
}
export async function GetGenre() {
  const response = await api.get("/movieTMDB/genre");

  return response.data.results;
}
export async function GetDetailMovie(id) {
  const response = await api.get(`/movieTMDB/detail/${id}`);

  return response.data.certification;
}
export async function GetVideoMovie(id) {
  const response = await api.get(`/movieTMDB/video/${id}`);

  return response.data.results; ;
}
export async function GetMovieID(id) {
  const response = await api.get(`/movieTMDB/id/${id}`);

  return response.data.results; ;
}
export async function GetMovieSimiliar(id) {
  const response = await api.get(`/movieTMDB/similar/${id}`);

  return response.data.results; ;
}
export async function GetSearch(query) {
  const response = await api.get(`/movieTMDB/search?query=${query}`);

  return response.data.results; ;
}


export async function GetIDGenre(idgenre) {
  const response = await api.get(`/movieTMDB/genre/movie/?with_genres=${idgenre}`);

  return response.data.results; ;
}
export async function GetTrandingDay() {
  const response = await api.get(`/movieTMDB/tranding/day`);

  return response.data.results; ;
}




