import { configureStore } from "@reduxjs/toolkit";
import FilmReducer from "../SliceRedux/SliceFilm";
import DaftarReducer from "../SliceRedux/SliceDaftar";
import AkunReducer from "../SliceRedux/SliceAkun";
const StoreRedux=configureStore({
    reducer:{
        DaftarFilm:FilmReducer,
        Daftar:DaftarReducer,
        Akun:AkunReducer
    }
})

export default StoreRedux