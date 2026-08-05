
import api from "../services/api";

export async function GetDaftarFilm() {
  const response = await api.get("/DaftarFilm");

  return response.data;
}

export async function PostDaftarFilm(data) {
  const response = await api.post("/DaftarFilm", data);

  return response.data;
}

export async function PutDaftarFilm(id, data) {
  const response = await api.put(`/DaftarFilm/${id}`, data);

  return response.data;
}

export async function DeleteDaftarFilm(id) {
  await api.delete(`/DaftarFilm/${id}`);
}

  export async function PostDaftarGenre(data) {
  const response = await api.post("/DaftarGenre", data);

  return response.data;
}
  export async function GetDaftarGenre() {
  const response = await api.get("/DaftarGenre");

  return response.data;
}

export async function PutDaftarGenre(id, data) {
  const response = await api.put(`/DaftarGenre/${id}`, data);

  return response.data;
}

export async function DeleteDaftarGenre(id) {
  await api.delete(`/DaftarGenre/${id}`);
}



// hook data user
export async function PostUser(data) {
  await api.post('/user',data);
}
export async function AunthLogin(data) {
  await api.post('/aunth/login',data);
}




