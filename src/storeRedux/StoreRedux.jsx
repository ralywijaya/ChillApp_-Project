import { configureStore } from "@reduxjs/toolkit";
import SerialReducer from "../SliceRedux/sliceSerial";
import FilmReducer from "../SliceRedux/SliceFilm";
import DaftarReducer from "../SliceRedux/SliceDaftar";
import AkunReducer from "../SliceRedux/SliceAkun";
const StoreRedux=configureStore({
    reducer:{
        DaftarFilm:FilmReducer,
        DaftarSerial:SerialReducer,
        Daftar:DaftarReducer,
        Akun:AkunReducer
    }
})

export default StoreRedux