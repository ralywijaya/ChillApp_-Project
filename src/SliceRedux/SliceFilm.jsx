import { createSlice } from "@reduxjs/toolkit";

const FilmSlice=createSlice({
    name:"Film",
    initialState:{
        Film:[]
    },
    reducers:{
        AmbilFilm:(state,action)=>{
            state.Film=action.payload
        },
        TambahFilm:(state,action)=>{
            state.Film.push(action.payload)
        },
        HapusFilm:(state,action)=>{
            state.Film=state.Film.filter((item)=>item.id!==action.payload)
        }
    }
    
    })

    export const {AmbilFilm,TambahFilm,HapusFilm}=FilmSlice.actions
    export default FilmSlice.reducer
