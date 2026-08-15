import api from "../services/api";


export async function PostDaftarSaya(data) {
  const response =await api.post('/daftarsaya',data);
 
  return response.data ;
}
export async function DeleteDAftarSaya(data) {
  const response = await api.delete('/daftarsaya', {
    data: data
  });

  return response.data;
}
export async function GetDaftarSaya() {
  const response =await api.get('/daftarsaya');
 
  return response.data.results ;
}
export async function GetDaftarSayaTMDB() {
  const response =await api.get('/daftarsaya/TMDB');
 
  return response.data.results; ;
}
