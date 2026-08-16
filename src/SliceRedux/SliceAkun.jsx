import { createSlice } from "@reduxjs/toolkit";

const AkunSlice = createSlice({
  name: "Akun",
  initialState: {
    AkunData: [],
    FotoProfil: [],
    DaftarSaya: [],
    DaftarSayaTMDB: [],
    UserPaket: "",
    DaftarVersion: 0,
    loading: false,
    eror: null,
  },
  reducers: {
    MasukanNama: (state, action) => {
      state.AkunData.user_nama = action.payload;
    },
    MasukanPassword: (state, action) => {
      state.AkunData.user_password = action.payload;
    },
    AmbilFotoProfil: (state, action) => {
      state.AkunData.user_password = action.payload;
    },
    AmbilDaftarSaya: (state, action) => {
      state.DaftarSaya = action.payload;
    },
    UbahPaketUser: (state, action) => {
      state.UserPaket = action.payload;
    },
    AmbilDaftarSayaTMDB: (state, action) => {
      state.DaftarSayaTMDB = action.payload;
    },
    AmbilDaftarVersion: (state) => {
      state.DaftarVersion = +1;
    },

    AmbilAkun: (state, action) => {
      state.AkunData = action.payload;
    },
    TambahAkun: (state, action) => {
      state.AkunData.push(action.payload);
    },
    LoadingDaftarSaya: (state, action) => {
      state.loading = action.payload;
    },

    ErrorDaftarSaya: (state, action) => {
      state.eror = action.payload;
    },
    HapusAkun: (state, action) => {
      state.AkunData = state.AkunData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  AmbilAkun,
  TambahAkun,
  HapusAkun,
  AmbilFotoProfil,
  AmbilDaftarSaya,
  LoadingDaftarSaya,
  ErrorDaftarSaya,
  AmbilDaftarVersion,
  AmbilDaftarSayaTMDB,
  UbahPaketUser,
} = AkunSlice.actions;
export default AkunSlice.reducer;
