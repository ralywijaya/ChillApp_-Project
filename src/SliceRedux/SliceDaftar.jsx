import { createSlice } from "@reduxjs/toolkit";

const DaftarSlice=createSlice({
    name:"Daftar",
    initialState:{
        DaftarData:[]
    },
    reducers:{
        AmbilDaftar:(state,action)=>{
            state.DaftarData=action.payload
        },
        TambahDaftar:(state,action)=>{
            state.DaftarData.push(action.payload)
        },
      HapusDaftar: (state, action) => {
    // Ubah keduanya ke String agar pencocokan lebih aman (mencegah bug 123 !== "123")
    state.DaftarData = state.DaftarData.filter(
        (item) => item.idFilm !== action.payload
    );
}
        }
    }
    
    )

    export const {AmbilDaftar,TambahDaftar,HapusDaftar}=DaftarSlice.actions
    export default DaftarSlice.reducer