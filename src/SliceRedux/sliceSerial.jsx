import { createSlice } from "@reduxjs/toolkit";

const SerialSlice=createSlice({
    name:"Serial",
    initialState:{
        SerialPopuler:[],
        SerialTopRating:[],
        SerialTerbaru:[],
        GenreSerial:[],
        SerialID:[],
        loading:false,
        eror:null
    },
    reducers:{
        AmbilPopulerSerial:(state,action)=>{
            state.SerialPopuler=action.payload
        },
        AmbilTopRatingSerial:(state,action)=>{
            state.SerialTopRating=action.payload
        },
        AmbilTerbaruSerial:(state,action)=>{
            state.SerialTerbaru=action.payload
        },

        AmbilGenreSerial:(state,action)=>{
            state.GenreSerial=action.payload
        },
        AmbilSerialID:(state,action)=>{  
            state.SerialID=action.payload
        },
        LoadingSerial:(state,action)=>{
            state.loading=action.payload
        },

        errorSerial:(state,action)=>{
            state.eror=action.payload
        },
        TambahSerial:(state,action)=>{
            state.SerialPopuler.push(action.payload)
        },
        HapusSerial:(state,action)=>{
            state.SerialPopuler=state.SerialPopuler.filter((item)=>item.id!==action.payload)
        }
    }
    
    })

    export const {AmbilPopulerSerial,AmbilTopRatingSerial,AmbilTerbaruSerial,LoadingSerial,TambahSerial,HapusSerial,errorSerial,AmbilGenreSerial,AmbilSerialID}=SerialSlice.actions
    export default SerialSlice.reducer