import { jwtDecode } from "jwt-decode";
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

export async function AunthLogin(data) {
 const response= await api.post('/aunth/login',data);
 return response.data ;
}
export async function PostUser(data) {
  const response =await api.post('/user',data);

  return response.data ;
}
export async function DeleteUser() {
   const token = localStorage.getItem('token');

  // Urutan Axios Patch: (URL, Body Data, Config/Headers)
  const response = await api.delete(
    '/user', 
    
    {
      headers: {
        Authorization: `Bearer ${token}` // Kirim token di header
      }
    }
  );

  return response.data ;
}
export const UbahUser = async (bodyData) => {
  const token = localStorage.getItem('token');

  // Urutan Axios Patch: (URL, Body Data, Config/Headers)
  const response = await api.patch(
    '/user', 
    bodyData, 
    {
      headers: {
        Authorization: `Bearer ${token}` // Kirim token di header
      }
    }
  );

  return response.data;
};



export async function PostUserEmail(data) {
  const response =await api.post('/login/google',data);
 
  return response.data ;
}


export async function FotoProfil(data) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token tidak ditemukan");
  }

  const id = jwtDecode(token);

  const response = await api.patch(
    `/user/upload/${id.user_id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}


export async function TambahEmail(data) {
  const response = await api.patch(
    '/user/upload_email',
    data
  );

  return response.data;
}
