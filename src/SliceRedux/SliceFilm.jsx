import { createSlice } from "@reduxjs/toolkit";

const FilmSlice = createSlice({
  name: "Film",
  initialState: {
    TrandingDay: [],
    FilmPopuler: [],
    FilmTopRating: [],
    FilmTerbaru: [],
    GenreFilm: [],
    MovieID: [],
    loading: false,
    eror: null,
  },
  reducers: {
    AmbilPopulerMovie: (state, action) => {
      state.FilmPopuler = action.payload;
    },
    AmbilTopRatingMovie: (state, action) => {
      state.FilmTopRating = action.payload;
    },
    AmbilTerbaruMovie: (state, action) => {
      state.FilmTerbaru = action.payload;
    },

    AmbilGenreMovie: (state, action) => {
      state.GenreFilm = action.payload;
    },
    AmbilMovieID: (state, action) => {
      state.MovieID = action.payload;
    },
    AmbilTrandingDay: (state, action) => {
      state.TrandingDay = action.payload;
    },
    LoadingFilm: (state, action) => {
      state.loading = action.payload;
    },

    errorFilm: (state, action) => {
      state.eror = action.payload;
    },
    TambahFilm: (state, action) => {
      state.FilmPopuler.push(action.payload);
    },
    HapusFilm: (state, action) => {
      state.FilmPopuler = state.FilmPopuler.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  AmbilPopulerMovie,
  AmbilTopRatingMovie,
  AmbilTerbaruMovie,
  LoadingFilm,
  TambahFilm,
  HapusFilm,
  errorFilm,
  AmbilGenreMovie,
  AmbilMovieID,
  AmbilTrandingDay,
} = FilmSlice.actions;
export default FilmSlice.reducer;
