import { create } from "zustand";


const useFilmStore = create((set) => ({
Film: [],

  setFilm: (data) => set({ Film: data }),
 
  Genre: [],

  setGenre: (data) => set({ Genre: data }),

  DaftarFilm: [],

  setDaftarFilm: (data) => set({ DaftarFilm: data })
,
  DataAkun:[
    
    

  ],
setAkun: (data) => set({ DataAkun: data }),
 

DataMasuk:[
    
  ],
setMasuk: (data) => set({ DataMasuk: data })


//   addFilm: (film) =>
//     set((state) => ({
//       films: [...state.films, film],
//     })),

//   deleteFilm: (id) =>
//     set((state) => ({
//       films: state.films.filter((f) => f.id !== id),
//     })),
}));



export default useFilmStore;