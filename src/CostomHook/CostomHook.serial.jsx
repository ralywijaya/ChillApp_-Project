import api from "../services/api";

export async function GetSerialPopuler() {
  const response = await api.get("/serialTMDB/populer");

  return response.data.results;
}
export async function GetSerialTerbaru() {
  const response = await api.get("/serialTMDB/terbaru");

  return response.data.results;
}
export async function GetSerialTopRating() {
  const response = await api.get("/serialTMDB/top-rating");

  return response.data.results;
}
export async function GetGenreSerial() {
  const response = await api.get("/serialTMDB/genre");

  return response.data.results;
}
export async function GetDetailSerial(id) {
  const response = await api.get(`/serialTMDB/kategoryumur/${id}`);

  return response.data.certification;
}
export async function GetVideoSerial(id) {
  const response = await api.get(`/serialTMDB/video/${id}`);

  return response.data.results; ;
}
export async function GetSerialID(id) {
  const response = await api.get(`/serialTMDB/id/${id}`);

  return response.data.results; ;
}
export async function GetSerialSimiliar(id) {
  const response = await api.get(`/serialTMDB/similar/${id}`);

  return response.data.results; ;
}




