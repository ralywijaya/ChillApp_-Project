import { createSlice } from "@reduxjs/toolkit";

const AkunSlice=createSlice({
    name:"Akun",
    initialState:{
        AkunData:[]
    },
    reducers:{
        MasukanNama:(state,action)=>{
            state.AkunData.NamaUser=action.payload
        },
        MasukanPassword:(state,action)=>{
            state.AkunData.PasswordUser=action.payload
        },
        AmbilAkun:(state,action)=>{
            state.AkunData=action.payload
        },
        TambahAkun:(state,action)=>{
            state.AkunData.push(action.payload)
        },
      HapusAkun: (state, action) => {
    
    state.AkunData = state.AkunData.filter(
        (item) => item.id !== action.payload
    );
}
        }
     }
    )

    export const {AmbilAkun,TambahAkun,HapusAkun}=AkunSlice.actions
    export default AkunSlice.reducer